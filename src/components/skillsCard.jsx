import { Avatar, AvatarImage } from "./ui/avatar";

const SkillBadge = (skills) => {
    return skills.map((skill, index) => (
        <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#1a1a2e]/70 border border-[#64FFDA40] rounded-xl p-3 sm:p-4 hover:bg-[#64FFDA15] transition-all duration-300 w-24 sm:w-28 md:w-32"
        >
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                <AvatarImage
                    variant="transparent"
                    src={`icons/${skill}.png`}
                    alt={`${skill} icon`}
                />
            </Avatar>
            <div className="text-white text-xs sm:text-sm md:text-base font-medium text-center tracking-wide">
                {skill}
            </div>
        </div>
    ));
};

const SkillsCard = (props) => {
    return (
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[30%] bg-black border border-[#64FFDA30] rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_0_#64FFDA30] backdrop-blur-md hover:shadow-[0_0_25px_2px_#64FFDA70] hover:scale-[1.03] transition-all duration-300 mt-6 sm:mt-8">
            <div className="text-2xl sm:text-3xl font-[jaune] text-center text-[#64FFDA] mb-6 tracking-wider">
                {props.title}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 place-items-center">
                {SkillBadge(props.skills)}
            </div>
        </div>
    );
};

export default SkillsCard;
