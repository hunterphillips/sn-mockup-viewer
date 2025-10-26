import React from 'react'

interface IconProps {
  className?: string
  size?: number
  style?: React.CSSProperties
}

// Icon path data - stores the 'd' attribute for each icon
const iconPaths: Record<string, string | { type: 'complex'; content: React.ReactElement }> = {
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  ticket: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  question: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  checkCircle: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  arrowRight: "M9 5l7 7-7 7",
  menu: "M4 6h16M4 12h16M4 18h16",
  chevronDown: "M19 9l-7 7-7-7",
  moon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
  logout: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
}

// Special case for SunIcon which has multiple elements
iconPaths.sun = {
  type: 'complex',
  content: (
    <>
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </>
  )
}

// Factory function to create icon components
const createIcon = (iconData: string | { type: 'complex'; content: React.ReactElement }) => {
  return ({ className = '', size = 24, style }: IconProps) => (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {typeof iconData === 'string' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconData} />
      ) : (
        iconData.content
      )}
    </svg>
  )
}

// Export individual icon components for backwards compatibility
export const SearchIcon = createIcon(iconPaths.search)
export const UserIcon = createIcon(iconPaths.user)
export const BellIcon = createIcon(iconPaths.bell)
export const HomeIcon = createIcon(iconPaths.home)
export const DocumentIcon = createIcon(iconPaths.document)
export const TicketIcon = createIcon(iconPaths.ticket)
export const ChatIcon = createIcon(iconPaths.chat)
export const CalendarIcon = createIcon(iconPaths.calendar)
export const ClockIcon = createIcon(iconPaths.clock)
export const QuestionIcon = createIcon(iconPaths.question)
export const CheckCircleIcon = createIcon(iconPaths.checkCircle)
export const ArrowRightIcon = createIcon(iconPaths.arrowRight)
export const MenuIcon = createIcon(iconPaths.menu)
export const ChevronDownIcon = createIcon(iconPaths.chevronDown)
export const SunIcon = createIcon(iconPaths.sun)
export const MoonIcon = createIcon(iconPaths.moon)
export const LogoutIcon = createIcon(iconPaths.logout)
