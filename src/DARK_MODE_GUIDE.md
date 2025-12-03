# Guía de Tema Oscuro - Gestor Comunitario JAC

## 🌙 Introducción

La aplicación Gestor Comunitario JAC ahora incluye soporte completo para tema oscuro, permitiendo a los usuarios cambiar entre modo claro y oscuro según sus preferencias.

## 🎨 Colores del Tema Oscuro

### Colores Principales
- **Verde Principal**: `#00a152` (más brillante que el `#007B3E` del tema claro)
- **Azul Secundario**: `#0062cc` (más brillante que el `#004E92` del tema claro)

### Colores de Fondo
- **Fondo principal**: `#1a1a1a`
- **Tarjetas/Cards**: `#242424`
- **Fondo secundario**: `#2d2d2d`

### Colores de Texto
- **Texto principal**: `#f5f5f5`
- **Texto secundario**: `#a0a0a0`

## 🔧 Cómo Usar

### Toggle del Tema
El botón de cambio de tema está ubicado en el Header (esquina superior derecha). Los usuarios pueden hacer clic en el ícono de luna/sol para alternar entre temas.

### Persistencia
El tema seleccionado se guarda automáticamente en `localStorage` y persiste entre sesiones.

## 💻 Implementación Técnica

### ThemeProvider
El componente `ThemeProvider` envuelve toda la aplicación y proporciona:
- `theme`: El tema actual ('light' o 'dark')
- `toggleTheme()`: Función para alternar entre temas
- `setTheme(theme)`: Función para establecer un tema específico

### Uso en Componentes

```tsx
import { useTheme } from './ThemeProvider';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
}
```

### Clases de Tailwind para Tema Oscuro

Usa el prefijo `dark:` para aplicar estilos específicos del tema oscuro:

```tsx
// Fondo
className="bg-white dark:bg-gray-900"

// Texto
className="text-gray-900 dark:text-gray-100"

// Bordes
className="border-gray-200 dark:border-gray-700"

// Gradientes
className="bg-gradient-to-r from-[#007B3E] to-[#004E92] dark:from-[#00a152] dark:to-[#0062cc]"
```

## 📋 Componentes Actualizados

Los siguientes componentes ya tienen soporte completo para tema oscuro:

- ✅ `App.tsx` - Contenedor principal
- ✅ `Header.tsx` - Navegación y logo
- ✅ `Footer.tsx` - Pie de página con gradiente adaptativo
- ✅ `HomePage.tsx` - Banner principal adaptado
- ✅ `BrandGuidelines.tsx` - Guía de marca con sección de tema oscuro
- ✅ `ThemeToggle.tsx` - Botón de cambio de tema

## 🎯 Mejores Prácticas

### 1. Contraste Adecuado
Asegúrate de que hay suficiente contraste entre el texto y el fondo en ambos temas.

### 2. Colores de Marca
Mantén la identidad de marca usando los verdes y azules adaptados:
- Verde claro: `#007B3E` → `#00a152` en modo oscuro
- Azul: `#004E92` → `#0062cc` en modo oscuro

### 3. Transiciones Suaves
Usa `transition-colors` en elementos que cambian según el tema:
```tsx
className="bg-white dark:bg-gray-900 transition-colors"
```

### 4. Imágenes y SVGs
Considera proporcionar versiones alternativas de imágenes para tema oscuro si es necesario.

## 🔄 Agregar Tema Oscuro a Nuevos Componentes

1. Importa y usa el hook `useTheme` si necesitas acceso al tema actual:
```tsx
import { useTheme } from './ThemeProvider';
const { theme } = useTheme();
```

2. Agrega clases `dark:` a todos los elementos que necesiten estilos diferentes:
```tsx
<div className="bg-gray-50 dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-gray-100">Título</h1>
  <p className="text-gray-600 dark:text-gray-300">Contenido</p>
</div>
```

3. Para colores de marca, usa:
```tsx
<button className="bg-[#007B3E] dark:bg-[#00a152]">
  Botón
</button>
```

## 📱 Responsive y Tema Oscuro

El tema oscuro funciona perfectamente en todos los tamaños de pantalla. El toggle aparece tanto en escritorio como en móvil.

## 🐛 Solución de Problemas

### El tema no cambia
- Verifica que el componente esté dentro de `<ThemeProvider>`
- Revisa la consola del navegador para errores

### Los estilos no se aplican correctamente
- Asegúrate de que las clases `dark:` estén bien escritas
- Verifica que Tailwind esté configurado correctamente con la variante dark

### El tema no persiste
- Revisa que localStorage esté habilitado en el navegador
- Verifica la consola para errores de almacenamiento

## 🎨 Variables CSS Personalizadas

Las variables CSS para tema oscuro están definidas en `/styles/globals.css`:

```css
.dark {
  --background: #1a1a1a;
  --foreground: #f5f5f5;
  --primary: #00a152;
  --secondary: #0062cc;
  /* ... más variables */
}
```

Estas variables se pueden usar en componentes personalizados que no usen Tailwind.

## 🔮 Futuras Mejoras

- [ ] Agregar tema "automático" que siga las preferencias del sistema
- [ ] Modo de alto contraste
- [ ] Más opciones de personalización de colores
- [ ] Animaciones de transición entre temas

---

Para más información sobre la identidad visual y el diseño de marca, visita la página **Guía de Marca** en la aplicación.
