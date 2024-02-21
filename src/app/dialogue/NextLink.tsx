'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NextLink() {
  const searchParams = useSearchParams()
  const dialogId = +(searchParams.get('id') ?? 0)
  const nextDialogueHref = `/dialogue?id=${dialogId + 1}`

  return <Link href={nextDialogueHref}>다음</Link>
}
