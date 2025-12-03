import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-[#007B3E] mb-8 text-center">Contáctanos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tatiana Cabrera"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#007B3E] hover:bg-[#006432]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Puedes contactarnos a través de los siguientes medios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007B3E] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Calle 123 #45-67<br />
                      Barrio Central, Ciudad<br />
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#004E92] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Teléfono</h4>
                    <p className="text-gray-600">
                      +57 (1) 234-5678<br />
                      +57 300 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007B3E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@jaccomunitario.com<br />
                      soporte@jaccomunitario.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#004E92] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Horario de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 text-[#007B3E]">¿Cómo puedo registrarme?</h4>
                  <p className="text-sm text-gray-600">
                    Haz clic en "Iniciar Sesión" en el menú principal y selecciona la opción "Registrarse".
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[#007B3E]">¿Cómo publico un aviso clasificado?</h4>
                  <p className="text-sm text-gray-600">
                    Debes estar registrado e iniciar sesión. Luego, ve a la sección de Avisos Clasificados y haz clic en "Publicar Aviso".
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[#007B3E]">¿Cómo me registro a un evento?</h4>
                  <p className="text-sm text-gray-600">
                    Ve a la sección de Eventos, selecciona el evento de tu interés y haz clic en "Inscribirse".
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Ubicación</CardTitle>
            <CardDescription>
              Visítanos en nuestra sede comunitaria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-[#007B3E]/10 to-[#004E92]/10 rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-[#007B3E] mx-auto mb-4" />
              <h3 className="mb-2 text-[#007B3E]">Sede Comunitaria JAC</h3>
              <p className="text-gray-600 mb-4">
                Calle 123 #45-67, Barrio Central, Ciudad
              </p>
              <p className="text-sm text-gray-500 italic">
                [Aquí se mostraría un mapa interactivo de Google Maps o similar]
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg inline-block">
                <p className="text-sm text-gray-600">
                  Para integrar un mapa real, puedes usar servicios como Google Maps, Mapbox u OpenStreetMap.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
