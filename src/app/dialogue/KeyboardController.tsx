'use client'

import KeybordShortcut from '@/components/KeybordShortcut'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SortProducts() {
  const searchParams = useSearchParams()
  const router = useRouter()

  function decreaseDialogId() {
    const newParams = new URLSearchParams(searchParams.toString())
    const dialogId = +(newParams.get('id') ?? 0)
    newParams.set('id', String(dialogId > 0 ? dialogId - 1 : dialogId))
    router.push(`?${newParams.toString()}`)
  }

  function increaseDialogId() {
    const newParams = new URLSearchParams(searchParams.toString())
    const dialogId = +(newParams.get('id') ?? 0)
    newParams.set('id', String(dialogId + 1))
    router.push(`?${newParams.toString()}`)
  }

  return (
    <>
      <KeybordShortcut keyCode="ArrowLeft" onKeyDown={decreaseDialogId} />
      <KeybordShortcut keyCode="ArrowRight" onKeyDown={increaseDialogId} />
      <KeybordShortcut keyCode="Enter" onKeyDown={increaseDialogId} />
    </>
  )
}
