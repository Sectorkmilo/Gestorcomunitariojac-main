import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar } from './ui/calendar';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  color: string;
}

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events: CalendarEvent[] = [
    {
      id: 1,
      title: 'Jornada de Limpieza Comunitaria',
      date: new Date(2025, 9, 28),
      time: '8:00 AM',
      location: 'Parque Central',
      color: 'bg-[#007B3E]',
    },
    {
      id: 2,
      title: 'Reunión Mensual de Vecinos',
      date: new Date(2025, 10, 2),
      time: '6:00 PM',
      location: 'Salón Comunal',
      color: 'bg-[#004E92]',
    },
    {
      id: 3,
      title: 'Festival Cultural Comunitario',
      date: new Date(2025, 10, 15),
      time: '10:00 AM',
      location: 'Plaza Principal',
      color: 'bg-[#007B3E]',
    },
    {
      id: 4,
      title: 'Taller de Reciclaje',
      date: new Date(2025, 10, 20),
      time: '3:00 PM',
      location: 'Biblioteca Comunitaria',
      color: 'bg-[#004E92]',
    },
    {
      id: 5,
      title: 'Mercado Comunitario',
      date: new Date(2025, 10, 25),
      time: '9:00 AM',
      location: 'Plaza Principal',
      color: 'bg-[#007B3E]',
    },
  ];

  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  const eventDates = events.map(event => event.date);

  const modifiers = {
    eventDay: eventDates,
  };

  const modifiersStyles = {
    eventDay: {
      backgroundColor: '#007B3E',
      color: 'white',
      borderRadius: '50%',
    },
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-[#007B3E] mb-8">Calendario de Eventos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Vista Mensual</CardTitle>
                <CardDescription>
                  Selecciona una fecha para ver los eventos programados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                  className="rounded-md border w-full"
                />
                <div className="mt-4 p-4 bg-[#007B3E]/10 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="inline-block w-3 h-3 bg-[#007B3E] rounded-full mr-2"></span>
                    Los días marcados tienen eventos programados
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events List */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
                <CardDescription>
                  Los siguientes eventos de la comunidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${event.color} w-2 h-full rounded-full min-h-[60px]`}></div>
                        <div className="flex-1">
                          <h4 className="mb-2">{event.title}</h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CalendarIcon className="w-3 h-3" />
                              <span>
                                {event.date.toLocaleDateString('es-ES', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Summary */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Resumen Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total de Eventos</span>
                    <span className="bg-[#007B3E] text-white px-3 py-1 rounded-full">
                      {events.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Este Mes</span>
                    <span className="bg-[#004E92] text-white px-3 py-1 rounded-full">
                      {
                        events.filter(
                          (e) =>
                            e.date.getMonth() === currentMonth.getMonth() &&
                            e.date.getFullYear() === currentMonth.getFullYear()
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Próximos 30 días</span>
                    <span className="bg-[#007B3E] text-white px-3 py-1 rounded-full">
                      {
                        events.filter(
                          (e) =>
                            e.date >= new Date() &&
                            e.date <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        ).length
                      }
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Events by Month */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Eventos del Mes</CardTitle>
              <CardDescription>
                Todos los eventos programados para{' '}
                {currentMonth.toLocaleDateString('es-ES', {
                  month: 'long',
                  year: 'numeric',
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events
                  .filter(
                    (e) =>
                      e.date.getMonth() === currentMonth.getMonth() &&
                      e.date.getFullYear() === currentMonth.getFullYear()
                  )
                  .map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#007B3E] to-[#004E92] text-white rounded-lg p-3 min-w-[60px]">
                        <span className="text-sm">
                          {event.date.toLocaleDateString('es-ES', { month: 'short' })}
                        </span>
                        <span className="text-2xl">
                          {event.date.getDate()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{event.title}</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
