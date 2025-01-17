
const Page2 = () => {
    return (
        <div className="h-full relative p-3 bg-white">
            <div className="h-full w-full overflow-hidden bg-black rounded-[50px]">
                <video autoPlay='true' loop muted src="/src/assets/video.mp4" className="h-full w-full object-cover rounded-2xl"></video>
                <h1 className="font-[woff] text-[30vw] absolute uppercase -bottom-20 px-5">About</h1>
            </div>
        </div>
    )
}

export default Page2
