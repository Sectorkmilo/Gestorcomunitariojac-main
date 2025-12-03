import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { EventsPage } from './components/EventsPage';
import { CalendarPage } from './components/CalendarPage';
import { ClassifiedsPage } from './components/ClassifiedsPage';
import { ContactPage } from './components/ContactPage';
import { AdminDashboard } from './components/AdminDashboard';
import { BrandGuidelines } from './components/BrandGuidelines';

type Page = 'home' | 'login' | 'events' | 'calendar' | 'classifieds' | 'contact' | 'admin' | 'brand';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === 'admin' && !isAdmin) {
      return;
    }
    setCurrentPage(page as Page);
  };

  const handleLogin = (adminStatus: boolean) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage isAdmin={isAdmin} />;
      case 'calendar':
        return <CalendarPage />;
      case 'classifieds':
        return <ClassifiedsPage isLoggedIn={isLoggedIn} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return isAdmin ? <AdminDashboard /> : <HomePage onNavigate={handleNavigate} />;
      case 'brand':
        return <BrandGuidelines />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}
