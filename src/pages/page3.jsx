import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const Page3 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".rotateText", {
            transform: 'rotateX(-80deg)',
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.rotateText',
                // markers: true,
                start: 'top 60%',
                end: 'top -300%',
                scrub: 2
            }
        })
    })
    return (
        <div id='section2' className="bg-black text-white text-center p-2 uppercase">
            <div className="rotateText">
                <h1 className="text-[25vw]  font-[woff] leading-[25vw]">Passionate</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[25vw] font-[woff] leading-[25vw]">Creative</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[25vw] font-[woff] leading-[25vw]">Frontend Developer</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[25vw] font-[woff] leading-[25vw]">With latest</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[25vw] font-[woff] leading-[25vw]">tends</h1>
            </div>
            <div className="rotateText">
                <h1 className="text-[25vw] font-[woff] leading-[25vw]">In Web Development </h1>
            </div>
        </div>


    )
}

export default Page3
