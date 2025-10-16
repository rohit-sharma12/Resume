

const ContactSvg = () => {
    return (
        <div className="hidden md:block relative p-3 h-[400px] lg:h-screen">
            <div className="h-full w-full overflow-hidden bg-black rounded-[25px] lg:rounded-[50px]">
                <video autoPlay='true' loop muted src="icons/contact.mp4" className="h-full w-full object-cover rounded-xl lg:rounded-2xl"></video>
            </div>
        </div>
    )
}

export default ContactSvg
