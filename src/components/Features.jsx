import { features } from '../data/features';
import { TagLine } from './TagLine';
const Features = () => {
    return (
        <section id='features' className="flex items-center p-10 justify-center flex-col">
            <TagLine>Features</TagLine>
            <h2 className='font-extrabold text-center md: text-3xl mb-4 md:mb-8 pt-3'>AI-Powered Content Generator</h2>
            <div className='mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl '>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex space-x-4 bg-white border-indigo-400/30 rounded-lg shadow-lg p-6 m-2 h-full hover:scale-105 transition-all'>
                            <div>
                                <h3 className='font-extrabold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent text-xl mb-2 text-center'>{feature.title}</h3>
                                <p className='bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-semibold'>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features;
