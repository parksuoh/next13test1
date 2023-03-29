import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import profileImage from '../../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='text-center'>
        <Image 
            className='rounded-full mx-auto'
            src={profileImage} 
            alt='Pic of th author' 
            width={250} 
            height={250} 
            priority
        />
        <h2 className='text-3xl font-bold mt-2'> 안녕 난 전요환이야! </h2>
        <h3 className='text-xl font-semibold'> 걍 코딩 하는 사람 </h3>
        <p> 재밌어보이는걸 하는 사람 </p>
        <Link href='/contact'>
            <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact me</button>
        </Link>
    </section>
  )
}
