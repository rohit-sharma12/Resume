import { useEffect, useRef } from "react";
// Import useSpring along with the others
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const HeroSectionAnimated = () => {

    const element = useRef(null);

    // 1. SCROLL PROGRESS FOR OPACITY (for the second paragraph)
    const { scrollYProgress: opacityProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'start 0.27']
    });

    // 2. SCROLL PROGRESS FOR SLIDE-IN (for the first paragraph)
    const { scrollYProgress: slideProgress } = useScroll({
        target: element,
        offset: ['start 1', 'start 0.7']
    });

    // 3. APPLY SPRING EFFECT TO THE SLIDE PROGRESS
    // This makes the slideProgress (0 to 1) smoother and adds momentum.
    const smoothSlideProgress = useSpring(slideProgress, {
        stiffness: 100, // Higher stiffness = faster spring, more resistance
        damping: 30,    // Higher damping = faster decay of oscillation (less bounce)
        restDelta: 0.001 // Threshold for the animation to be considered complete
    });

    // 4. TRANSFORM SLIDE PROGRESS into an X-position value.
    // We use the new smoothSlideProgress here.
    const x = useTransform(smoothSlideProgress, [0, 1], ['200%', '0%']);

    // 5. TRANSFORM OPACITY PROGRESS into an opacity value
    const opacity = useTransform(opacityProgress, [0, 1], [0, 1]);

    useEffect(() => {
    }, []);

    const AnimatedParagraph = ({ children, customRef }) => {
        return (
            <motion.p
                ref={customRef}
                // Apply both X and opacity based on the smooth progress
                style={{ x, opacity: smoothSlideProgress }}
                className="mb-6 leading-relaxed"
            >
                {children}
            </motion.p>
        )
    }

    return (
        // Retaining overflow-x-hidden to prevent horizontal scrollbar
        <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">

            <div className="max-w-6xl mx-auto px-5 lg:px-8">
                <section className="py-24 lg:py-36 pt-5 ">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl tracking-wider">
                        I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                    </h1>
                </section>

                <section className="pt-5 pb-20">
                    <p className="text-sm text-gray-400 mb-3">
                        This is me.
                    </p>

                    <div className="w-full h-px bg-gray-800 mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">

                        <div className="md:col-span-1">
                            <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                                Hi, I'm Rohit.
                            </h2>
                        </div>

                        <div className="md:col-span-2 text-lg font-light text-gray-300">

                            {/* Animated First Paragraph. Now uses spring for smoothness. */}
                            <AnimatedParagraph customRef={element}>
                                I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
                            </AnimatedParagraph>

                            {/* Animated Second Paragraph */}
                            <motion.p style={{ opacity }} className="leading-relaxed">
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