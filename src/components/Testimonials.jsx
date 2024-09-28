import React, { useEffect } from 'react'
import { TagLine } from './TagLine'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className='flex items-center p-10 justify-center flex-col '>
            <TagLine>Testimonials</TagLine>
            <h2 className='text-3xl font-extrabold text-center mt-3 mb-8 '>What Creators are saying</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl'>
                <div className='grid gap-4'>
                    <div className=' testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/1.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Sarah M</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            This content generator saved me countless hours of brainstorming and writing. The AI suggestions are always on point, and my engagement has increased drastically!
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className=' testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/2.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Sam D</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            I never thought creating high-quality content could be this easy. The AI produces creative ideas that align perfectly with my brand's voice.
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className=' testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6  ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/3.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Emily R</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            As a small business owner, I struggle with consistent content creation. This tool helps me generate ideas and posts without sacrificing quality!
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/4.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Kevin L</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            The AI-generated content feels personalized and unique, making it easy to adapt to my audience's interests. A must-have for any content creator!
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/5.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Maria S</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            Whenever I feel stuck, this content generator sparks new ideas. It's like having a creative partner who never runs out of inspiration.
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/6.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Lisa T</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            I can create blog posts, social media content, and even email campaigns faster than ever before. This tool takes away the stress of constant writing
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/7.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '>Brian K</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            What used to take me hours now takes minutes. I love how intuitive and accurate the AI-generated content is.
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/8.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '>David P</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            The AI-generated content isn't just filler—it helps me create posts that actually drive conversions and sales. I highly recommend it!
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='testimonial-card border rounded-lg bg-white/20 backdrop-blur-lg p-6 ' data-aos="fade-down">
                        <div className='flex space-x-3 mb-4'>
                            <img src="/testimonials/9.png" className='h-12 w-12 rounded-full' />
                            <p className='font-bold '> Alex H</p>
                        </div>
                        <p className='text-sm space-y-4'>
                            his tool has transformed how I approach content creation. The AI delivers high-quality content suggestions, making it easy to maintain a steady flow of ideas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials