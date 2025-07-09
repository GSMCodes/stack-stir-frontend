'use client'
import React from 'react';
import Image from 'next/image'

const LandingPage = () => { 

  
  return (
    <div id='mainHolder' className='relative h-screen w-full flex '>
        <div id='rightHolder' className='w-[56%] h-full pb-18 px-14 pt-12 ' >
          <div id='headings '>
            <h1 className='text-[12vh] text-[#B6B09F] hover:cursor-default ' style={{ fontFamily: 'var(--font-bebas-neue)'}}>STACK-STIR</h1>
            <h2 className='text-[6vh] text-[#EAE4D5] underline mt-[-6vh] hover:cursor-default ' style={{ fontFamily: 'var(--font-bebas-neue)'}}>Collaborate.Create.Conquer</h2>
          </div>
          <div id='descriptionHolder' className='flex flex-col items-center mt-20 text-xl text-[#EAE4D5] ' style={{ fontFamily: 'var(--font-geist-mono)'}}>
            <p id='description1' className='w-[70%] hover:cursor-default '>StackStir bridges the gap between learning and doing. It's a dynamic platform for developers to swap skills, form project teams, and build real applications, collaboratively conquering new tech stacks.</p>
            <p id='description2' className='w-[70%] mt-8 hover:cursor-default'>Gain invaluable, practical experience that truly stands out. Accelerate your career trajectory by collaborating on projects that truly matter to your professional development. Level up your tech skills by building real projects, together.</p>
          </div>
          <div id='buttonHolder' className='mt-12 flex justify-center w-full '>
            <button
              className='px-6 py-3 rounded-lg border border-[#EAE4D5] text-[#EAE4D5] text-lg tracking-wider font-medium transition duration-300 ease-in-out hover:bg-[#EAE4D5] hover:text-[#0D0D0D] hover:shadow-md hover:cursor-none'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Get Started!
            </button>
          </div>
        </div>
        <div id='leftHolder' className='w-[44%] h-full  flex items-center justify-center selection:bg-blue-200' >
          <Image
        src="live-collaboration-animate.svg" 
        alt="Landing Illustration"
        width={600}
        height={400}
        unoptimized 
      />
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#EAE4D5] text-sm flex flex-col items-center animate-pulse " style={{ fontFamily: 'var(--font-geist-mono) ', animationDuration: '1.5s'}}>
          <span className="text-2xl">↓</span>
        </div>
      </div>
  );
};

export default LandingPage; 