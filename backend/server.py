from fastapi import FastAPI, APIRouter, HTTPException, Request, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import json
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional
import uuid
from datetime import datetime, timezone, timedelta
import jwt

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# File paths for JSON storage
USERS_FILE = ROOT_DIR / 'data' / 'users.json'
ACCOUNT_LOGS_FILE = ROOT_DIR / 'data' / 'account_created.json'

# JWT Secret (simple secret for this use case)
JWT_SECRET = "saykee_secret_key_2024"
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_HOURS = 24

# Create data directory if not exists
(ROOT_DIR / 'data').mkdir(exist_ok=True)

# Initialize files if they don't exist
def init_files():
    if not USERS_FILE.exists():
        with open(USERS_FILE, 'w') as f:
            json.dump([], f, indent=2)
    if not ACCOUNT_LOGS_FILE.exists():
        with open(ACCOUNT_LOGS_FILE, 'w') as f:
            json.dump([], f, indent=2)

init_files()

# Helper functions for file operations
def read_users():
    with open(USERS_FILE, 'r') as f:
        return json.load(f)

def write_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f, indent=2, ensure_ascii=False)

def read_logs():
    with open(ACCOUNT_LOGS_FILE, 'r') as f:
        return json.load(f)

def write_logs(logs):
    with open(ACCOUNT_LOGS_FILE, 'w') as f:
        json.dump(logs, f, indent=2, ensure_ascii=False)

def get_client_ip(request: Request) -> str:
    # Try to get real IP from headers (for proxied requests)
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip
    return request.client.host if request.client else "unknown"

def create_token(user_id: str, email: str) -> str:
    expiration = datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRATION_HOURS)
    payload = {
        "user_id": user_id,
        "email": email,
        "exp": expiration
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expiré")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token invalide")

# Security
security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    payload = verify_token(token)
    users = read_users()
    user = next((u for u in users if u["id"] == payload["user_id"]), None)
    if not user:
        raise HTTPException(status_code=401, detail="Utilisateur non trouvé")
    return user

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class RegisterRequest(BaseModel):
    pseudo: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    pseudo: str
    email: str
    created_at: str

class AuthResponse(BaseModel):
    success: bool
    message: str
    token: Optional[str] = None
    user: Optional[UserResponse] = None

# Routes
@api_router.get("/")
async def root():
    return {"message": "SayKee API - Système d'authentification par fichiers"}

@api_router.post("/auth/register", response_model=AuthResponse)
async def register(data: RegisterRequest, request: Request):
    users = read_users()
    
    # Check if email already exists
    existing_user = next((u for u in users if u["email"].lower() == data.email.lower()), None)
    if existing_user:
        raise HTTPException(status_code=400, detail="Cet email est déjà utilisé")
    
    # Check if pseudo already exists
    existing_pseudo = next((u for u in users if u["pseudo"].lower() == data.pseudo.lower()), None)
    if existing_pseudo:
        raise HTTPException(status_code=400, detail="Ce pseudo est déjà utilisé")
    
    # Get client IP
    client_ip = get_client_ip(request)
    
    # Create new user
    now = datetime.now(timezone.utc).isoformat()
    new_user = {
        "id": str(uuid.uuid4()),
        "pseudo": data.pseudo,
        "email": data.email.lower(),
        "password": data.password,  # En clair comme demandé
        "created_at": now,
        "ip": client_ip
    }
    
    # Add to users file
    users.append(new_user)
    write_users(users)
    
    # Add to logs file
    logs = read_logs()
    log_entry = {
        "email": data.email.lower(),
        "pseudo": data.pseudo,
        "ip": client_ip,
        "created_at": now
    }
    logs.append(log_entry)
    write_logs(logs)
    
    # Create token
    token = create_token(new_user["id"], new_user["email"])
    
    return AuthResponse(
        success=True,
        message="Compte créé avec succès !",
        token=token,
        user=UserResponse(
            id=new_user["id"],
            pseudo=new_user["pseudo"],
            email=new_user["email"],
            created_at=new_user["created_at"]
        )
    )

@api_router.post("/auth/login", response_model=AuthResponse)
async def login(data: LoginRequest, request: Request):
    users = read_users()
    
    # Find user by email
    user = next((u for u in users if u["email"].lower() == data.email.lower()), None)
    
    if not user:
        raise HTTPException(status_code=401, detail="Identifiants incorrects")
    
    # Check password (en clair)
    if user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Identifiants incorrects")
    
    # Create token
    token = create_token(user["id"], user["email"])
    
    return AuthResponse(
        success=True,
        message="Connexion réussie !",
        token=token,
        user=UserResponse(
            id=user["id"],
            pseudo=user["pseudo"],
            email=user["email"],
            created_at=user["created_at"]
        )
    )

@api_router.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    return UserResponse(
        id=current_user["id"],
        pseudo=current_user["pseudo"],
        email=current_user["email"],
        created_at=current_user["created_at"]
    )

@api_router.post("/auth/logout")
async def logout():
    # Le logout se fait côté client en supprimant le token
    return {"success": True, "message": "Déconnexion réussie"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
