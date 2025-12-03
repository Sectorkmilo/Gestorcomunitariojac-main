import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-gradient-to-r from-[#007B3E] to-[#004E92] dark:from-[#00a152] dark:to-[#0062cc] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-white">Sobre JAC</h3>
            <p className="text-white/90 mb-4">
              Gestor Comunitario de la Junta de Acción Comunal. Conectando vecinos, 
              fortaleciendo comunidades.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.('events')}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('calendar')}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Calendario
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('classifieds')}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Avisos Clasificados
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Contáctanos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('brand')}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Guía de Marca
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">
                  Calle 123 #45-67, Barrio Central, Ciudad
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/90">+57 (1) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/90">info@jaccomunitario.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Gestor Comunitario JAC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
