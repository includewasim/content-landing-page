import { useEffect, useRef, useState } from "react";
import { Roadmap } from "./Roadmap";

const roadmap = [
    { id: 1, title: "Project Kickoff", description: "Kick-off meeting and requirement gathering" },
    { id: 2, title: "Conceptualization", description: "Conceptualization of the idea" },
    { id: 3, title: "Prototype", description: "Prototype of the idea" },
    { id: 4, title: "Development", description: "Development of the idea" },
    { id: 5, title: "Launch", description: "Launch of the idea" }
];

const RoadMapSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                threshold: 1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="roadmap-section max-w-80 mx-auto">
            <h1 className=" bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-3xl text-center mb-16">Product Roadmap</h1>
            {
                isVisible && roadmap.map((item, index) => (
                    <Roadmap
                        key={index}
                        title={item.title}
                        description={item.description}
                        lastItem={index === roadmap.length - 1}
                        delay={index}
                    />
                ))
            }
        </section>
    );
};

export default RoadMapSection;
