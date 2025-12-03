import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';

interface LoginPageProps {
  onLogin: (isAdmin: boolean) => void;
  onNavigate: (page: string) => void;
}

export function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent, isAdmin: boolean) => {
    e.preventDefault();
    toast.success(isAdmin ? '¡Bienvenido Administrador!' : '¡Bienvenido Usuario!');
    onLogin(isAdmin);
    onNavigate('home');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Registro exitoso! Por favor inicia sesión.');
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Se ha enviado un enlace de recuperación a tu correo.');
    setShowForgotPassword(false);
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#007B3E]/10 to-[#004E92]/10 py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Recuperar Contraseña</CardTitle>
            <CardDescription>
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <Label htmlFor="recovery-email">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="recovery-email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#007B3E] hover:bg-[#006432]"
                >
                  Enviar Enlace
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#007B3E]/10 to-[#004E92]/10 py-12 px-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white">JAC</span>
          </div>
          <CardTitle>Gestor Comunitario JAC</CardTitle>
          <CardDescription>
            Inicia sesión o regístrate para acceder a la plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user-login" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="user-login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registrarse</TabsTrigger>
              <TabsTrigger value="admin-login">Admin</TabsTrigger>
            </TabsList>

            {/* User Login */}
            <TabsContent value="user-login">
              <form onSubmit={(e) => handleLogin(e, false)} className="space-y-4">
                <div>
                  <Label htmlFor="user-email">Correo Electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="user-password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="user-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300" />
                    Recordarme
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#007B3E] hover:underline"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#007B3E] hover:bg-[#006432]"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </TabsContent>

            {/* Register */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Label htmlFor="register-name">Nombre Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Tatiana Cabrera"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-email">Correo Electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-confirm">Confirmar Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="register-confirm"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#004E92] hover:bg-[#003d75]"
                >
                  Registrarse
                </Button>
              </form>
            </TabsContent>

            {/* Admin Login */}
            <TabsContent value="admin-login">
              <form onSubmit={(e) => handleLogin(e, true)} className="space-y-4">
                <div className="bg-[#004E92]/10 border border-[#004E92]/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-[#004E92]">
                    <strong>Área de Administradores:</strong> Acceso restringido solo para personal autorizado.
                  </p>
                </div>
                <div>
                  <Label htmlFor="admin-email">Correo Electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@jac.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="admin-password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#004E92] hover:bg-[#003d75]"
                >
                  Iniciar Sesión como Admin
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
