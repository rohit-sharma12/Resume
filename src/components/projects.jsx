import { Button } from "./ui/button";


const items = [
    {
        id: 1,
        title: "AI Interview Assistant",
        img: "icons/AI interview.png",
        des: "This project is designed to simulate a real-world product where users can upload their resumes, analyze job descriptions, detect skill gaps, and generate AI-powered interview questions and ATS-optimized resumes.",
        github: "https://github.com/rohit-sharma12/aiResume"
    },
    {
        id: 2,
        title: "CourseHub",
        img: "icons/CourseHub.png",
        des: "A full-stack Learning Management System (LMS) built with the MERN stack that enables instructors to create and manage courses while students can browse, enroll, and access learning content. The platform includes secure authentication, role-based access control, and a responsive user interface for a seamless learning experience.",
        github: "https://github.com/rohit-sharma12/CourseHub",
    },
    {
        id: 3,
        title: "Shortify",
        img: "icons/gifhy.png",
        des: "Built a responsive GIPHY web application that allows users to search and explore GIFs and stickers in real time using the GIPHY API. The application features a clean UI, fast search functionality, and a smooth user experience built with React.",
        github: "https://github.com/rohit-sharma12/Giphy"
    },
    {
        id: 4,
        title: "Grow",
        img: "icons/Grow.png",
        des: "Grow is a job portal for job seekers and the employers. Employers can post the job and their description and the job seekers can apply for ths job. Even they can send their resume to the recruiter. Also candidate can save the jobs and track the jobs.",
        link: "https://grow-pink.vercel.app"
    },
    {
        id: 5,
        title: "Prerna's ethnic wear",
        img: "icons/prerna.png",
        des: "This is a full Stack e-commerce where you can add your items into cart based on filteration also make payment. It has the feature of deletion and addition of the items from the cart.",
        github: "https://github.com/rohit-sharma12/Prerena-shop"
    },
    {
        id: 6,
        title: "Uber",
        img: "/public/icons/uber.png",
        des: "Designed and implemented a real-time ride lifecycle system using Socket.",
        github: "https://github.com/rohit-sharma12/uber"
    },

];

const ProjectCard = ({ item }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,.15)]">

            {/* Image */}

            <div className="overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}

            <div className="p-6">

                <h2 className="text-2xl font-bold text-white">
                    {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.des}
                </p>

                {/* Tech Stack */}

                <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech?.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}

                <div className="mt-6 flex gap-3">

                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                            Live Demo
                        </Button>
                    </a>

                    <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary">
                            GitHub
                        </Button>
                    </a>

                </div>

            </div>
        </div>
    );
};
const Projects = () => {
    return (
        <section
            id="projects"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <h1 className="mb-14 text-center text-5xl font-bold text-orange-500 font-[jaune]">
                Featured Projects
            </h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {items.map((item) => (
                    <ProjectCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;



