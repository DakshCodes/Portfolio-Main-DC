import React from 'react'

const Layout = ({children,className=''}) => {
  return (
    <div className={`${className} w-full h-full z-0 bg-white inline-block px-36 xl:p-24 lg:p-16 md:12 sm:p-8  `}>
      {children}
    </div>
  )
}

export default Layout
