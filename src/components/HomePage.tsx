import { Calendar, Megaphone, Users, FileText, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const quickAccess = [
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Próximos eventos de la comunidad',
      color: 'bg-[#007B3E]',
      page: 'events',
    },
    {
      icon: Calendar,
      title: 'Calendario',
      description: 'Vista mensual de actividades',
      color: 'bg-[#004E92]',
      page: 'calendar',
    },
    {
      icon: Megaphone,
      title: 'Avisos Clasificados',
      description: 'Publica y encuentra avisos',
      color: 'bg-[#007B3E]',
      page: 'classifieds',
    },
    {
      icon: Users,
      title: 'Contáctanos',
      description: 'Ponte en contacto con nosotros',
      color: 'bg-[#004E92]',
      page: 'contact',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Jornada de Limpieza Comunitaria',
      date: '28 de Octubre, 2025',
      time: '8:00 AM',
      image: 'https://images.unsplash.com/photo-1710696916697-f8c8c45b68e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWlnaGJvcmhvb2QlMjBwYXJrfGVufDF8fHx8MTc2MTIwODY4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Reunión Mensual de Vecinos',
      date: '2 de Noviembre, 2025',
      time: '6:00 PM',
      image: 'https://images.unsplash.com/photo-1759753972050-839775c071e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcGVvcGxlfGVufDF8fHx8MTc2MTE4MjQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Festival Cultural Comunitario',
      date: '15 de Noviembre, 2025',
      time: '10:00 AM',
      image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NjExNjY2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#007B3E] to-[#004E92] dark:from-[#00a152] dark:to-[#0062cc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-white">Bienvenido al Gestor Comunitario JAC</h1>
            <p className="text-xl text-white/90 mb-8">
              Conectando vecinos, construyendo comunidad. Mantente informado sobre eventos, 
              avisos y actividades de tu Junta de Acción Comunal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('events')}
                className="border-white text-black hover:bg-white/20"
              >
                Ver Eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('classifieds')}
                className="border-white text-black hover:bg-white/20"
              >
                Avisos Clasificados
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-center mb-8 text-[#007B3E]">Accesos Rápidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccess.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md"
              onClick={() => onNavigate(item.page)}
            >
              <CardHeader>
                <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-[#007B3E] hover:text-[#006432] p-0">
                  Acceder
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#007B3E]">Próximos Eventos</h2>
            <Button
              variant="outline"
              onClick={() => onNavigate('events')}
              className="border-[#007B3E] text-[#007B3E] hover:bg-[#007B3E] hover:text-white"
            >
              Ver todos
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-[#007B3E] text-[#007B3E] hover:bg-[#007B3E] hover:text-white"
                    onClick={() => onNavigate('events')}
                  >
                    Más información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-center mb-8 text-[#007B3E]">Nuestra Comunidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Miembros Activos', value: '250+', icon: Users },
            { label: 'Eventos Realizados', value: '48', icon: Calendar },
            { label: 'Avisos Publicados', value: '120+', icon: Megaphone },
            { label: 'Años de Servicio', value: '15', icon: FileText },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-[#007B3E]">{stat.value}</CardTitle>
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
