import { useState } from 'react';
import { Calendar, MapPin, Clock, Plus, Edit, Trash2, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: number;
}

interface EventsPageProps {
  isAdmin: boolean;
}

export function EventsPage({ isAdmin }: EventsPageProps) {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Jornada de Limpieza Comunitaria',
      description: 'Únete a la limpieza de nuestros espacios públicos. Trae guantes y bolsas de basura.',
      date: '28 de Octubre, 2025',
      time: '8:00 AM',
      location: 'Parque Central',
      image: 'https://images.unsplash.com/photo-1710696916697-f8c8c45b68e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWlnaGJvcmhvb2QlMjBwYXJrfGVufDF8fHx8MTc2MTIwODY4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      attendees: 45,
    },
    {
      id: 2,
      title: 'Reunión Mensual de Vecinos',
      description: 'Reunión mensual para discutir asuntos de la comunidad y próximos proyectos.',
      date: '2 de Noviembre, 2025',
      time: '6:00 PM',
      location: 'Salón Comunal',
      image: 'https://images.unsplash.com/photo-1759753972050-839775c071e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcGVvcGxlfGVufDF8fHx8MTc2MTE4MjQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      attendees: 32,
    },
    {
      id: 3,
      title: 'Festival Cultural Comunitario',
      description: 'Celebremos nuestra diversidad cultural con música, comida y actividades para toda la familia.',
      date: '15 de Noviembre, 2025',
      time: '10:00 AM',
      location: 'Plaza Principal',
      image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NjExNjY2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      attendees: 120,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newEvent: Event = {
      id: events.length + 1,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      location: formData.get('location') as string,
      image: 'https://images.unsplash.com/photo-1614447912305-2084b1cc2821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBib2FyZHxlbnwxfHx8fDE3NjEyNzczMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      attendees: 0,
    };
    setEvents([...events, newEvent]);
    setIsDialogOpen(false);
    toast.success('Evento creado exitosamente');
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast.success('Evento eliminado');
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-[#007B3E] mb-2">Eventos Comunitarios</h1>
            <p className="text-gray-600">
              Descubre y participa en los eventos de tu comunidad
            </p>
          </div>
          {isAdmin && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-[#007B3E] hover:bg-[#006432] mt-4 md:mt-0"
                  onClick={() => setEditingEvent(null)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Crear Evento
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingEvent ? 'Editar Evento' : 'Crear Nuevo Evento'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingEvent 
                      ? 'Actualiza la información del evento'
                      : 'Completa los detalles del nuevo evento comunitario'
                    }
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateEvent} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título del Evento</Label>
                    <Input
                      id="title"
                      name="title"
                      defaultValue={editingEvent?.title}
                      placeholder="Ej: Jornada de Limpieza"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={editingEvent?.description}
                      placeholder="Describe el evento..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Fecha</Label>
                      <Input
                        id="date"
                        name="date"
                        defaultValue={editingEvent?.date}
                        placeholder="1 de Enero, 2025"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Hora</Label>
                      <Input
                        id="time"
                        name="time"
                        defaultValue={editingEvent?.time}
                        placeholder="10:00 AM"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Ubicación</Label>
                    <Input
                      id="location"
                      name="location"
                      defaultValue={editingEvent?.location}
                      placeholder="Parque Central"
                      required
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-[#007B3E] hover:bg-[#006432]"
                    >
                      {editingEvent ? 'Actualizar' : 'Crear'} Evento
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#007B3E]" />
                  <span className="text-sm">{event.attendees}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#007B3E]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-[#007B3E]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#007B3E]" />
                  <span>{event.location}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  {isAdmin ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#004E92] text-[#004E92] hover:bg-[#004E92] hover:text-white"
                        onClick={() => handleEditEvent(event)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full bg-[#007B3E] hover:bg-[#006432]"
                      onClick={() => toast.success('¡Te has registrado al evento!')}
                    >
                      Inscribirse
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
