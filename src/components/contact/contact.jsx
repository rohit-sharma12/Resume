import emailjs from '@emailjs/browser';
//import { SpaceIcon } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"
import ContactSvg from "./contactSvg";

const listVariant = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate: {
        x: 0,
        opacity: 1,
        transsition: {
            duration: 0.6,
            staggerChildern: 0.2,
        }
    }
}
const Contact = () => {
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const ref = useRef();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSucess(true);
                    setError(false)
                },
                (error) => {
                    setError(true);
                    setSucess(false)
                },
            );
    };

    const isInView = useInView(ref, { margin: "-300px" });

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center gap-8 lg:gap-24 bg-black px-4 py-8 lg:py-0" ref={ref} onSubmit={sendEmail}>
            <div className="w-full lg:w-1/2 h-full p-3 lg:p-5 flex items-center justify-center">
                <motion.form variants={listVariant} animate={isInView ? "animate" : "initial"} className="flex flex-col gap-4 lg:gap-5 w-full lg:w-4/5" ref={form}>
                    <motion.h1 variants={listVariant} className="text-3xl lg:text-6xl underline flex items-center justify-center font-[wlpsgx]">Contact Me</motion.h1>
                    <motion.div variants={listVariant} className="flex flex-col gap-2 lg:gap-3">
                        <label className="text-lg lg:text-2xl">Name</label>
                        <input className="p-2 lg:p-3 border-none rounded-md text-black" type="text" name="user_username" placeholder="Your name" />
                    </motion.div>
                    <motion.div variants={listVariant} className="flex flex-col gap-2 lg:gap-3">
                        <label className="text-lg lg:text-2xl">Email</label>
                        <input className="p-2 lg:p-3 border-none rounded-md text-black" type="email" name="user_email" placeholder="abc@gmail.com"></input>
                    </motion.div>
                    <motion.div variants={listVariant} className="flex flex-col gap-2 lg:gap-3">
                        <label className="text-lg lg:text-2xl">Message</label>
                        <textarea className="p-2 lg:p-3 border-none rounded-md text-black" rows={8} name="message" placeholder="Write your message..." />
                    </motion.div>
                    <motion.Button variants={listVariant} className="p-3 lg:p-5 border cursor-pointer shadow-[0_0_15px_0_#64FFDA80] text-xl lg:text-2xl font-[jaune]" variant="outline">Send</motion.Button>
                    {sucess && <span className="text-green-500 text-center">Your message has been sent!</span>}
                    {error && <span className="text-red-500 text-center">Something went wrong!</span>}
                </motion.form>
            </div>
            <div className="hidden md:block w-full lg:w-1/2"><ContactSvg /></div>
        </div>
    )
}

export default Contact
