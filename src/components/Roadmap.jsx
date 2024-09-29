import { useEffect, useRef } from "react";

export const Roadmap = ({ title, description, lastItem, index, delay }) => {
    const itemRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const item = itemRef.current;
        const line = lineRef.current;

        // Trigger item opacity animation
        setTimeout(() => {
            item.classList.remove('opacity-0');
        }, delay * 300);

        // Trigger line grow animation after the item appears
        setTimeout(() => {
            if (line) {
                line.classList.add('animate-growLine');
            }
        }, delay * 300 + 100); // Line starts slightly after the item

    }, [delay]);

    return (
        <div ref={itemRef} className="flex w-full opacity-0 transition-opacity duration-500">
            <div className="relative flex flex-col items-center h-32">
                <div className="z-20 bg-gradient-to-b from-pink-500 to-indigo-500 h-4 w-4 rounded-full flex-shrink-0 relative">
                    <div className="bg-gradient-to-b from-pink-500 to-indigo-500 h-5 w-5 rounded-full flex-shrink-0 absolute z-10 blur-md"></div>
                </div>
                {
                    !lastItem && (
                        <div ref={lineRef} className="z-0 absolute top-2 w-1 bg-gray-400 flex-grow h-full"></div>
                    )
                }
            </div>
            <div className="ml-10">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
};
