# DesignDeck

A mockup comparison tool for viewing and navigating design variations.

## Features

- Card-based mockup selector
- Infinite carousel navigation (hover left/right edges)
- Light/dark theme toggle with persistence
- Reusable component library
- Mobile responsive

## Quick Start

```bash
npm install
npm run dev
```

## Adding Mockups

1. Create component in `src/mockups/designs/YourMockup.tsx`
2. Import and register in `src/App.tsx`
3. Appears automatically in selector

Example:

```tsx
import { useState } from 'react'
import { getTheme } from '../theme/ipcTheme'

export const YourMockup = () => {
  const [theme, setTheme] = useState('light')
  const colors = getTheme(theme)

  return (
    <div style={{ backgroundColor: colors.background }}>
      {/* Your mockup */}
    </div>
  )
}
```

Register in `App.tsx`:

```tsx
const mockups = [
  {
    id: 'your-mockup',
    name: 'Your Mockup',
    description: 'Brief description',
    component: YourMockup
  }
]
```

## Structure

```
src/
├── App.tsx                  # Mockup selector
├── mockups/
│   ├── components/          # UI components
│   ├── designs/             # Mockup pages
│   ├── data/                # Mock JSON data
│   ├── theme/               # Theme config
│   └── assets/              # Images
```

## Components

Available in `src/mockups/components/`:

- Button (primary, secondary, tertiary, ghost)
- Card (with Header, Body, Footer)
- SearchBar
- Badge
- Header/Navbar
- Icons (15+ common UI icons)

## Theme

Edit `src/mockups/theme/ipcTheme.ts` to customize colors:

```typescript
export const lightTheme = {
  background: '#FBFDFC',
  cardBackground: '#FFFFFF',
  primary: '#66c15a',
  // ...
}
```

## Tech Stack

React 19, TypeScript, Tailwind CSS 4, Vite

## Example

Includes IntegrityPro Employee Center mockup with custom branding and theme support.

## License

MIT
