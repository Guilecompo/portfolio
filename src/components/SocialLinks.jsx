import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={25} />
                </>
            ),
            href: 'https://www.linkedin.com/in/guile-compo-260822301/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={25} />
                </>
            ),
            href: 'https://github.com/Guilecompo',
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto: kideguilecompo03@gmail.com',
        }
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-10 px-5 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                        <a href={href} className='flex justify-between items-center w-full text-white'
                        rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
