'use client'
import { useParams } from 'next/navigation'

function page({ params }) {
    const { city } = useParams()
    return (
        <div className='text-black mt-[100] w-[50%]'>
            {city} is best city
        </div>
    )
}

export default page