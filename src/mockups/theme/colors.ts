/**
 * IntegrityPro Brand Colors
 * Based on official color palette
 */

export const ipcColors = {
  // Primary Brand Greens
  lightGreen: '#8ec841',
  mediumGreen: '#66c15a',
  tealGreen: '#41bb71',
  teal: '#27b681',

  // Grays
  darkGray: '#898989',
  mediumGray: '#d2d2d2',
  lightGray: '#f9f9f9',
  lightestGray: '#eeeeee',

  // Semantic Colors
  primary: '#66c15a',      // Medium green - main brand color
  secondary: '#27b681',    // Teal - accent color
  success: '#41bb71',      // Teal green
  background: '#f9f9f9',   // Light gray background
  cardBg: '#ffffff',       // White cards
  text: '#333333',         // Dark text
  textLight: '#898989',    // Gray text
  border: '#d2d2d2',       // Gray borders
}

// Helper function to use colors in Tailwind classes
export const getColorClass = (color: keyof typeof ipcColors, type: 'bg' | 'text' | 'border' = 'bg') => {
  return `${type}-[${ipcColors[color]}]`
}
