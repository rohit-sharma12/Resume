import { skillInfo } from "@/info"
import SkillsCard from "./skillsCard"

const Skills = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-between rounded-2xl bg-black">
            {skillInfo.map((skill, index) => <SkillsCard key={index} title={skill.title} skills={skill.skills} />)}
        </div>
    )
}

export default Skills
