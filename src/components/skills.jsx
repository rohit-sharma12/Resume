import { skillInfo } from "@/info"
import SkillsCard from "./skillsCard"

const Skills = () => {
    return (
        <div className="w-full flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-between rounded-2xl bg-black px-4 sm:px-6 py-8">
            {skillInfo.map((skill, index) => (
                <SkillsCard key={index} title={skill.title} skills={skill.skills} />
            ))}
        </div>
    )
}

export default Skills
