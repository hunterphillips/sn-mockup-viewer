import { HTMLAttributes } from 'react'

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  sticky?: boolean
}

export const Header = ({
  children,
  sticky = false,
  className = '',
  ...props
}: HeaderProps) => {
  const stickyStyles = sticky ? 'sticky top-0 z-40' : ''

  return (
    <header
      className={`bg-white border-b border-gray-200 shadow-sm ${stickyStyles} ${className}`}
      {...props}
    >
      {children}
    </header>
  )
}

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

export const Navbar = ({ children, className = '' }: NavbarProps) => {
  return (
    <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="flex items-center justify-between h-16">
        {children}
      </div>
    </nav>
  )
}

interface NavItemProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: React.ReactNode
}

export const NavItem = ({
  active = false,
  children,
  className = '',
  ...props
}: NavItemProps) => {
  const activeStyles = active
    ? 'text-blue-600 border-b-2 border-blue-600'
    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'

  return (
    <button
      className={`px-3 py-2 text-sm font-medium transition-colors ${activeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
