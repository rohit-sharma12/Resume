import { useEffect, useRef } from "react";
// Ensure you have Framer Motion installed: npm install framer-motion
import { useScroll, motion } from "framer-motion";

const HeroSectionAnimated = () => {

    const element = useRef(null);


    const { scrollYProgress } = useScroll({
        target: element,

        offset: ['start 0.7', 'start 0.27']
    });

    useEffect(() => {
    }, []);

    const AnimatedParagraph = ({ children, customRef }) => {
        return (

            <motion.p
                ref={customRef}
                style={{ opacity: scrollYProgress }}
                className="mb-6 leading-relaxed"
            >
                {children}
            </motion.p>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white font-inter">


            <div className="max-w-6xl mx-auto px-5 lg:px-8">
                <section className="py-24 lg:py-36">
                    {/* FIXED: Changed <h> to <h1> tag. Added text transformation classes. */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl tracking-wider">
                        I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                    </h1>
                </section>

                <section className="pt-10">

                    <p className="text-sm text-gray-400 mb-3">
                        This is me.
                    </p>

                    <div className="w-full h-px bg-gray-800 mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">

                        {/* Left Column: Greeting */}
                        <div className="md:col-span-1">
                            <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                                Hi, I'm Rohit.
                            </h2>
                        </div>

                        {/* Right Column: Bio Text */}
                        <div className="md:col-span-2 text-lg font-light text-gray-300">

                            {/* Animated First Paragraph. Ref is attached here. */}
                            <AnimatedParagraph customRef={element}>
                                I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
                            </AnimatedParagraph>

                            {/* Animated Second Paragraph. Also receives opacity from scrollYProgress. */}
                            <motion.p style={{ opacity: scrollYProgress }} className="leading-relaxed">
                                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
                            </motion.p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSectionAnimated;
