import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Hero from "@/components/hero";

const Page1 = () => {
    const tiltRef = useRef(null);
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0)

    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 10)
        setYVal((-e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 15)

        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    }

    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 2,
            ease: 'power4.out'
        })
    }, [xVal, yVal])

    return (
        <div id='page1' onMouseMove={(e) => {

            mouseMoving(e)
        }} className="h-screen p-4">
            <div id='page1-in' className="relative shadow-lg bg-black h-full w-full rounded-2xl">

                <Hero abc={tiltRef} />
            </div>
        </div>
    )
}

export default Page1