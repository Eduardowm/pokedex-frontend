'use client'

import React, { useEffect } from 'react'
import Button from '../shared/presentation/ui/button/button'
import Link from 'next/link'

function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] size-full gap-4 justify-center items-center">
      <h2 className="text-gray-800 text-4xl font-bold">Ooops!</h2>
      <p>We&lsquo;re sorry, an unexpected error happened. You can use the button below to go back to the homepage.</p>
      <Link href="/">
        <Button size="lg">Go to homepage</Button>
      </Link>
    </div>
  )
}
export default Error
