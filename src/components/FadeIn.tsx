import { type ReactNode } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = '' }: Props) {
  const { ref, visible } = useFadeIn()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
