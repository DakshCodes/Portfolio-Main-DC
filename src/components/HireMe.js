import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className='fixed bottom-4 left-4 flex items-center justify-center overflow-hidden md:right-2 md:left-auto md:top-0 md:bottom-auto md:absolute'>
        <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow'} />
            <Link href='mailto:dakshsinghk2524@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark text-xl md:w-16 md:h-16 md:text-[10px]'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe
