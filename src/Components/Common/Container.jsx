import React from 'react'

function Container({children, className=""}) {
  return (
   
    <div className={`max-w-7xl mx-auto px-4 md:px-6 2xl:px-0 ${className}`}>
        {children}
    </div>
   
  )
}

export default Container