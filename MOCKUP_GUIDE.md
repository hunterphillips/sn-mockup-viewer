# Employee Service Center Mockup System - Quick Start Guide

## Overview

This project is set up to create and view multiple mockup designs for an Employee Service Center portal. The `App.tsx` serves as a mockup selector, allowing you to easily switch between different design variations.

## Getting Started

### 1. Start the Development Server

```bash
npm run dev
```

Open your browser to the URL shown (usually http://localhost:5173)

### 2. View the Mockup Selector

You'll see a card-based interface showing all available mockups. Click any card to view the full mockup design.

### 3. Navigate Mockups

- **View a mockup**: Click on any mockup card
- **Go back**: Click the "Back to Selector" button in the top-left corner
- **Test responsiveness**: Resize your browser or use DevTools device emulation

## Adding a New Mockup Design

### Step 1: Create the Mockup Component

Create a new file: `src/mockups/designs/YourMockupName.tsx`

```tsx
import {
  Button,
  Card,
  CardBody,
  SearchBar,
  Header,
  Navbar
} from '../components'

// Import mock data if needed
import servicesData from '../data/services.json'

export const YourMockupName = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your design goes here */}
      <Header sticky>
        <Navbar>
          <h1 className="text-xl font-bold">Employee Service Center</h1>
        </Navbar>
      </Header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Main content */}
      </main>
    </div>
  )
}
```

### Step 2: Register in App.tsx

1. **Import your component** (around line 4):
```tsx
import { YourMockupName } from './mockups/designs/YourMockupName'
```

2. **Add to the mockups array** (around line 29):
```tsx
const mockups: Mockup[] = [
  {
    id: 'your-mockup-id',
    name: 'Your Mockup Display Name',
    description: 'Brief description of this design variation',
    component: YourMockupName
  },
  // ... other mockups
]
```

### Step 3: View Your Mockup

Save the files, and your new mockup will appear in the selector automatically!

## Available Resources

### UI Components (`src/mockups/components/`)

Import from `'../components'`:

```tsx
import {
  Button,           // Styled buttons (primary, secondary, tertiary, ghost)
  Card,             // Card containers with hover effects
  CardHeader,       // Card header section
  CardBody,         // Card body section
  CardFooter,       // Card footer section
  SearchBar,        // Search input with icon
  Badge,            // Status badges
  Header,           // Page header
  Navbar,           // Navigation bar
  NavItem,          // Navigation items
  // Icons:
  SearchIcon,
  UserIcon,
  BellIcon,
  HomeIcon,
  DocumentIcon,
  TicketIcon,
  CalendarIcon,
  ChatIcon,
  ClockIcon,
  QuestionIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MenuIcon,
  ChevronDownIcon
} from '../components'
```

### Mock Data (`src/mockups/data/`)

```tsx
import servicesData from '../data/services.json'      // Employee services
import announcementsData from '../data/announcements.json'  // Announcements
import quickLinksData from '../data/quickLinks.json'   // Quick links
import ticketsData from '../data/tickets.json'         // Support tickets
```

### Component Examples

**Button:**
```tsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
```

**Card:**
```tsx
<Card hover>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content...</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**SearchBar:**
```tsx
<SearchBar
  placeholder="Search services..."
  onSearch={(value) => console.log(value)}
/>
```

**Badge:**
```tsx
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Rejected</Badge>
<Badge variant="info">In Progress</Badge>
```

## Customizing Colors

You mentioned you'll provide custom colors. Here's how to apply them:

### Option 1: Direct Tailwind Classes
```tsx
<div className="bg-[#1a2b3c] text-[#ffffff]">
  Custom colors
</div>
```

### Option 2: Update Components
Edit files in `src/mockups/components/` to change default colors:

```tsx
// In Button.tsx, change the variants object:
const variants = {
  primary: 'bg-[#YOUR-COLOR] text-white hover:bg-[#YOUR-HOVER-COLOR]',
  // ...
}
```

### Option 3: Extend Tailwind Config
Edit `tailwind.config.js` to add your brand colors (if needed).

## Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="
  grid
  grid-cols-1        /* 1 column on mobile */
  md:grid-cols-2     /* 2 columns on tablet */
  lg:grid-cols-3     /* 3 columns on desktop */
  gap-4
">
  {/* Content */}
</div>
```

Breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## Example Workflow

1. **You provide**: Screenshot or image of a portal design
2. **I create**:
   - New component in `src/mockups/designs/`
   - Register it in `App.tsx`
   - Use provided color palette
3. **You review**: View in the selector, test responsiveness
4. **Iterate**: Request changes or provide next design

## Tips for Best Results

1. **Provide design context**: Share the purpose of each section
2. **Specify color palette**: Provide hex codes for brand colors
3. **Mobile vs Desktop**: Let me know if there are different layouts
4. **Interactive elements**: Tell me which buttons/links should be prominent
5. **Data examples**: Share sample content for services, announcements, etc.

## File Structure

```
src/
├── App.tsx                          # Mockup selector (you configure this)
├── mockups/
│   ├── components/                  # Reusable UI library
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Badge.tsx
│   │   ├── Header.tsx
│   │   ├── Icon.tsx
│   │   └── index.ts
│   ├── designs/                     # Your mockup pages
│   │   └── ExampleMockup.tsx       # Example to reference
│   ├── data/                        # Mock data
│   │   ├── services.json
│   │   ├── announcements.json
│   │   ├── quickLinks.json
│   │   └── tickets.json
│   └── README.md                    # Detailed component docs
```

## Need Help?

- Check `src/mockups/designs/ExampleMockup.tsx` for a working example
- See `src/mockups/README.md` for detailed component documentation
- All components support standard HTML attributes and Tailwind classes

## Ready to Start!

Share your first mockup design image and your custom color palette, and I'll create the first portal mockup!
