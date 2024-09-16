import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';
import profileImage from '../assets/profile2.jpg';

const Home = () => {

    const links = [
        {
            id: 1,
            child: (
                <div className="flex flex-col items-center">
                    <FaLinkedin size={30} className='text-cyan-400' />
                    <span className="mt-1">LinkedIn</span>
                </div>
            ),
            href: 'https://www.linkedin.com/in/guile-compo-260822301/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <div className="flex flex-col items-center">
                    <FaGithub size={30} />
                    <span className="mt-1">GitHub</span>
                </div>
            ),
            href: 'https://github.com/Guilecompo',
        },
        {
            id: 3,
            child: (
                <div className="flex flex-col items-center">
                    <HiOutlineMail size={30} className='text-red-400' />
                    <span className="mt-1">Mail</span>
                </div>
            ),
            href: 'mailto: kideguilecompo03@gmail.com',
        }
    ];

  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-600 '>
        <div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
            <div className='mt-6 flex flex-col justify-center  md:h-full mr-2 ml-2 w-full'>
                <h2 className='mt-16 text-2xl sm:text7xl font-bold text-white'>  I am </h2>
                <h2 className='text-4xl sm:text7xl font-bold text-white'> Kide Guile Compo</h2>
                <h2 className='text-2xl sm:text7xl font-bold text-white'>And I'm a <span className='text-cyan-400'>Web</span> & <span className='text-cyan-400'>Mobile App Developer</span></h2>
                <p className='text-gray-400 py-4 '>
                    Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.
                </p>
                <div className="flex flex-row justify-center items-center">
                {links.map(({ id, child, href, style }) => (
                    <a key={id} href={href} className={`my-6 flex  items-center w-40 h-10 px-5 text-white ${style}`} rel='noreferrer'>
                        {child}
                    </a>
                ))}
            </div>
                <div>
                    <Link 
                        to='projects'
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 mb-8 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Projects <span className='group-hover:rotate-90 duration-300'><IoIosArrowForward size={25} className='ml-2' /></span>
                    </Link>
                </div>
            </div>
            
            <div>
                <img src={profileImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home;
