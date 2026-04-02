'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const destination = ['Paris', 'Tokyo', 'NewYourk']
    const router = useRouter()
    return (
        <div className='flex justify-center items-center text-black h-full flex-col gap-4'>
            <div className='font-bold text-2xl mt-45'>
                choose your destination

            </div>
            <div className='flex flex-col gap-4'>
                {destination.map((d, index) => (
                    <div key={index} className='font-bold text-2xl flex items-center justify-center rounded-2xl
                     w-[200px] h-[100px] bg-black hover:opacity-[0.5] text-white '
                        onClick={() => router.push(`/destination/${d}`)}>
                        {d}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default page