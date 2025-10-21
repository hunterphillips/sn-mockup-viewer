# Employee Service Center Mockups

This directory contains the mockup designs for the Employee Service Center portal.

## Directory Structure

```
mockups/
├── components/       # Reusable UI components
├── designs/          # Individual mockup page designs
├── data/            # Mock data JSON files
└── README.md        # This file
```

## How to Add a New Mockup

### 1. Create Your Mockup Component

Create a new file in `designs/` (e.g., `DesignV1.tsx`):

```tsx
import { Button, Card, SearchBar } from '../components'
import servicesData from '../data/services.json'

export const DesignV1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your design here */}
    </div>
  )
}
```

### 2. Register the Mockup in App.tsx

Add your mockup to the imports and mockups array:

```tsx
// Add to imports at the top
import { DesignV1 } from './mockups/designs/DesignV1'

// Add to mockups array
const mockups: Mockup[] = [
  {
    id: 'v1',
    name: 'Design Version 1',
    description: 'First design iteration with...',
    component: DesignV1
  },
  // ... other mockups
]
```

### 3. View Your Mockup

1. Run `npm run dev`
2. Open http://localhost:5173
3. Click on your mockup card in the selector
4. Use "Back to Selector" to return to the main page

## Available Components

All components are in `components/` and can be imported from `'../components'`:

- **Button** - Primary, secondary, tertiary, and ghost button styles
- **Card, CardHeader, CardBody, CardFooter** - Card components with sections
- **SearchBar** - Search input with icon
- **Badge** - Status badges (primary, success, warning, danger, info, neutral)
- **Header, Navbar, NavItem** - Navigation components
- **Icons** - SearchIcon, UserIcon, BellIcon, HomeIcon, DocumentIcon, TicketIcon, CalendarIcon, etc.

## Available Mock Data

Mock data files in `data/`:

- **services.json** - Employee service catalog
- **announcements.json** - Portal announcements
- **quickLinks.json** - Quick access links
- **tickets.json** - Sample support tickets

Import with: `import servicesData from '../data/services.json'`

## Styling & Customization

### Color Palette

To customize colors, you can:

1. **Use Tailwind classes directly**: `bg-blue-600`, `text-gray-900`, etc.
2. **Extend Tailwind config** in `tailwind.config.js` (if needed)
3. **Update component variants** in component files

### Responsive Design

Use Tailwind's responsive prefixes:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards will be 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

## Tips for Creating Mockups

1. **Use the example mockup as a template** - `ExampleMockup.tsx` shows common patterns
2. **Reuse components** - Don't recreate buttons, cards, etc. Use the component library
3. **Keep it responsive** - Always test on mobile, tablet, and desktop sizes
4. **Use mock data** - Don't hardcode content, use the JSON data files
5. **Add hover states** - Use Tailwind's `hover:` prefix for interactive feel
6. **Follow consistent spacing** - Use Tailwind spacing: `p-4`, `mb-8`, `gap-6`, etc.

## Example Mockup Structure

```tsx
export const YourMockup = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header sticky>
        <Navbar>
          {/* Navigation content */}
        </Navbar>
      </Header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Your content */}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        {/* Footer content */}
      </footer>
    </div>
  )
}
```

## Questions?

Refer to the `ExampleMockup.tsx` component for a complete working example showing all features.
