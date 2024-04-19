import React from 'react'

export default function Container({bgColor, gridProps, children}: any) {
  return <div className={`${bgColor} ${gridProps} pt-32 px-2 lg:px-20 pb-20 `}>{children}</div>
}
