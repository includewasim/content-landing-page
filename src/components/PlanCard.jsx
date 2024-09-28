import { Check } from "lucide-react";

export const PlanCard = ({ title, price, description, features, isPopular }) => {
    return (
        <div className="border flex flex-col justify-between bg-white/20 backdrop-blur-lg rounded-lg h-full p-6 hover:shadow-md text-left relative ">
            {isPopular && (
                <div className="popular-tag absolute -top-6 left-0 bg-indigo-500 text-white px-2 py-1 rounded-t-lg w-full text-center">Popular</div>
            )}
            <div className="flex-grow">
                <div className="inline-flex items-end">
                    <h1 className="font-extrabold text-3xl">{price}</h1>
                    <span className="ml-3 text-gray-500 align-bottom"> /month</span>
                </div>
                <div>
                    <h2 className="font-bold text-xl my-2">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="border-t border-gray-400 opacity-25 my-3">
                    <ul>
                        {features.map((item, index) => (
                            <li key={index} className="flex flex-row items-center text-gray-700 gap-2 my-2">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                                    <Check className="inline-block text-white w-4 h-4" />
                                </div>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="bg-indigo-500 py-2 mt-3 rounded-lg text-white w-full hover:bg-indigo-600">Select Plan</button>
        </div>
    );
}
