import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button";


const items = [
    {
        id: 1,
        title: "Grow",
        img: "icons/Grow.png",
        des: "Grow is a job portal for job seekers and the employers. Employers can post the job and their description and the job seekers can apply for ths job. Even they can send their resume to the recruiter. Also candidate can save the jobs and track the jobs.",
        link: "https://grow-pink.vercel.app"
    },
    {
        id: 2,
        title: "FitnessLab",
        img: "icons/Exercise.png",
        des: "FitnessLab in fitness platform where you can exercise with this platform and can search your favouite exercises.There is also exercise animation that can tech you the right way to do exercises. You have also the option for watch exrcises on youtube that you selected.",
        link: "https://exercise-murex.vercel.app"

    },
    {
        id: 4,
        title: "Giphy",
        img: "icons/gifhy.png",
        des: "GIPHY is the platform that animates your world. Find the GIFs, Clips, and Stickers that make your conversations more positive, more expressive",
        link: "https://giphy-navy.vercel.app/",
    },
    {
        id: 3,
        title: "Shortify",
        img: "icons/Shortify.png",
        des: "Shortify is advanced URL shortner where you can short you long url and also generate the QR for your url.It has also the features to track your clicks and the location with a greate authentication system.",
        link: "https://shortify-kappa.vercel.app"
    },
    {
        id: 5,
        title: "Amazon",
        img: "icons/amazon.png",
        des: "This is a full amazon clone where you can add your items into cart. It has the feature of deletion and addition of the items from the cart.",
        link: "https://github.com/rohit-sharma12/amazon-clone"
    },
    {
        id: 6,
        title: "Ochi",
        img: "/public/icons/ochi.png",
        des: "Creating UI of Ochi website using React.js, Tailwind CSS and GSAP",
        link: "https://github.com/rohit-sharma12/ochi-clone"
    },
    {
        id: 7,
        title: "Animation",
        img: "icons/animate.png",
        link: "https://github.com/rohit-sharma12/animation"
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-200, 100]);

    return (
        <section>
            <div className="m-auto flex items-center justify-center">
                <motion.Card className="w-[25vw] h-[65vh] mt-10 border rounded-2xl" style={{ y }}>
                    <CardHeader ref={ref}>
                        <img src={item.img} alt="" />
                        <CardTitle className="font-extrabold text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.des}</CardDescription>
                    </CardHeader>
                    <a href={item.link}>
                        <Button variant="outline" className="ml-4 shadow-[0_0_15px_0_#64FFDA80] rounded-2xl p-5 bottom-0">View More</Button>
                    </a>

                </motion.Card>
            </div>

        </section >
    )
}
const Projects = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="relative" ref={ref}>
            <div className="sticky top-0 left-0 pt-12 text-center text-orange-500 text-5xl font-[jaune]">
                <h1 className="">Featured Works</h1>
                <motion.div style={{ scaleX }} className="h-2 bg-white mt-3"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects
