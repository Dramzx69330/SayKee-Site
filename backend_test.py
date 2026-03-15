#!/usr/bin/env python3
import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://preview-redesign.preview.emergentagent.com/api"

class AuthenticationTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.token = None
        self.test_results = []
        
    def log_result(self, test_name, success, details, expected=None, actual=None):
        """Log test result with details"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "expected": expected,
            "actual": actual,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"\n{status} {test_name}")
        print(f"   Details: {details}")
        if not success and expected and actual:
            print(f"   Expected: {expected}")
            print(f"   Actual: {actual}")
    
    def test_register_new_user(self):
        """Test registering a new user"""
        test_name = "POST /api/auth/register - New User"
        
        # Use unique timestamp to avoid conflicts
        timestamp = int(datetime.now().timestamp())
        payload = {
            "pseudo": f"NewUser{timestamp}",
            "email": f"newuser{timestamp}@test.com", 
            "password": "test123"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/register", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("success") and data.get("token") and 
                    data.get("user") and data["user"]["pseudo"] == payload["pseudo"]):
                    self.log_result(test_name, True, f"User {payload['pseudo']} created successfully with token")
                    return data.get("token")  # Return token for potential future tests
                else:
                    self.log_result(test_name, False, "Response missing required fields", 
                                  "success=True, token, user data", str(data))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
            
        return None
    
    def test_register_duplicate_email(self):
        """Test registering with duplicate email"""
        test_name = "POST /api/auth/register - Duplicate Email"
        
        payload = {
            "pseudo": "AnotherUser",
            "email": "testuser@example.com",  # Existing email from users.json
            "password": "test123"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/register", json=payload)
            
            if response.status_code == 400:
                data = response.json()
                if "email" in data.get("detail", "").lower():
                    self.log_result(test_name, True, "Correctly rejected duplicate email")
                else:
                    self.log_result(test_name, False, "Wrong error message", 
                                  "Email already used error", data.get("detail"))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "400 Bad Request", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_register_duplicate_pseudo(self):
        """Test registering with duplicate pseudo"""
        test_name = "POST /api/auth/register - Duplicate Pseudo"
        
        payload = {
            "pseudo": "TestUser123",  # Existing pseudo from users.json
            "email": "newemail@test.com",
            "password": "test123"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/register", json=payload)
            
            if response.status_code == 400:
                data = response.json()
                if "pseudo" in data.get("detail", "").lower():
                    self.log_result(test_name, True, "Correctly rejected duplicate pseudo")
                else:
                    self.log_result(test_name, False, "Wrong error message", 
                                  "Pseudo already used error", data.get("detail"))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "400 Bad Request", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_login_valid_credentials(self):
        """Test login with valid credentials"""
        test_name = "POST /api/auth/login - Valid Credentials"
        
        payload = {
            "email": "testuser@example.com",
            "password": "motdepasse123"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/login", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("success") and data.get("token") and 
                    data.get("user") and data["user"]["email"] == payload["email"]):
                    self.token = data.get("token")  # Store token for /me test
                    self.log_result(test_name, True, "Login successful with token")
                    return data.get("token")
                else:
                    self.log_result(test_name, False, "Response missing required fields", 
                                  "success=True, token, user data", str(data))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
            
        return None
    
    def test_login_wrong_password(self):
        """Test login with wrong password"""
        test_name = "POST /api/auth/login - Wrong Password"
        
        payload = {
            "email": "testuser@example.com",
            "password": "wrongpassword"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/login", json=payload)
            
            if response.status_code == 401:
                data = response.json()
                if "identifiants incorrects" in data.get("detail", "").lower():
                    self.log_result(test_name, True, "Correctly rejected wrong password")
                else:
                    self.log_result(test_name, False, "Wrong error message", 
                                  "Identifiants incorrects", data.get("detail"))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "401 Unauthorized", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_login_nonexistent_email(self):
        """Test login with non-existent email"""
        test_name = "POST /api/auth/login - Non-existent Email"
        
        payload = {
            "email": "nonexistent@example.com",
            "password": "anypassword"
        }
        
        try:
            response = requests.post(f"{self.base_url}/auth/login", json=payload)
            
            if response.status_code == 401:
                data = response.json()
                if "identifiants incorrects" in data.get("detail", "").lower():
                    self.log_result(test_name, True, "Correctly rejected non-existent email")
                else:
                    self.log_result(test_name, False, "Wrong error message", 
                                  "Identifiants incorrects", data.get("detail"))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "401 Unauthorized", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_get_me_valid_token(self):
        """Test /auth/me with valid token"""
        test_name = "GET /api/auth/me - Valid Token"
        
        if not self.token:
            self.log_result(test_name, False, "No valid token available from login test")
            return
            
        headers = {"Authorization": f"Bearer {self.token}"}
        
        try:
            response = requests.get(f"{self.base_url}/auth/me", headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("id") and data.get("pseudo") and 
                    data.get("email") and data.get("created_at")):
                    self.log_result(test_name, True, f"Retrieved user info for {data.get('pseudo')}")
                else:
                    self.log_result(test_name, False, "Response missing required user fields", 
                                  "id, pseudo, email, created_at", str(data))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_get_me_invalid_token(self):
        """Test /auth/me with invalid token"""
        test_name = "GET /api/auth/me - Invalid Token"
        
        headers = {"Authorization": "Bearer invalid_token_12345"}
        
        try:
            response = requests.get(f"{self.base_url}/auth/me", headers=headers)
            
            if response.status_code == 401:
                data = response.json()
                if "token" in data.get("detail", "").lower():
                    self.log_result(test_name, True, "Correctly rejected invalid token")
                else:
                    self.log_result(test_name, False, "Wrong error message", 
                                  "Token error", data.get("detail"))
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "401 Unauthorized", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_get_me_no_token(self):
        """Test /auth/me without token"""
        test_name = "GET /api/auth/me - No Token"
        
        try:
            response = requests.get(f"{self.base_url}/auth/me")
            
            if response.status_code == 403:  # FastAPI HTTPBearer returns 403 for missing token
                self.log_result(test_name, True, "Correctly rejected request without token")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}: {response.text}",
                              "403 Forbidden", f"{response.status_code}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all authentication tests"""
        print(f"🔄 Starting Authentication API Tests")
        print(f"Backend URL: {self.base_url}")
        print("=" * 80)
        
        # Test registration
        self.test_register_new_user()
        self.test_register_duplicate_email()
        self.test_register_duplicate_pseudo()
        
        # Test login
        self.test_login_valid_credentials()
        self.test_login_wrong_password()
        self.test_login_nonexistent_email()
        
        # Test /me endpoint
        self.test_get_me_valid_token()
        self.test_get_me_invalid_token()
        self.test_get_me_no_token()
        
        print("\n" + "=" * 80)
        self.print_summary()
    
    def print_summary(self):
        """Print test summary"""
        passed = sum(1 for result in self.test_results if result["success"])
        failed = len(self.test_results) - passed
        
        print(f"📊 TEST SUMMARY:")
        print(f"   Total Tests: {len(self.test_results)}")
        print(f"   Passed: {passed}")
        print(f"   Failed: {failed}")
        
        if failed > 0:
            print(f"\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"   • {result['test']}: {result['details']}")
        else:
            print(f"\n🎉 All tests passed!")
        
        return failed == 0

if __name__ == "__main__":
    tester = AuthenticationTester()
    all_passed = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if all_passed else 1)