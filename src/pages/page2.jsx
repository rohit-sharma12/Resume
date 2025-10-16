const Page2 = () => {
    return (
        <div className="min-h-screen relative p-2 sm:p-4 md:p-6 lg:p-8">
            <div className="h-full w-full overflow-hidden bg-black rounded-[25px] sm:rounded-[35px] md:rounded-[50px] relative">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    src="icons/video.mp4"
                    className="h-full w-full object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
                />

                {/* Overlay Text */}
                <h1
                    className="absolute left-1/4 transform -translate-x-1/2 text-white font-[woff] uppercase tracking-wide
            text-[15vw] bottom-1 px-2
            sm:text-[10vw] sm:bottom-4
            md:text-[10vw] md:bottom-6
            lg:text-[6vw] lg:bottom-8
            xl:text-[4vw]"
                >
                    About
                </h1>
            </div>
        </div>
    );
};

export default Page2;

