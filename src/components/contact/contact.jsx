import { Button } from "../ui/button"
import emailjs from '@emailjs/browser';
import { SpaceIcon } from "lucide-react";
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
        <div className="h-screen flex items-center gap-24 bg-black" ref={ref} onSubmit={sendEmail}>
            <div className="w-1/2 h-full p-5 flex items-center justify-center">
                <motion.form variants={listVariant} animate={isInView ? "animate" : "initial"} className="flex flex-col gap-5 w-4/5" ref={form}>
                    <motion.h1 variants={listVariant} className="text-6xl underline flex items-center justify-center font-[wlpsgx]">Contact Me</motion.h1>
                    <motion.div variants={listVariant} className="flex flex-col gap-3">
                        <label className="font-2xl">Name</label>
                        <input className="p-3 border-none rounded-md text-black" type="text" name="user_username" placeholder="Your name" />
                    </motion.div>
                    <motion.div variants={listVariant} className="flex flex-col gap-3">
                        <label className="font-2xl">Email</label>
                        <input className="p-3 border-none rounded-md  text-black" type="email" name="user_email" placeholder="abc@gmail.com"></input>
                    </motion.div>
                    <motion.div variants={listVariant} className="flex flex-col gap-3">
                        <label className="font-2xl">Message</label>
                        <textarea className="border-none rounded-md text-black" rows={10} name="message" placeholder="Write your message..." />
                    </motion.div>
                    <motion.Button variants={listVariant} className="p-5 border cursor-pointer shadow-[0_0_15px_0_#64FFDA80] text-2xl font-[jaune]" variant="outline">Send</motion.Button>
                    {sucess && <span>Your message hass been sent!</span>}
                    {error && <span>Something wnt wrong!</span>}
                </motion.form>
            </div>
            <div><ContactSvg /></div>
        </div>
    )
}

export default Contact
