import { Avatar, AvatarImage } from "./ui/avatar"

const SkillBadge = (skills) => {
    return skills.map((skill, index) => <div key={index} className="flex gap-2 p-3 border items-center md-flex ">
        <Avatar>
            <AvatarImage variant="transparent" src={`icons/${skill}.png`} />
        </Avatar>
        <div className="text-white text-xl">{skill}</div>
    </div>)

}
const SkillsCard = (props) => {
    return (
        <div className="w-[49%] shadow-[0_0_10px_0_#64FFDA80] rounded-2xl border border-purple-800 p-5 mt-12">
            <div className="text-3xl text-center font-[jaune]">{props.title}</div>

            <div className="flex flex-wrap gap-3 justify-center mt-5">
                {SkillBadge(props.skills)}
            </div>
        </div>
    )
}

export default SkillsCard
