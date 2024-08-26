import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaSwift } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiOpencv, SiPandas, SiMongodb, SiJavascript } from 'react-icons/si';

const skills = {
    WebDevelopment: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-700" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
        { name: 'HTML/CSS', icon: <SiJavascript className="text-orange-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'TypeScript (Beginner)', icon: <SiTypescript className="text-blue-500" /> },
    ],
    MobileAppDevelopment: [
        { name: 'Swift (Beginner)', icon: <FaSwift className="text-orange-500" /> },
        { name: 'React Native', icon: <FaReact className="text-blue-500" /> },
    ],
    MachineLearning: [
        { name: 'OpenCV', icon: <SiOpencv className="text-blue-600" /> },
        { name: 'Pandas', icon: <SiPandas className="text-green-500" /> },
    ],
    ProgrammingLanguages: [
        { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
        { name: 'C++', icon: <SiJavascript className="text-blue-700" /> },
        { name: 'Java', icon: <SiJavascript className="text-red-500" /> },
    ],
    Database: [
        { name: 'MySQL', icon: <SiJavascript className="text-blue-600" /> },
        { name: 'MongoDB (Beginner)', icon: <SiMongodb className="text-green-600" /> },
    ],
    Container: [
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    ],
    VersionControl: [
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    ],
};

const Skills = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
            <h2 className="text-center text-3xl font-serif font-bold mb-8">Skills</h2>
            <div className="overflow-x-auto px-4">
                <div className="flex flex-nowrap pb-6 gap-8">
                    {Object.keys(skills).map((category) => (
                        <div key={category} className="flex-none font-serif w-48 h-full bg-gray-800 p-6 rounded-lg shadow-lg shadow-gray-200 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold mb-4 text-center">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <div className="flex flex-col items-center">
                                {skills[category].map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center mb-4">
                                        <div className="text-4xl mb-2">{skill.icon}</div>
                                        <p className="text-sm text-center">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
