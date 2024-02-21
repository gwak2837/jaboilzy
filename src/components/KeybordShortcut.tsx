'use client'

import { useEffect, type ReactNode } from 'react'

interface Props {
  keyCode: string
  children?: ReactNode
  onKeyDown?: () => void
  withAltKey?: boolean
}

export default function KeybordShortcut({
  children,
  keyCode,
  onKeyDown,
  withAltKey,
}: Props) {
  useEffect(() => {
    function downHandler({ code, altKey }: KeyboardEvent) {
      if ((!withAltKey || altKey) && keyCode === code) {
        onKeyDown?.()
      }
    }

    document.addEventListener('keydown', downHandler)
    return () => {
      document.removeEventListener('keydown', downHandler)
    }
  }, [keyCode, onKeyDown, withAltKey])

  return <>{children}</>
}
