import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export const Card = ({
  hover = false,
  className = '',
  children,
  ...props
}: CardProps) => {
  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-100'
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer' : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  )
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody = ({ children, className = '' }: CardBodyProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  )
}
