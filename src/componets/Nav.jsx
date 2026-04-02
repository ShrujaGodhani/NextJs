'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {
    const pathname = usePathname()
    return (
        <div className='w-full h-[80px] bg-black flex items-center px-[20px] fixed top-0'>
            <div className='text-white font-bold text-2xl p-5'>
                🌍Travel
            </div>
            <div >
                <ul className='flex justify-center items-center gap-5 text-white ml-220'>
                    <Link href={"/"} className={pathname == "/" ? "text-blue-500" : ""}><li>home</li></Link>
                    <Link href={"/destination"} className={pathname == "/destination" ? "text-blue-500" : ""}><li>destination</li></Link>
                    <Link href={"/contact"} className={pathname == "/contact" ? "text-blue-500" : ""}><li>contact</li></Link>

                </ul>
            </div>
        </div>
    )
}

export default Nav