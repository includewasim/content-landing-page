import { useEffect } from "react";
import { Roadmap } from "./Roadmap";

const roadmap = [
    { id: 1, title: "Project Kickoff", description: "Kick-off meeting and requirement gathering" },
    { id: 2, title: "Conceptualization", description: "Conceptualization of the idea" },
    { id: 3, title: "Prototype", description: "Prototype of the idea" },
    { id: 4, title: "Development", description: "Development of the idea" },
    { id: 5, title: "Launch", description: "Launch of the idea" }
];

const RoadMapSection = () => {

    useEffect(() => {
        const handleMouseMove = (e) => {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.style.left = `${e.pageX}px`;
            sparkle.style.top = `${e.pageY}px`;
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000); // Particle removal after 1 second
        };

        const section = document.querySelector(".roadmap-section");
        section.addEventListener("mousemove", handleMouseMove);

        return () => {
            section.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="roadmap-section max-w-80 mx-auto">
            <h1 className="font-extrabold text-3xl text-center mb-16">Product Roadmap</h1>
            {
                roadmap.map((item, index) => (
                    <Roadmap
                        key={index}
                        title={item.title}
                        description={item.description}
                        lastItem={index === roadmap.length - 1} // Use index here
                    />
                ))
            }
        </section>
    );
};

export default RoadMapSection;
