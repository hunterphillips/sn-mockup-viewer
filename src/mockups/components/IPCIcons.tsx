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

// Gear/Cog Icon (Operations)
export const GearIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// Clipboard Icon (Human Resources)
export const ClipboardIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="5"
      y="4"
      width="14"
      height="18"
      rx="2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M9 2h6v3H9V2z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M9 10h6M9 14h6M9 18h4" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
)

// Receipt Icon (Expense Report)
export const ReceiptIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 2h16v20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L4 22V2z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M8 7h8M8 11h8M8 15h5" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
)

// Star Icon (Firm Initiatives)
export const StarIconIPC = ({ className = '', size = 24, color = '#66c15a' }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)
