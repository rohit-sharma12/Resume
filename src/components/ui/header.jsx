import Sidebar from "@/sidebar/sidebar"
import { Button } from "./button"
const Header = () => {
    return (
        <div className="absolute w-full flex items-center justify-end py-10 px-10 z-10">
            <Sidebar />

            <div className="px-4 p-2 flex gap-5">
                <a href="/src/assets/resume.pdf" download> <Button variant='outline' className="rounded-2xl hover:shadow-[0_0_30px_0_#64FFDA80] font-[wlpsgx] text-2xl">Resume</Button></a>
                <a href="https://github.com/rohit-sharma12"><img className="w-8" src="/icons/Github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/rohit-sharma-917017309/"><img className="w-8" src="/icons/linkedin.png" alt="" /></a>
                <a href="mailto:rs0043071@gmail.com"><img className="w-8" src="/icons/communication.png" alt="" /></a>
            </div>

        </div>
    )
}

export default Header
