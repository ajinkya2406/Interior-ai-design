"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './EmptyState';
import Link from 'next/link';

function Listing() {

    const [userRoomList, setUserRoomList] = useState([]);

    return (

        <div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>Hello, welcome</h2>
                <Link href={'/dashboard/create-new'}>
                <Button> + Redesign romm</Button>
                </Link>
            </div>

            {userRoomList?.length == 0 ?

                <EmptyState />
                :
                <div>
                    {/*Listing */}
                </div>
            }
        </div>
    )
}

export default Listing