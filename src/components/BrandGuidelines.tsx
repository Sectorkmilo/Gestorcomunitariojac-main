import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

import { useTheme } from './ThemeProvider';

export function BrandGuidelines() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { theme } = useTheme();

  const colors = [
    {
      name: 'Verde Principal',
      hex: '#007B3E',
      rgb: 'rgb(0, 123, 62)',
      usage: 'Color principal de la marca. Representa crecimiento, comunidad y sostenibilidad.',
    },
    {
      name: 'Azul Secundario',
      hex: '#004E92',
      rgb: 'rgb(0, 78, 146)',
      usage: 'Color secundario. Transmite confianza, profesionalismo y estabilidad.',
    },
    {
      name: 'Verde Claro',
      hex: '#00a152',
      rgb: 'rgb(0, 161, 82)',
      usage: 'Acento para estados de éxito y elementos destacados.',
    },
    {
      name: 'Azul Claro',
      hex: '#0062cc',
      rgb: 'rgb(0, 98, 204)',
      usage: 'Acento para enlaces y elementos interactivos.',
    },
    {
      name: 'Gris Claro',
      hex: '#f5f5f5',
      rgb: 'rgb(245, 245, 245)',
      usage: 'Fondos y áreas de contenido secundario.',
    },
    {
      name: 'Blanco',
      hex: '#ffffff',
      rgb: 'rgb(255, 255, 255)',
      usage: 'Fondo principal y texto sobre colores oscuros.',
    },
  ];

  const typography = [
    {
      style: 'H1 - Títulos Principales',
      example: 'Gestor Comunitario JAC',
      className: 'text-4xl',
      specs: 'Poppins Medium, 2.5rem (40px)',
    },
    {
      style: 'H2 - Subtítulos',
      example: 'Conectando Vecinos',
      className: 'text-3xl',
      specs: 'Poppins Medium, 1.875rem (30px)',
    },
    {
      style: 'H3 - Encabezados de Sección',
      example: 'Próximos Eventos',
      className: 'text-2xl',
      specs: 'Poppins Medium, 1.5rem (24px)',
    },
    {
      style: 'Body - Texto Principal',
      example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      className: 'text-base',
      specs: 'Poppins Regular, 1rem (16px)',
    },
    {
      style: 'Small - Texto Secundario',
      example: 'Información adicional y notas',
      className: 'text-sm',
      specs: 'Poppins Regular, 0.875rem (14px)',
    },
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    toast.success(`${type} copiado al portapapeles`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">JAC</span>
          </div>
          <h1 className="text-[#007B3E] dark:text-[#00a152] mb-4">Guía de Diseño de Marca</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Manual de identidad visual para Gestor Comunitario JAC. Estas guías aseguran 
            consistencia y cohesión en todas las comunicaciones de la marca.
          </p>
          <Badge className="mt-4" variant={theme === 'dark' ? 'default' : 'outline'}>
            {theme === 'dark' ? '🌙 Tema Oscuro Activo' : '☀️ Tema Claro Activo'}
          </Badge>
        </div>

        {/* Logo Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#007B3E]">Logotipo</CardTitle>
            <CardDescription>
              El logotipo es el elemento central de nuestra identidad visual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Logo */}
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">JAC</span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="mb-1">Logo Principal</h4>
                  <p className="text-sm text-gray-600">Uso en fondos claros</p>
                </div>
              </div>

              {/* Logo with Text */}
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">JAC</span>
                    </div>
                    <div className="text-left">
                      <div className="text-[#007B3E]">Gestor</div>
                      <div className="text-[#004E92] text-sm">Comunitario</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="mb-1">Logo con Texto</h4>
                  <p className="text-sm text-gray-600">Uso horizontal</p>
                </div>
              </div>

              {/* Logo on Dark */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-lg p-8 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#007B3E] text-2xl">JAC</span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="mb-1">Logo Invertido</h4>
                  <p className="text-sm text-gray-600">Uso en fondos oscuros</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="mb-2 text-yellow-900">Normas de Uso</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Mantener siempre el espacio de respiro mínimo alrededor del logo (igual al ancho de las letras JAC)</li>
                <li>• No distorsionar las proporciones del logo</li>
                <li>• No cambiar los colores del logo sin autorización</li>
                <li>• Tamaño mínimo: 40px de altura en digital</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#007B3E]">Paleta de Colores</CardTitle>
            <CardDescription>
              Colores corporativos que definen nuestra identidad visual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color, index) => (
                <div key={index} className="space-y-3">
                  <div
                    className="h-32 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, 'Color')}
                  ></div>
                  <div>
                    <h4 className="mb-2">{color.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">HEX:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto py-1 px-2"
                          onClick={() => copyToClipboard(color.hex, 'HEX')}
                        >
                          <code className="mr-2">{color.hex}</code>
                          {copiedColor === color.hex ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">RGB:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto py-1 px-2"
                          onClick={() => copyToClipboard(color.rgb, 'RGB')}
                        >
                          <code className="mr-2 text-xs">{color.rgb}</code>
                          {copiedColor === color.rgb ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#007B3E]/10 border border-[#007B3E]/20 rounded-lg">
              <h4 className="mb-2 text-[#007B3E]">Combinaciones Recomendadas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#007B3E] rounded"></div>
                  <span className="text-sm">+</span>
                  <div className="w-8 h-8 bg-white border-2 rounded"></div>
                  <span className="text-sm text-gray-600">Principal con blanco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#004E92] rounded"></div>
                  <span className="text-sm">+</span>
                  <div className="w-8 h-8 bg-[#f5f5f5] rounded"></div>
                  <span className="text-sm text-gray-600">Secundario con gris</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dark Mode Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#007B3E] dark:text-[#00a152]">Tema Oscuro</CardTitle>
            <CardDescription>
              Paleta de colores adaptada para modo oscuro que mantiene la identidad de marca
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Light Mode Preview */}
              <div className="space-y-3">
                <h4 className="text-center">Tema Claro</h4>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#007B3E] to-[#004E92] rounded-full"></div>
                    <span className="text-gray-900">Gestor Comunitario JAC</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-[#007B3E] text-white rounded text-sm">Acción Principal</div>
                    <div className="px-3 py-1 bg-[#004E92] text-white rounded text-sm">Acción Secundaria</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Colores brillantes sobre fondo claro
                </p>
              </div>

              {/* Dark Mode Preview */}
              <div className="space-y-3">
                <h4 className="text-center">Tema Oscuro</h4>
                <div className="bg-[#1a1a1a] border-2 border-gray-700 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00a152] to-[#0062cc] rounded-full"></div>
                    <span className="text-gray-100">Gestor Comunitario JAC</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-700 rounded w-4/5"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-[#00a152] text-white rounded text-sm">Acción Principal</div>
                    <div className="px-3 py-1 bg-[#0062cc] text-white rounded text-sm">Acción Secundaria</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Colores ajustados para reducir fatiga visual
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#004E92]/10 dark:bg-[#0062cc]/10 border border-[#004E92]/20 dark:border-[#0062cc]/20 rounded-lg">
              <h4 className="mb-3 text-[#004E92] dark:text-[#0062cc]">Adaptación de Colores</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Verde Principal</span>
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 bg-[#007B3E] rounded border border-gray-300"></div>
                      <span className="text-xs text-gray-500">→</span>
                      <div className="w-6 h-6 bg-[#00a152] rounded border border-gray-300"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Azul Secundario</span>
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 bg-[#004E92] rounded border border-gray-300"></div>
                      <span className="text-xs text-gray-500">→</span>
                      <div className="w-6 h-6 bg-[#0062cc] rounded border border-gray-300"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fondo</span>
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 bg-white rounded border border-gray-300"></div>
                      <span className="text-xs text-gray-500">→</span>
                      <div className="w-6 h-6 bg-[#1a1a1a] rounded border border-gray-300"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tarjetas</span>
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 bg-white rounded border border-gray-300"></div>
                      <span className="text-xs text-gray-500">→</span>
                      <div className="w-6 h-6 bg-[#242424] rounded border border-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                Los colores se adaptan automáticamente para mantener la legibilidad y reducir la fatiga visual en entornos con poca luz.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#007B3E]">Tipografía</CardTitle>
            <CardDescription>
              La fuente Poppins aporta modernidad y claridad a nuestra comunicación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {typography.map((type, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-sm text-gray-600">{type.style}</h4>
                      <p className="text-xs text-gray-500">{type.specs}</p>
                    </div>
                    <Badge variant="outline">{type.className}</Badge>
                  </div>
                  <p className={type.className} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {type.example}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#004E92]/10 border border-[#004E92]/20 rounded-lg">
              <h4 className="mb-2 text-[#004E92]">Pesos de Fuente Disponibles</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl" style={{ fontWeight: 300 }}>Aa</div>
                  <p className="text-sm text-gray-600">Light (300)</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl" style={{ fontWeight: 400 }}>Aa</div>
                  <p className="text-sm text-gray-600">Regular (400)</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl" style={{ fontWeight: 500 }}>Aa</div>
                  <p className="text-sm text-gray-600">Medium (500)</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl" style={{ fontWeight: 600 }}>Aa</div>
                  <p className="text-sm text-gray-600">SemiBold (600)</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl" style={{ fontWeight: 700 }}>Aa</div>
                  <p className="text-sm text-gray-600">Bold (700)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* UI Components */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#007B3E]">Componentes de Interfaz</CardTitle>
            <CardDescription>
              Elementos visuales consistentes para la experiencia del usuario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Buttons */}
              <div>
                <h4 className="mb-4">Botones</h4>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#007B3E] hover:bg-[#006432]">
                    Botón Principal
                  </Button>
                  <Button className="bg-[#004E92] hover:bg-[#003d75]">
                    Botón Secundario
                  </Button>
                  <Button variant="outline" className="border-[#007B3E] text-[#007B3E] hover:bg-[#007B3E] hover:text-white">
                    Botón Outline
                  </Button>
                  <Button variant="ghost" className="text-[#007B3E] hover:text-[#006432]">
                    Botón Ghost
                  </Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="mb-4">Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#007B3E]">Activo</Badge>
                  <Badge className="bg-[#004E92]">Programado</Badge>
                  <Badge variant="outline">Pendiente</Badge>
                  <Badge className="bg-green-500">Aprobado</Badge>
                  <Badge className="bg-yellow-500">En Revisión</Badge>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="mb-4">Tarjetas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tarjeta Estándar</CardTitle>
                      <CardDescription>
                        Descripción de la tarjeta con información relevante
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Contenido de ejemplo dentro de la tarjeta.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#007B3E] border-2">
                    <CardHeader>
                      <CardTitle className="text-[#007B3E]">Tarjeta Destacada</CardTitle>
                      <CardDescription>
                        Con borde de color para énfasis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Contenido destacado con identidad de marca.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Principles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#007B3E]">Principios de Diseño</CardTitle>
            <CardDescription>
              Valores fundamentales que guían nuestras decisiones de diseño
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#007B3E] rounded-full"></div>
                  <h4 className="text-[#007B3E]">Comunidad Primero</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Cada elemento debe facilitar la conexión y colaboración entre vecinos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#004E92] rounded-full"></div>
                  <h4 className="text-[#004E92]">Claridad y Accesibilidad</h4>
                </div>
                <p className="text-sm text-gray-600">
                  La información debe ser clara, fácil de entender y accesible para todos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#007B3E] rounded-full"></div>
                  <h4 className="text-[#007B3E]">Modernidad con Calidez</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Un diseño contemporáneo que mantiene un tono amigable y acogedor.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#004E92] rounded-full"></div>
                  <h4 className="text-[#004E92]">Consistencia Visual</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Mantener coherencia en todos los puntos de contacto con el usuario.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
