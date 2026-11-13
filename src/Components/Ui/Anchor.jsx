import React from 'react'

function Anchor({href,children,className}) {
  return (
   <a href={href} className={className}>{children}</a>
  )
}

export default Anchor