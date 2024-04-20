import React from 'react'

export default function Container({bgColor, gridProps, children, as}: any) {
  if(as==='footer') return (
    <footer
      className={`${bgColor} ${gridProps} pt-10 last:pt-10 md:last:pt-32 px-2 lg:px-20 pb-20 flex flex-col gap-8`}
    >
      {children}
    </footer>
  )
  return <section className={`${bgColor} ${gridProps} first:pt-32 last:pt-10 md:last:pt-32 px-2 lg:px-20 pb-20 flex flex-col gap-8`}>{children}</section>
}
