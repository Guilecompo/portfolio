import React from 'react'
import bootstrap from '../assets/logos/bootstrap.png'
import csharp from '../assets/logos/csharp1.png'
import css from '../assets/logos/css.png'
import dart from '../assets/logos/dart.png'
import flutter from '../assets/logos/flutter.png'
import html from '../assets/logos/html.png'
import javascript from '../assets/logos/javascript.png'
import mysql from '../assets/logos/mysql.png'
import php from '../assets/logos/php.png'
import react from '../assets/logos/react.png'
import tailwind from '../assets/logos/tailwind.png'
import unity from '../assets/logos/unity.png'

function Experience() {

    const web = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-600'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },
        {
            id: 81,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-yellow-500'
        },
        
    ]
    const mobile = [
        {
            id: 1,
            src: flutter,
            title: 'Flutter',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: dart,
            title: 'Dart',
            style: 'shadow-blue-500'
        }
    ]
    const game = [
        {
            id: 1,
            src: unity,
            title: 'Unity',
            style: 'shadow-white'
        },
        {
            id: 2,
            src: csharp,
            title: 'C#',
            style: 'shadow-purple-600'
        }
    ]

  return (
    <div name="experience" className='pb-2 pt-16 md:h-screen w-full bg-gradient-to-b from-gray-900  via-gray-900 to-gray-600  text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='mb-0 text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-4 '>These are the programming languages, frameworks and databases I've worked with</p>
            </div>
            
            <p>Web</p>
            <div className='mt-1 w-full grid grid-cols-2 gap-8 sm:grid-cols-4 text-center pb-3 px-12 sm:px-0'>
                {web.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
            
            <p>Mobile & Game</p>
            <div className='mt-1 w-full grid grid-cols-2 gap-8 sm:grid-cols-4 text-center pb-3 px-12 sm:px-0'>
                {mobile.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                {game.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience
