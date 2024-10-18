import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>page is not found</h1>
      <Link href="/">back home page</Link>
    </div>
  )
}

export default NotFound
