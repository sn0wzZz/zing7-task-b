import React from 'react'

export default function Heading({children, quickFix}:any) {
  return (
    <h2 className={`font-bold ${quickFix}`}>{children}</h2>
  )
}
