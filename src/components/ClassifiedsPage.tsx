import { useState } from 'react';
import { Plus, Search, Phone, Mail, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface Classified {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  contact: string;
  email: string;
  author: string;
  date: string;
}

interface ClassifiedsPageProps {
  isLoggedIn: boolean;
}

export function ClassifiedsPage({ isLoggedIn }: ClassifiedsPageProps) {
  const [classifieds, setClassifieds] = useState<Classified[]>([
    {
      id: 1,
      title: 'Clases de Guitarra',
      description: 'Ofrezco clases de guitarra para principiantes y nivel intermedio. Horarios flexibles.',
      category: 'Servicios',
      image: 'https://images.unsplash.com/photo-1614447912305-2084b1cc2821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBib2FyZHxlbnwxfHx8fDE3NjEyNzczMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      contact: '+57 300 123 4567',
      email: 'musica@email.com',
      author: 'Carlos Martínez',
      date: '20 de Octubre, 2025',
    },
    {
      id: 2,
      title: 'Vendo Bicicleta',
      description: 'Bicicleta de montaña en excelente estado, poco uso. Incluye casco y candado.',
      category: 'Venta',
      image: 'https://images.unsplash.com/photo-1759753972050-839775c071e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcGVvcGxlfGVufDF8fHx8MTc2MTE4MjQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      contact: '+57 300 987 6543',
      email: 'venta@email.com',
      author: 'María López',
      date: '22 de Octubre, 2025',
    },
    {
      id: 3,
      title: 'Busco Compañero de Trote',
      description: 'Busco alguien para trotar en las mañanas por el parque. Horario: 6:00 AM.',
      category: 'Otros',
      image: 'https://images.unsplash.com/photo-1710696916697-f8c8c45b68e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWlnaGJvcmhvb2QlMjBwYXJrfGVufDF8fHx8MTc2MTIwODY4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      contact: '+57 310 456 7890',
      email: 'deporte@email.com',
      author: 'Juan Pérez',
      date: '23 de Octubre, 2025',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['Servicios', 'Venta', 'Compra', 'Otros'];

  const handleCreateClassified = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newClassified: Classified = {
      id: classifieds.length + 1,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      image: 'https://images.unsplash.com/photo-1614447912305-2084b1cc2821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBib2FyZHxlbnwxfHx8fDE3NjEyNzczMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      contact: formData.get('contact') as string,
      email: formData.get('email') as string,
      author: 'Usuario',
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    };
    setClassifieds([newClassified, ...classifieds]);
    setIsDialogOpen(false);
    toast.success('Aviso publicado exitosamente');
  };

  const filteredClassifieds = classifieds.filter((classified) => {
    const matchesSearch = classified.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classified.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || classified.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Servicios': 'bg-[#007B3E] text-white',
      'Venta': 'bg-[#004E92] text-white',
      'Compra': 'bg-purple-500 text-white',
      'Otros': 'bg-gray-500 text-white',
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-[#007B3E] mb-2">Avisos Clasificados</h1>
            <p className="text-gray-600">
              Publica y encuentra avisos de tu comunidad
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-[#007B3E] hover:bg-[#006432] mt-4 md:mt-0"
                disabled={!isLoggedIn}
              >
                <Plus className="w-4 h-4 mr-2" />
                Publicar Aviso
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Publicar Nuevo Aviso</DialogTitle>
                <DialogDescription>
                  Completa la información de tu aviso clasificado
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateClassified} className="space-y-4">
                <div>
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ej: Clases de Guitarra"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe tu aviso..."
                    rows={4}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact">Teléfono de Contacto</Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email de Contacto</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
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
                    Publicar Aviso
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {!isLoggedIn && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              Debes iniciar sesión para publicar avisos clasificados.
            </p>
          </div>
        )}

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar avisos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Classifieds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClassifieds.map((classified) => (
            <Card key={classified.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={classified.image}
                  alt={classified.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-2 right-2 ${getCategoryColor(classified.category)}`}>
                  {classified.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{classified.title}</CardTitle>
                <CardDescription>{classified.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Tag className="w-4 h-4 text-[#007B3E]" />
                  <span>{classified.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#007B3E]" />
                  <span>{classified.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-[#007B3E]" />
                  <span className="truncate">{classified.email}</span>
                </div>
                <div className="text-xs text-gray-500 pt-2 border-t">
                  Publicado: {classified.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClassifieds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              No se encontraron avisos que coincidan con tu búsqueda.
            </p>
            {isLoggedIn && (
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="bg-[#007B3E] hover:bg-[#006432]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Publicar Primer Aviso
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
