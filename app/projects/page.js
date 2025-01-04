import Navbar from '@/app/components/Navbar'
import React from 'react'
import { Aoboshi_One } from "next/font/google";
import Projects from '../components/Projects';



const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <div  className={aoboshi.className}>
        <Navbar/>
        <Projects/>
    </div>
  )
}

