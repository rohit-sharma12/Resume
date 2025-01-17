import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    return (
        <div className="h-screen relative flex items-center justify-center overflow-hidden" ref={ref} style={{
            background: type === "skills"
                ? "linear-gradient(180deg, #111132, #0c0cid)"
                : "linear-gradient(180deg, #111132, #50506)",
        }}>
            <motion.h1 style={{ y: yText }} className="text-8xl font-[jaune]">{type === "skills" ? "Skills" : "My Works"}</motion.h1>
            <motion.div className="bg-[url('/mountains.png')] bg-cover w-full h-full absolute z-3"></motion.div>
            <motion.div style={{ y: yBg }} className="bg-[url('/planets.png')] bg-cover w-full h-full absolute z-2"></motion.div>
            <motion.div style={{ x: yBg }} className="bg-[url('/stars.png')] bg-cover w-full h-full absolute z-1"></motion.div>
        </div>
    )
}

export default Parallax
