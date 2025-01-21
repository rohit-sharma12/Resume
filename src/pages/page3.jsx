import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Page3 = () => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    });
    useEffect(() => {
        scrollYProgress.on("change", e => console.log(e))
    }, [])
    return (
        <div className="bg-black teact-white h-screen w-full flex items-center justify-center p-5 text-center">
            <motion.p ref={element} style={{ opacity: scrollYProgress }} className="text-5xl font-[wlpsgx] leading-[1.5]">I am an enthusiastic and highly motivated Frontend Developer with a passion for building intuitive and visually appealing user interfaces. I am pursuning my Bachelor degree in Computer Application(BCA), I have a strong foundation in HTML, CSS, and JavaScript, Redux, React js Tailwind css, GSAP along with a keen understanding of responsive design and modern web development best practices. I am eager to apply my skills in creating seamless user experiences and contribute to some projects.</motion.p>
        </div>
    )
}

export default Page3
