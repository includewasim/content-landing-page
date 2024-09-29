import { pricing } from "../data/pricing";
import { PlanCard } from "./PlanCard";
import { TagLine } from "./TagLine";
export const PricingSection = () => {
    return (
        <>
            <section id="pricing" className='flex items-center p-10 justify-center flex-col'>
                <TagLine>Pricing</TagLine>
                <h2 className="bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-xl md:text-3xl mb-8 pt-3 ">Cheap Plans that work for everyone </h2>

                <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-lg">{
                    pricing.map((item, index) => {
                        return (
                            <PlanCard
                                key={index}
                                {...item}
                            />
                        )
                    })
                }
                </div>
            </section>
        </>
    )
}