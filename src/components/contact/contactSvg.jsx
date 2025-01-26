

const ContactSvg = () => {
    return (
        <div className="h-screen relative p-3 mt-10">
            <div className="h-full w-full overflow-hidden bg-black rounded-[50px]">
                <video autoPlay='true' loop muted src="icons/contact.mp4" className="h-full w-full object-cover rounded-2xl"></video>
                <h1 className="font-[woff] text-[30vw] absolute uppercase -bottom-40 px-5">Contact</h1>
            </div>
        </div>
    )
}

export default ContactSvg
