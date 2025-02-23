"use client"
import { UserDetailsContext } from '@/app/_context/UserDetailsContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
        
    return (
        <div className='p-5 shadow-sm flex justify-between items-center'> 
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} width={40} height={40} alt=''/>
                <h2 className='font-bold text-lg' >AI Room Design</h2>
            </div>
            
            <Button variant="ghost" className="rounded-full text-primary">Buy More Credits</Button>
            <div className='flex gap-4 items-center'>
                
                <UserButton/>
            </div>
        </div>
    )
}

export default Header