'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function PrevLink() {
  const searchParams = useSearchParams()
  const dialogId = +(searchParams.get('id') ?? 0)
  const nextDialogId = dialogId > 0 ? dialogId - 1 : dialogId
  const nextDialogueHref = `/dialogue?id=${nextDialogId}`

  return <Link href={nextDialogueHref}>이전</Link>
}
