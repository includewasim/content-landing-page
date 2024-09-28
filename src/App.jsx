import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { partnersLogo } from './data/partner';
import Slider from './components/Slider';
import RoadMapSection from './components/RoadMapSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import Footer from './components/Footer';
import './App.css'
import NewsletterSignup from './components/NewsLetterSignup';

function App() {
  return (
    <>

      <div className='w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none'>

        <div className='absolute inset-0 bg-[url("grid.svg")] opacity-25'></div>

        <img src="/mesh.svg" alt="mesh background" className='absolute inset-0 bottom-1 h-[600px] z-10 opacity-15' />

        <div className='bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20'></div>
      </div>


      <div className='relative z-20'>

        <NavBar />


        <div className="container mx-auto">

          <Hero />


          <Slider images={partnersLogo} />


          <RoadMapSection />


          <Features />


          <Testimonials />


          <PricingSection />

          <NewsletterSignup />

          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
