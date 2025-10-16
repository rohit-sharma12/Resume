import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={ref}
            className="relative flex items-center justify-center overflow-hidden h-screen sm:h-[90vh] md:h-screen bg-black"
        >
            {/* Text */}
            <motion.h1
                style={{ y: yText }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-[jaune] text-center text-white px-4"
            >
                {type === "skills" ? "Skills" : "My Works"}
            </motion.h1>

            {/* Background layers */}
            <motion.div
                className="absolute inset-0 bg-[url('/mountains.png')] bg-cover bg-center z-10"
            ></motion.div>

            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 bg-[url('/planets.png')] bg-cover bg-center z-20 opacity-80"
            ></motion.div>

            <motion.div
                style={{ x: yBg }}
                className="absolute inset-0 bg-[url('/stars.png')] bg-cover bg-center z-30 opacity-70"
            ></motion.div>
        </div>
    );
};

export default Parallax;

