"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {id: 1, to: '/',title: 'Home' },
    {id: 2, to: '/pages',title: 'Pages' },
    {id: 3, to: '/services',title: 'Services' },
    {id: 4, to: '/project',title: 'Project' },
    {id: 5, to: '/blog',title: 'Blog' },
    {id: 6, to: '/contact',title: 'Contact' },
]

function NavBar() {
    const pathname = usePathname();
    return (
    <div className='container m-auto '>
      <div className=' h-[150px] flex items-center justify-between'>
        <div className='w-40 h-fit '>
            <img src="./icons/Logo.png" alt="logo" />
        </div>

        <nav>
            <div>
                {
                  links.map(({id, to, title}) => {
                      return <Link 
                      className='pl-14 text-base'
                      href={to} 
                      key={id}>{title}
                      </Link>
                  })
                }
            </div>
        </nav>
        
      </div>

    </div>
    )
}

export default NavBar;