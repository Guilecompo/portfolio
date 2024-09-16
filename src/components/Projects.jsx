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
    <div name="projects" className='min-h-screen w-full bg-gradient-to-b from-gray-600 via-gray-900 to-gray-900 text-white py-16'>
      <div className='max-w-screen-lg mx-auto px-4 flex flex-col h-full'>
        <div className='mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-4'>Check out my works</p>
        </div>
        
        <div className='flex-grow overflow-y-auto'>
          <p className='text-xl font-semibold mb-4'>Web App</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsWeb.map(({id, src, child, progress, style}) => (
              <div key={id} className='bg-gray-800 shadow-md shadow-gray-700 rounded-lg overflow-hidden'>
                <img src={src} alt="" className='w-full h-48 object-cover object-center' />
                <div className='p-4'>
                  <p className='font-medium'>{child}</p>
                  <p className={`mt-2 ${style}`}>{progress}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className='text-xl font-semibold mt-8 mb-4'>Mobile App</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsMobile.map(({id, src, child, progress, style}) => (
              <div key={id} className='bg-gray-800 shadow-md shadow-gray-700 rounded-lg overflow-hidden'>
                <img src={src} alt="" className='w-full h-full object-cover object-center' />
                <div className='p-4'>
                  <p className='font-medium'>{child}</p>
                  <p className={`mt-2 ${style}`}>{progress}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
