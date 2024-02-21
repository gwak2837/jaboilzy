import Image from 'next/image'
import { Suspense } from 'react'

import DialogueId from './DialogueId'
import SortProducts from './KeyboardController'
import NextLink from './NextLink'
import PrevLink from './PrevLink'

export default function Page({ searchParams }: PageProps) {
  return (
    <main className="flex items-center justify-center min-h-screen relative z-0 bg-black text-white">
      <Image
        src={`/images/${searchParams.id}.png`}
        className="z-0"
        alt="image"
        fill
        objectFit="contain"
      />
      <div className="z-10">
        <Suspense fallback={<div>...</div>}>
          <div className="flex gap-2">
            <PrevLink />
            <DialogueId />
            <NextLink />
            <div>{searchParams.id}</div>
          </div>
        </Suspense>
        <Suspense fallback={null}>
          <SortProducts />
        </Suspense>
      </div>
    </main>
  )
}
