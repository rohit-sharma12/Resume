import React from 'react';

const HomePage = () => {
    return (
        // Added overflow-hidden to main div to handle any accidental horizontal scrolling
        <div className="min-h-screen bg-black text-white relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">

            {/* Background stars/dots effect */}
            <div className="absolute inset-0 bg-repeat opacity-20"
                style={{ backgroundImage: 'radial-gradient(#ffffff33 2px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Left Section: Title, Intro, Button, Email */}
                {/* Reduced padding-y for small devices (py-12 default, py-20 for md+) */}
                <div className="md:col-span-7 flex flex-col justify-center py-12 mt-4 md:py-20">
                    {/* Adjusted default text size for mobile (text-5xl default) */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                        <span className="text-orange-500 block">FRONTEND</span>
                        <span className="block">DEVELOPER</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300 max-w-md mb-5">
                        Hi! I'm **Rohit**. A Frontend Developer with hands-on experience through building high-performance, scalable, and responsive web solutions.
                    </p>

                    <a
                        href="/src/assets/resume.pdf"
                        className="w-48 py-3 px-6 text-center text-lg font-semibold bg-orange-600 hover:bg-orange-700 transition duration-300 rounded shadow-lg uppercase tracking-wider"
                    >
                        RESUME
                    </a>

                    {/* Email Address: Still hidden on smaller screens, appears only on lg+ */}
                    <div className="absolute bottom-0 left-0 transform -rotate-90 origin-bottom-left text-gray-500 text-sm tracking-widest pointer-events-none hidden lg:block">
                        iknevodev@gmail.com
                    </div>
                </div>

                {/* Right Section: Code Snippet & Scroll Down */}
                {/* Resetting alignment for small screens (no items-end) */}
                <div className="md:col-span-5 flex flex-col md:justify-end md:items-end py-12 md:py-20 relative">

                    {/* Code Snippet Text. Align to left on all screens now. */}
                    <div className="text-left max-w-sm w-full md:ml-auto text-gray-400 font-mono text-sm space-y-2">
                        <p className="text-orange-500">&lt;span&gt;</p>
                        <p className="pl-4 text-gray-300">
                            Proficient in the latest web technologies and frameworks, continuously expanding my skill set to stay at the forefront of the industry.
                        </p>
                        <p className="text-orange-500">&lt;/span&gt;</p>
                    </div>

                    {/* Scroll Down Arrow: Hidden on small devices (sm:hidden) */}
                    <button
                        aria-label="Scroll Down"
                        className="absolute bottom-16 right-0 w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300 hidden md:flex"
                    // Only show on medium devices and up (md:flex)
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator Bar (Optional) */}
            <div className="absolute right-0 top-0 h-full w-0.5 bg-gray-700 hidden sm:block">
                <div className="w-full h-1/4 bg-orange-500"></div>
            </div>
        </div>
    );
};

export default HomePage;