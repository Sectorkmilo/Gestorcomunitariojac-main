import { useState } from 'react';
import { Users, Calendar, Megaphone, TrendingUp, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

export function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan@email.com', role: 'Usuario', status: 'Activo', joined: '15 Mar 2025' },
    { id: 2, name: 'María López', email: 'maria@email.com', role: 'Usuario', status: 'Activo', joined: '20 Mar 2025' },
    { id: 3, name: 'Carlos Martínez', email: 'carlos@email.com', role: 'Usuario', status: 'Inactivo', joined: '10 Feb 2025' },
    { id: 4, name: 'Ana García', email: 'ana@email.com', role: 'Usuario', status: 'Activo', joined: '5 Abr 2025' },
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: 'Jornada de Limpieza', date: '28 Oct 2025', attendees: 45, status: 'Programado' },
    { id: 2, title: 'Reunión Mensual', date: '2 Nov 2025', attendees: 32, status: 'Programado' },
    { id: 3, title: 'Festival Cultural', date: '15 Nov 2025', attendees: 120, status: 'Programado' },
  ]);

  const [classifieds, setClassifieds] = useState([
    { id: 1, title: 'Clases de Guitarra', author: 'Carlos M.', category: 'Servicios', date: '20 Oct 2025', status: 'Aprobado' },
    { id: 2, title: 'Vendo Bicicleta', author: 'María L.', category: 'Venta', date: '22 Oct 2025', status: 'Aprobado' },
    { id: 3, title: 'Busco Compañero de Trote', author: 'Juan P.', category: 'Otros', date: '23 Oct 2025', status: 'Pendiente' },
  ]);

  const stats = [
    {
      title: 'Total Usuarios',
      value: users.length,
      icon: Users,
      color: 'bg-[#007B3E]',
      change: '+12%',
    },
    {
      title: 'Eventos Activos',
      value: events.length,
      icon: Calendar,
      color: 'bg-[#004E92]',
      change: '+8%',
    },
    {
      title: 'Avisos Publicados',
      value: classifieds.length,
      icon: Megaphone,
      color: 'bg-[#007B3E]',
      change: '+15%',
    },
    {
      title: 'Participación',
      value: '78%',
      icon: TrendingUp,
      color: 'bg-[#004E92]',
      change: '+5%',
    },
  ];

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success('Usuario eliminado');
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast.success('Evento eliminado');
  };

  const handleApproveClassified = (id: number) => {
    setClassifieds(classifieds.map(c => 
      c.id === id ? { ...c, status: 'Aprobado' } : c
    ));
    toast.success('Aviso aprobado');
  };

  const handleRejectClassified = (id: number) => {
    setClassifieds(classifieds.filter(c => c.id !== id));
    toast.success('Aviso rechazado');
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-[#007B3E] mb-2">Panel de Administración</h1>
          <p className="text-gray-600">
            Gestiona usuarios, eventos y avisos de la comunidad
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <div className={`${stat.color} w-8 h-8 rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-1">{stat.value}</div>
                <p className="text-xs text-green-600">
                  {stat.change} desde el mes pasado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
            <TabsTrigger value="classifieds">Avisos</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
                <CardDescription>
                  Administra los usuarios registrados en la plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Rol</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Registro</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === 'Activo'
                                ? 'bg-green-500'
                                : 'bg-gray-500'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#004E92] text-[#004E92] hover:bg-[#004E92] hover:text-white"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Eventos</CardTitle>
                <CardDescription>
                  Administra los eventos de la comunidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Inscritos</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.title}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.attendees} personas</TableCell>
                        <TableCell>
                          <Badge className="bg-[#007B3E]">
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#004E92] text-[#004E92] hover:bg-[#004E92] hover:text-white"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              onClick={() => handleDeleteEvent(event.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classifieds Tab */}
          <TabsContent value="classifieds">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Avisos Clasificados</CardTitle>
                <CardDescription>
                  Revisa y aprueba los avisos publicados por los usuarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Categoría</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classifieds.map((classified) => (
                      <TableRow key={classified.id}>
                        <TableCell>{classified.title}</TableCell>
                        <TableCell>{classified.author}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{classified.category}</Badge>
                        </TableCell>
                        <TableCell>{classified.date}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              classified.status === 'Aprobado'
                                ? 'bg-green-500'
                                : 'bg-yellow-500'
                            }
                          >
                            {classified.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            {classified.status === 'Pendiente' && (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                                  onClick={() => handleApproveClassified(classified.id)}
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                                  onClick={() => handleRejectClassified(classified.id)}
                                >
                                  <XCircle className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                            {classified.status === 'Aprobado' && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                                onClick={() => handleRejectClassified(classified.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
