// Projects.js
import React from 'react';

const projects = [
    {
        title: 'MechaPulse - Machine Fault Detector',
        description: 'This IoT solution leverages machine learning to detect and identify machine faults based on sound analysis.',
        technologies: 'Python, OpenCV, JavaScript, Flask, Node.js, MQTT',
        link: 'https://github.com/ChalanaGayan/project-link',
    },
    {
        title: 'Train Booking System (Ongoing)',
        description: 'A Train Booking System project that enables users to search for trains, select seats, and complete bookings through a user-friendly interface.',
        technologies: 'Node.js, Express, React, MySQL',
        link: 'https://github.com/ChalanaGayan/project-link',
    },
    {
        title: 'IEEE Challenge Sphere - Website',
        description: 'A website created to showcase details about the IEEE Challenge competition.',
        technologies: 'ReactJS, GitHub Pages',
        link: 'https://chalanagayan.github.io',
    },
    {
        title: 'Banking System - DBMS',
        description: 'A Database Management System project for a banking system, featuring transaction handling, user lanes, and a user-friendly interface.',
        technologies: 'HTML/CSS/JavaScript, MySQL, React Native',
        link: 'https://github.com/ChalanaGayan/project-link',
    },
    {
        title: '4-bit Micro Processor',
        description: 'A simple processor capable of executing basic instructions, developed using the BASYS2 micro-controller.',
        technologies: 'Xilinx ISE',
        link: 'https://github.com/ChalanaGayan/project-link',
    },



];

const Projects = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
            <h2 className="text-center text-3xl font-serif font-bold mb-8">Projects</h2>
            <div className="overflow-x-auto px-4">
                <div className="flex flex-nowrap gap-8 pb-16">
                    {projects.map((project, index) => (
                        <div key={index} className="flex-none  shadow-gray-200  w-72 h-80 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
                            <h3 className="text-2xl font-serif  font-semibold mb-2 text-center">{project.title}</h3>
                            <p className="text-sm mb-4 text-center">{project.description}</p>
                            <p className="text-xs mb-2 text-center">{project.technologies}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
