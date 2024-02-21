import { Suspense } from 'react'

import DialogueId from './DialogueId'
import SortProducts from './KeyboardController'

export default function Page({ searchParams }: PageProps) {
  return (
    <div className="flex items-center justify-center h-[100svh]">
      <Suspense fallback={<div>...</div>}>
        <DialogueId />
      </Suspense>
      <Suspense fallback={null}>
        <SortProducts />
      </Suspense>
    </div>
  )
}
