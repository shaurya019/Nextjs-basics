import React from 'react'

export default function Details({params}) {
  return (
    <div>
      <h1>Hi - {params.productId}</h1>
    </div>
  )
}
