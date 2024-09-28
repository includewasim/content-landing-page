import React from 'react'
import Tag from './Tag'
import demo from '../assets/demo.png'
import { ChevronRight } from 'lucide-react'
import 'animate.css';

const Hero = () => {
    return (
        <section id="hero" className='hero text-center mt-32 flex flex-col animate__animated animate__fadeIn'>
            <Tag>
                <div className='flex items-center cursor-pointer '>
                    <span>Velora v0.1</span>
                    <ChevronRight className='w-6 h-6 ml-2 text-indigo-300 overflow-visible' />
                </div>
            </Tag>
            <h1 className='text-4xl font-extrabold leading-[1.15] bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent sm:text-6xl'>
                Generate Content
                <br />
                <span className=' bg-gradient-to-r from-pink-500 to via-indigo-600 to-pink-500 bg-clip-text text-transparent'>
                    In Less Than 5 Minutes
                </span>
            </h1>
            <h2 className='mt-5 text-gray-600 sm:text-xl'>
                Transform your business with our powerful SaaS solutions—easy integration, scalable features, and seamless performance.
            </h2>
            <div className='mt-5 mx-auto flex max-w-fit space-x-4'>
                <a href="get-started" className='rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2'>
                    Get Started
                </a>
                <a href="features" className='rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-white text-black hover:ring-gray-400 hover:ring-2'>
                    Learn More
                </a>
            </div>
            <div className='mt-5 items-center justify-center'>
                <img src={demo} alt="demo" className='mx-auto  max-h-[300px] sm:max-h-[500px]' />
            </div>
        </section>
    );
}

export default Hero;