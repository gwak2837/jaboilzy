import Image from 'next/image'
import { Suspense } from 'react'

import DialogueId from './DialogueId'
import SortProducts from './KeyboardController'
import NextLink from './NextLink'
import PrevLink from './PrevLink'
import { texts } from './text'

export default function Page({ searchParams }: PageProps) {
  const dialogueId = +(searchParams.id ?? 0)
  const dialogue = texts[dialogueId] ?? {}
  return (
    <main className="flex items-center justify-center min-h-screen relative z-0 bg-black text-white">
      <Image
        src={`/images/${dialogueId}.png`}
        className="z-0"
        alt="image"
        fill
        objectFit="contain"
        priority
      />
      <div className="z-10 bg-black">
        <Suspense fallback={<div>...</div>}>
          <div className="h-[2rem]">{dialogue.characterName}</div>
          <div>{dialogue.line}</div>
          <div className="flex gap-2 justify-center">
            <PrevLink />
            <NextLink />
          </div>
          <div className="text-center">{dialogueId}</div>
        </Suspense>
        <Suspense fallback={null}>
          <SortProducts />
        </Suspense>
      </div>
    </main>
  )
}
