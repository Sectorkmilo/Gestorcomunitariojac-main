import { useState } from 'react';
import { Menu, X, Home, Calendar, Megaphone, FileText, Phone, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAdmin: boolean;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function Header({ currentPage, onNavigate, isAdmin, isLoggedIn, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'calendar', label: 'Calendario', icon: Calendar },
    { id: 'classifieds', label: 'Avisos Clasificados', icon: Megaphone },
    { id: 'contact', label: 'Contáctanos', icon: Phone },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-lg flex items-center justify-center">
              <span className="text-white">JAC</span>
            </div>
            <span className="hidden md:block text-[#007B3E] dark:text-[#00a152]">
              Gestor Comunitario JAC
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className={currentPage === item.id ? 'bg-[#007B3E] hover:bg-[#006432]' : ''}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <Button
                    variant="outline"
                    onClick={() => onNavigate('admin')}
                    className="border-[#004E92] text-[#004E92] hover:bg-[#004E92] hover:text-white"
                  >
                    Panel Admin
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={onLogout}
                  className="border-[#007B3E] text-[#007B3E] hover:bg-[#007B3E] hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Salir
                </Button>
              </>
            ) : (
              <Button
                onClick={() => onNavigate('login')}
                className="bg-[#007B3E] hover:bg-[#006432]"
              >
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#007B3E] dark:text-[#00a152]" />
              ) : (
                <Menu className="w-6 h-6 text-[#007B3E] dark:text-[#00a152]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`justify-start ${
                    currentPage === item.id ? 'bg-[#007B3E] hover:bg-[#006432]' : ''
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <div className="border-t border-gray-200 my-2"></div>
              {isLoggedIn ? (
                <>
                  {isAdmin && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        onNavigate('admin');
                        setMobileMenuOpen(false);
                      }}
                      className="justify-start border-[#004E92] text-[#004E92]"
                    >
                      Panel Admin
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start border-[#007B3E] text-[#007B3E]"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Salir
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    onNavigate('login');
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start bg-[#007B3E] hover:bg-[#006432]"
                >
                  <User className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
