'use client'

import { useSearchParams } from 'next/navigation'

export default function DialogueId() {
  const searchParams = useSearchParams()

  return <div>{searchParams.get('id')}</div>
}
