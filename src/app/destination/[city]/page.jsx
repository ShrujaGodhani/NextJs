'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from "@/photos/p3.png"
import tokyoImg from "@/photos/p1.png"
import nyImg from "@/photos/p2.png"
import Image from 'next/image'


function page({ params }) {
    const { city } = useParams()
    return (
        <div className='text-black mt-[100] w-[50%]'>

            {
                city == "Paris" && <Image src={parisImg} width={400} height={400} alt='paris img' />
            }
            {
                city == "NewYourk" && <Image src={nyImg} width={400} height={400} alt='NewYork img' />
            }
            {
                city == "Tokyo" && <Image src={tokyoImg} width={400} height={400} alt='Tokyo img' />
            }

        </div>
    )
}

export default page