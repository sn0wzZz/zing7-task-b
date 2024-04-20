import React from 'react'

export default function FooterContainer({gridProps, children}:any) {
  return (
    <div
      className={`col-start-1 col-end-13 flex flex-col gap-6 p-5 w-full ${gridProps}`}
    >{children}</div>
  )
}
