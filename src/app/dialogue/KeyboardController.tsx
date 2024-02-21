'use client'

import KeybordShortcut from '@/components/KeybordShortcut'
import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
  const searchParams = useSearchParams()

  function increaseDialogId() {
    const newParams = new URLSearchParams(searchParams.toString())
    const dialogId = +(newParams.get('id') ?? 0)
    newParams.set('id', String(dialogId + 1))
    history.pushState(null, '', `?${newParams.toString()}`)
  }

  return (
    <>
      <KeybordShortcut
        keyCode="ArrowLeft"
        onKeyDown={() => {
          const newParams = new URLSearchParams(searchParams.toString())
          const dialogId = +(newParams.get('id') ?? 0)
          newParams.set('id', String(dialogId > 0 ? dialogId - 1 : dialogId))
          history.pushState(null, '', `?${newParams.toString()}`)
        }}
      />
      <KeybordShortcut keyCode="ArrowRight" onKeyDown={increaseDialogId} />
      <KeybordShortcut keyCode="Enter" onKeyDown={increaseDialogId} />
    </>
  )
}
