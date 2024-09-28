import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {
    const [navItems] = useState([
        { title: "About Us", url: "#hero" },
        { title: "Features", url: "#features" },
        { title: "Pricing", url: "#pricing" },
        { title: "Login", url: "#hero" },
        { title: "Sign Up", url: "#hero" }
    ]);

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className='block md:hidden'>
            {
                !navOpen ? (
                    <button onClick={() => setNavOpen(true)}>
                        <Menu size={32} />
                    </button>
                ) : (
                    <>
                        <button onClick={() => setNavOpen(false)}>
                            <X size={32} />
                        </button>
                        <div className="absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t">
                            <ul className='flex flex-col py-4 items-center'>

                                {navItems.map((item, index) => (
                                    <a key={index} href={item.url} className='text-gray-600 p-4' onClick={() => setNavOpen(false)}>
                                        {item.title}
                                    </a>
                                ))}

                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MobileMenu;
