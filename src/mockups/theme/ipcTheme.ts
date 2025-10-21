/**
 * IntegrityPro Theme Configuration
 * Light and Dark theme color palettes
 */

export type Theme = 'light' | 'dark';

interface ThemeColors {
  // Page backgrounds
  background: string;
  cardBackground: string;

  // Header
  headerBackground: string;
  headerBorder: string;

  // Text
  text: string;
  textLight: string;
  textMuted: string;

  // Borders
  border: string;
  borderLight: string;

  // Form elements
  inputBackground: string;
  inputBorder: string;
  inputText: string;

  // Brand colors (consistent across themes)
  primary: string;
  primaryHover: string;
  accent: string;
}

export const lightTheme: ThemeColors = {
  background: '#FBFDFC',
  cardBackground: '#FFFFFF',

  headerBackground: '#FBFDFC',
  headerBorder: '#FBFDFC',

  text: '#333333',
  textLight: '#898989',
  textMuted: '#A0A0A0',

  border: '#EEEEEE',
  borderLight: '#F0F0F0',

  inputBackground: '#FFFFFF',
  inputBorder: '#D2D2D2',
  inputText: '#333333',

  primary: '#66c15a',
  primaryHover: '#5ab04e',
  accent: '#27b681',
};

export const darkTheme: ThemeColors = {
  background: '#0f1419',
  cardBackground: '#1c2128',

  headerBackground: '#1c2128',
  headerBorder: '#2d333b',

  text: '#e8e8e8',
  textLight: '#a0a0a0',
  textMuted: '#707070',

  border: '#2d333b',
  borderLight: '#373e47',

  inputBackground: '#1c2128',
  inputBorder: '#2d333b',
  inputText: '#e8e8e8',

  primary: '#66c15a',
  primaryHover: '#5ab04e',
  accent: '#27b681',
};

export const getTheme = (theme: Theme): ThemeColors => {
  return theme === 'dark' ? darkTheme : lightTheme;
};
