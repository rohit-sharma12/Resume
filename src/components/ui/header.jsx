import Sidebar from "@/sidebar/sidebar"

const Header = () => {
    return (
        <div className="absolute w-full flex items-center justify-end py-10 px-10 z-10">
            <Sidebar />

            <div className="p-2 flex gap-5 -mt-4">
                <a href="https://github.com/rohit-sharma12"><img className="w-10" src="/icons/Github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/rohit-sharma-917017309/"><img className="w-10" src="/icons/linkedin.png" alt="" /></a>
                <a href="mailto:rs0043071@gmail.com"><img className="w-10" src="/icons/communication.png" alt="" /></a>
            </div>

        </div>
    )
}

export default Header