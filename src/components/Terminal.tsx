import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  children: string
  className?: string
  delay?: number
  speed?: number
  onComplete?: () => void
}

export function TypingAnimation({
  children,
  className = '',
  delay = 0,
  speed = 25,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    setDisplayedText('')
    
    const interval = setInterval(() => {
      if (i < children.length) {
        setDisplayedText((prev) => prev + children.charAt(i))
        i++
      } else {
        clearInterval(interval)
        if (onComplete) onComplete()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, children, speed, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {started && displayedText.length < children.length && (
        <span className="animate-pulse bg-blue-400 h-4 w-2 inline-block align-middle ml-1" />
      )}
    </span>
  )
}

interface AnimatedSpanProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSpan({ children, className = '', delay = 0 }: AnimatedSpanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TerminalProps {
  children: React.ReactNode
  className?: string
}

export function Terminal({ children, className = '' }: TerminalProps) {
  return (
    <div className={`w-full rounded-2xl border border-default bg-slate-950/80 backdrop-blur-xl shadow-card overflow-hidden font-mono text-sm text-body relative ${className}`}>
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-default select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
          <div className="w-3 h-3 rounded-full bg-[#eab308]" />
          <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        </div>
        <div className="text-xs text-slate-400 font-medium">visitor@luminavtech:~</div>
        <div className="w-12" /> {/* spacer to center label */}
      </div>

      {/* Terminal Content */}
      <div className="p-5 overflow-y-auto max-h-[380px] space-y-3 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        {children}
      </div>
    </div>
  )
}
