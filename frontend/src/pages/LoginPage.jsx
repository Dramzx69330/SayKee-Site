import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login(loginData.email, loginData.password);
    
    if (result.success) {
      toast.success("Connexion réussie ! Bienvenue sur SayKee.");
      navigate("/dashboard");
    } else {
      toast.error(result.message);
    }
    
    setIsLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
    
    if (registerData.password.length < 4) {
      toast.error("Le mot de passe doit contenir au moins 4 caractères.");
      return;
    }
    
    setIsLoading(true);
    
    const result = await register(
      registerData.pseudo,
      registerData.email,
      registerData.password
    );
    
    if (result.success) {
      toast.success("Compte créé avec succès ! Bienvenue sur SayKee.");
      navigate("/dashboard");
    } else {
      toast.error(result.message);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">SayKee</h1>
          <p className="text-gray-400">Accédez à vos formations</p>
        </div>

        <Card className="bg-card/50 backdrop-blur border-blue-800/50">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Connexion / Inscription</CardTitle>
            <CardDescription className="text-gray-300">
              Connectez-vous ou créez un compte pour accéder aux formations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">Inscription</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email" className="text-gray-300">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder="votre.email@exemple.com"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password" className="text-gray-300">Mot de passe</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      placeholder="••••••••"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connexion..." : "Se connecter"}
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    Mot de passe oublié ?{" "}
                    <span className="text-blue-400 cursor-pointer hover:underline">
                      Réinitialiser
                    </span>
                  </p>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-pseudo" className="text-gray-300">Pseudo</Label>
                    <Input
                      id="register-pseudo"
                      type="text"
                      value={registerData.pseudo}
                      onChange={(e) => setRegisterData({ ...registerData, pseudo: e.target.value })}
                      placeholder="Votre pseudo"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-email" className="text-gray-300">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      placeholder="votre.email@exemple.com"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-password" className="text-gray-300">Mot de passe</Label>
                    <Input
                      id="register-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      placeholder="••••••••"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-confirm" className="text-gray-300">Confirmer le mot de passe</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      required
                      disabled={isLoading}
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Création..." : "Créer mon compte"}
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    En vous inscrivant, vous acceptez nos{" "}
                    <span className="text-blue-400 cursor-pointer hover:underline">
                      conditions d'utilisation
                    </span>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white"
          >
            ← Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
