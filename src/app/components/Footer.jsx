import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='h-[100px] text-center text-white text-2xl py-3 bg-sky-900'>
        <p>&copy;UNIVELCITY{year}:All rights reserved</p>

    </footer>
  
  )
}
