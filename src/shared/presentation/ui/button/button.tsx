import classNames from "classnames"

const BUTTON_VARIANTS = Object.freeze({
  primary: 'bg-red-500 text-white hover:enabled:bg-red-600',
  secondary: 'bg-white text-gray-800 border border-gray-800 hover:enabled:bg-gray-900',
  danger: 'bg-orange-700 text-white hover:enabled:bg-orange-800',
  success: 'bg-green-700 text-white hover:enabled:bg-green-800',
  warning: 'bg-yellow-700 text-white hover:enabled:bg-yellow-800',
})

const BUTTON_SIZES = Object.freeze({
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
})

interface ButtonProps {
  type?: 'button' | 'submit',
  variant?: keyof typeof BUTTON_VARIANTS
  size?: keyof typeof BUTTON_SIZES
  className?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames('px-4 py-2 rounded', BUTTON_SIZES[size], BUTTON_VARIANTS[variant], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
