import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
   return (
      <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
         <Layout className='flex justify-between py-8 w-full  items-center lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
               Build With <span className='text-primary text-2xl px-1'>&#9825;</span>
               by&nbsp; <Link href='/' className='underline underline-offset-2' target={'_blank'}>DakshCodes</Link>
            </div>
            <Link href='/' target={'_blank'} className='underline underline-offset-2'>Show Some Love</Link>
         </Layout>
      </footer>
   )
}

export default Footer
