//import { Button } from "./ui/button"

const Hero = (props) => {

    return (
        <div id="tiltDiv" ref={props.abc} className="absolute mt-60 ml-10">
            <h1 className=" font-[woff] text-[8vw] uppercase">Rohit Sharma</h1>
            <h1 className=" font-[woff] text-[10vw] uppercase leading-[3vw]">Frontend Developer</h1>
        </div >

    )
}

export default Hero
