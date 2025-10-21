# DesignDeck

**Your Design Comparison Tool**

DesignDeck is a modern, interactive mockup comparison tool built with React and TypeScript. Quickly create, view, and compare multiple design mockups with smooth navigation and theme support.

![DesignDeck](https://img.shields.io/badge/DesignDeck-React-teal)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## ✨ Features

### 🎨 Mockup Selector
- **Card-based interface** - View all mockups at a glance
- **Click to view** - Instant full-screen mockup preview
- **Infinite carousel navigation** - Cycle through designs using left/right edge arrows
- **Smart tooltips** - See mockup names on hover

### 🌓 Theme Toggle
- **Light/Dark mode** - Beautiful themes for any environment
- **Smooth transitions** - Elegant color switching
- **Persistent preference** - Your theme choice is remembered
- **Brand consistency** - Maintains brand colors across themes

### 🚀 Built-In Example
- **IntegrityPro Employee Center** - Full-featured portal mockup
- **Custom branding** - IPC color palette and logo integration
- **Responsive design** - Mobile-first, works on all screen sizes
- **Interactive components** - Search, shortcuts, announcements

### 🛠️ Developer-Friendly
- **Component library** - Reusable UI components (buttons, cards, icons)
- **Theme system** - Easy color customization
- **Mock data** - JSON-based data files
- **TypeScript** - Full type safety
- **Well-documented** - Comprehensive guides included

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

Creates a `dist` folder with optimized production build.

## 📖 How to Use

### Viewing Mockups

1. **Launch DesignDeck** - Run `npm run dev` and open in browser
2. **Select a mockup** - Click any card in the selector
3. **Navigate** - Hover near left/right edges to see navigation arrows
4. **Toggle theme** - Click the sun/moon icon in the top-right
5. **Return to selector** - Click the back arrow in top-left

### Adding New Mockups

#### 1. Create Your Mockup Component

Create a new file: `src/mockups/designs/YourMockup.tsx`

```tsx
import { useState } from 'react'
import { Button, Card, SearchBar } from '../components'
import { Theme, getTheme } from '../theme/ipcTheme'

export const YourMockup = () => {
  const [theme, setTheme] = useState<Theme>('light')
  const colors = getTheme(theme)

  return (
    <div style={{ backgroundColor: colors.background }}>
      {/* Your mockup design */}
    </div>
  )
}
```

#### 2. Register in App.tsx

```tsx
import { YourMockup } from './mockups/designs/YourMockup'

const mockups: Mockup[] = [
  {
    id: 'your-mockup',
    name: 'Your Mockup Name',
    description: 'Brief description of this design',
    component: YourMockup
  },
  // ... other mockups
]
```

#### 3. View Your Mockup

Your new mockup appears automatically in the selector!

## 🎨 Customization

### Colors

Edit `src/mockups/theme/ipcTheme.ts` to customize colors:

```typescript
export const lightTheme: ThemeColors = {
  background: '#FBFDFC',
  cardBackground: '#FFFFFF',
  primary: '#66c15a',
  // ... more colors
}
```

### Components

Available reusable components in `src/mockups/components/`:

- **Button** - Styled buttons (primary, secondary, tertiary, ghost)
- **Card** - Card containers with Header, Body, Footer
- **SearchBar** - Search input with icon
- **Badge** - Status badges
- **Header/Navbar** - Navigation components
- **Icons** - 15+ common UI icons

### Mock Data

Add JSON files to `src/mockups/data/`:

```json
[
  {
    "id": "1",
    "title": "Example Item",
    "description": "Item description",
    "icon": "document"
  }
]
```

## 📁 Project Structure

```
src/
├── App.tsx                    # Mockup selector
├── mockups/
│   ├── components/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Badge.tsx
│   │   ├── Header.tsx
│   │   ├── Icon.tsx
│   │   ├── IPCIcons.tsx
│   │   └── index.ts
│   ├── designs/              # Mockup pages
│   │   ├── ExampleMockup.tsx
│   │   ├── IntegrityProV1.tsx
│   │   └── [Your mockups]
│   ├── data/                 # Mock JSON data
│   │   ├── services.json
│   │   ├── announcements.json
│   │   ├── ipc-shortcuts.json
│   │   └── ipc-announcements.json
│   ├── theme/                # Theme configuration
│   │   ├── colors.ts
│   │   └── ipcTheme.ts
│   ├── assets/              # Images and assets
│   └── README.md            # Component documentation
├── materials/               # Design assets and references
└── MOCKUP_GUIDE.md         # Detailed usage guide
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool and dev server
- **Motion (Framer Motion)** - Animations
- **Vite Single File** - Single HTML output

## 📚 Documentation

- **MOCKUP_GUIDE.md** - Comprehensive guide for adding mockups
- **src/mockups/README.md** - Component library documentation

## 🎯 Use Cases

- **Design presentations** - Compare multiple design variations
- **Client reviews** - Easy navigation between mockup versions
- **Development reference** - Keep mockups accessible during development
- **Design system showcase** - Display component libraries
- **Prototyping** - Rapid mockup creation with reusable components

## 🌟 Example Mockup: IntegrityPro Employee Center

Included is a full-featured Employee Service Center portal mockup featuring:

- ✅ IntegrityPro branding and color palette
- ✅ Light/Dark theme support
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive search
- ✅ Service shortcuts grid
- ✅ Announcements panel
- ✅ Custom IPC icons
- ✅ Professional typography and spacing

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! This tool is designed to be easily extensible.

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
