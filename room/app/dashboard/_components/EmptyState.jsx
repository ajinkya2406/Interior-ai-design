import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

 function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
        <Image src={'/livingroom1.png'}
            width={200} height={200} alt=''
        />
        <h2 className='font-medium text-xg text-gray-500 p-5'>Create new AI Interir Design for your name</h2>
        <Link href={'/dashboard/create-new'}>
        <Button className='mt-5'>+ Redesign Room</Button>
        </Link>
    </div>
  )
}

export default EmptyState