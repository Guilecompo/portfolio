import React from 'react'
import inventory from '../assets/projects/inventory.png'
import mathgame from '../assets/projects/math.png'
import ordering from '../assets/projects/ordering.png'
import qrquiz from '../assets/projects/QRquiz.png'
import resumemaker from '../assets/projects/resumemaker.png'
import shoutout from '../assets/projects/shoutout.png'
import socialmedia from '../assets/projects/socialmedia.png'
import waterworks from '../assets/projects/waterworks.png'

function Projects() {

  const projectsWeb = [
    {
      id: 1,
      src: waterworks,
      child: (
        <>
            Water Billing System
        </>
      ),
      progress: (
        <>
            Almost Finish
        </>
      ),
      style: 'text-green-500',
    },
    {
      id: 2,
      src: inventory,
      child: (
        <>
            Inventory System
        </>
      ),
      progress: (
        <>
            Starting to work
        </>
      ),
      style: 'text-orange-500',
    },
    {
      id: 3,
      src: resumemaker,
      child: (
        <>
            Resume Maker
        </>
      ),
      progress: (
        <>
            On Upgrade
        </>
      ),
      style: 'text-orange-500',
    },
  ]
  const projectsMobile = [
    {
      id: 1,
      src: socialmedia,
      child: (
        <>
            Social Media App Clone
        </>
      ),
      progress: (
        <>
            On Upgrade
        </>
      ),
      style: 'text-orange-500',
    },
    {
      id: 2,
      src: mathgame,
      child: (
        <>
            Math for Kids
        </>
      ),
      progress: (
        <>
            Almost Finish
        </>
      ),
      style: 'text-green-500',
    },
    {
      id: 3,
      src: ordering,
      child: (
        <>
            Ordering App w/ QR code
        </>
      ),
      progress: (
        <>
            On Upgrade
        </>
      ),
      style: 'text-orange-500',
    },
    {
      id: 4,
      src: shoutout,
      child: (
        <>
            Shout Out App
        </>
      ),
      progress: (
        <>
            On Upgrade
        </>
      ),
      style: 'text-orange-500',
    },
    {
      id: 5,
      src: qrquiz,
      child: (
        <>
            I.T QR Quiz Game
        </>
      ),
      progress: (
        <>
            Done
        </>
      ),
      style: 'text-green-500',
    },
  ]

  return (
    <div name="projects" className='pb-2 pt-16 md:h-screen w-full bg-gradient-to-b from-gray-600  via-gray-900 to-gray-900  text-white'>
        <div className='pt-10 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='pt-2 pb-1'>Check out my works</p>
            </div>
            
            <p className='mt-0'>Web App</p>
            <div className='mt-1 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {projectsWeb.map(({id, src, child, progress, style})=>(
                  <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div>
                    <p className='px-2  mb-0 '>{child}</p>
                  </div>
                  <div>
                  <p className={`px-2  mb-0 pb-0 ${style} `}>{progress}</p>
                  </div>
              </div>
                ))}
                
            </div>
            <p className='mt-3'>Mobile App</p>
            <div className='mt-1 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
              
              {projectsMobile.map(({id, src, child, progress, style})=>(
                  <div key={id} className='shadow-md shadow-gray-500 rounded-lg '>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-70 w-full' />
                  <div>
                    <p className='px-2 '>{child}</p>
                  </div>
                  <div>
                    <p className={`px-2  mb-0 pb-0 ${style}`}>{progress}</p>
                  </div>
              </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Projects
