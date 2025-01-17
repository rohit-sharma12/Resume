

const Footer = () => {
    return (
        <footer className="w-full bg-[#b5b0e0] py-5 text-black mt-32">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Rohit 2025. All rights reserved
                </p>

                <a href="mailto:rs0043071@gmail.com">
                    Thank you for reading, I hope to hear from you!
                </a>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div >
        </footer >
    )
}

export default Footer
