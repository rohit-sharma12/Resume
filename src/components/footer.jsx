const Footer = () => {
    return (
        <footer className="w-full bg-[#b5b0e0] text-black mt-32 py-6 sm:py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-8 text-center md:text-left">

                <p className="text-sm sm:text-base font-light">
                    © Rohit 2025. All rights reserved.
                </p>

                <a
                    href="mailto:rs0043071@gmail.com"
                    className="text-sm sm:text-base font-medium hover:text-[#3a2db3] transition-colors duration-200"
                >
                    Thank you for reading — I’d love to hear from you!
                </a>

                <a
                    href="#privacy-policy"
                    className="text-sm sm:text-base font-light hover:underline hover:text-[#3a2db3] transition-colors duration-200"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
