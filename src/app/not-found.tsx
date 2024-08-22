import React from 'react'

import Button from '../shared/presentation/ui/button/button'
import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] size-full gap-4 justify-center items-center">
      <h2 className="text-gray-800 text-4xl font-bold">404 - Page not found!</h2>
      <p>This page does not exist, you can use the button below to go back to the homepage.</p>
      <Link href="/">
        <Button size="lg">Go to homepage</Button>
      </Link>
    </div>
  )
}
export default NotFound
