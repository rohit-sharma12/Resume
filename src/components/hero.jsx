import { Button } from "./ui/button"

const Hero = (props) => {

    return (
        <div id="tiltDiv" className="min-h-screen absolute mt-60 ml-10 ">
            <h1 ref={props.abc} className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none mb-6">
                <span className="text-green-500 block">FRONTEND</span>
                <span className="block text-[6vw]">DEVELOPER</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md">
                Hi I'm <span className="font-bold text-white">Tajmirul</span>. A creative Frontend
                Developer with 3+ years of experience in
                building high-performance, scalable, and
                responsive web solutions.
            </p>
            <div className="flex justify-center md:justify-start">
                <a
                    href="src/assets/resume.pdf"
                    download
                    // Ensure the anchor tag behaves like a block/inline-block element for width control
                    className="block w-full max-w-xs md:max-w-none md:w-auto"
                >
                    <Button
                        variant="outline"
                        className="rounded-xl w-full md:w-auto text-base sm:text-lg px-8 py-3 transition duration-300"
                    >
                        Resume
                    </Button>
                </a>
            </div>
        </div >

    )
}

export default Hero
