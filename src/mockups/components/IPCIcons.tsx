/**
 * IntegrityPro Branded Icons
 * Custom icons styled to match IPC brand
 */

interface IconProps {
  className?: string
  size?: number
  color?: string
}

// Folder Icon (My Requests)
export const FolderIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// Laptop/Monitor Icon (Assets)
export const LaptopIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke={color} strokeWidth={2} fill="none" />
    <path d="M2 20h20" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <path d="M7 16v4M17 16v4" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
)

// Calendar Icon (Time Off)
export const CalendarIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="15" rx="2" stroke={color} strokeWidth={2} fill="none" />
    <path d="M3 10h18" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <path d="M8 4v4M16 4v4" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
)

// Lightbulb Icon (Knowledge)
export const LightbulbIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 21h6M12 3v1M12 3a5 5 0 00-5 5c0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5h6c0-1.5.5-2.5 1-3.5.5-1 1-2 1-3.5a5 5 0 00-5-5z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M9 17h6" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
)

// Tools/Wrench Icon (Office Maintenance)
export const ToolsIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// Document with Arrow Icon (Policy Update)
export const DocumentArrowIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M14 2v6h6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18l-3-3m0 0l3-3m-3 3h6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
