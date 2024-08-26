import React from 'react';
import { ReactTyped } from 'react-typed';
import './Home.css'; // Import the custom CSS file for additional styling

const Home = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: 'url(/89781.jpg)' }}>
            <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 p-4 z-20">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My Portfolio</h1>
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="relative flex flex-col items-center justify-center min-h-screen pt-16 z-10">
                <div className="relative flex items-center animate-fadeIn -mt-20">
                    <img
                        src="/Images/IMG_3526 2.jpg"
                        alt="Chalana Gayan"
                        className="w-72 h-72 rounded-full border-4 border-gray-700 transform -translate-x-4"
                    />
                    <div className="text-start ml-8">
                        <h1 className="text-9xl">Chalana Gayan</h1>
                        <h2 className="text-9xl font-bold">Dhanawardhana</h2>

                        <ReactTyped
                            strings={['Undergraduate', 'Leader', 'Developer', 'Volunteer']}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1000}
                            loop
                            className="text-8xl font-thin mt-4"
                        />
                    </div>
                </div>
                <div className="absolute bottom-2 right-3 text-end">
                    <p className="text-2xl">Computer Science & Engineering Undergraduate</p>
                    <p className="text-2xl">University Of Moratuwa</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
