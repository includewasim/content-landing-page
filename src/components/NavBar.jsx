import React, { useState } from 'react'
import logoUrl from '/logo.svg'
import { useScroll, useMotionValueEvent } from "framer-motion"
import MobileMenu from './MobileMenu'
const NavBar = () => {
    const { scrollY } = useScroll()

    const [scrolled, setScrolled] = useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest > 0 && !scrolled) {
            setScrolled(true);
        }
        else if (latest == 0 && scrolled) {
            setScrolled(false);
        }
    })

    const defaultClasses = "transiton-all absolute inset-0 -z-1";
    let navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg` : `${defaultClasses} bg-transparent`;
    return (
        <div className='sticky inset-x-0 top-0 z-30 w-full' >
            <div className={navBarClasses}></div>
            <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logoUrl} alt="logo" className='h-[20px] ' />
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex flex-row space-x-4 p-4'>
                            <li><a href="#hero" className='text-gray-600'>About Us</a></li>
                            <li><a href="#features" className='text-gray-600'>Features</a></li>
                            <li><a href="#pricing" className='text-gray-600'>Pricing</a></li>
                        </ul>
                    </nav>
                    <div className='hidden md:block'>
                        <a href="/" className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">Login</a>
                        <a href="/" className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out ml-2">Sign Up</a>
                    </div>
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default NavBar