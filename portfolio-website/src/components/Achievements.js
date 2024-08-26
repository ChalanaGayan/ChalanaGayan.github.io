// Achievements.js
import React from 'react';

const awards = [
    {
        title: '1st Runner Up - Cypher 2.0 Hackathon',
        date: 'April 2024',
        description: 'Our team placed 1st runner-up in a supervised hackathon where AI tools were prohibited.',
    },
    {
        title: 'Top 5 Winners - Mini Hackathon',
        date: 'May 2024',
        description: 'Among the top 5 winners out of 1000+ participants, recognized for performance.',
    },
    {
        title: 'IEEE Extreme - Global Hackathon',
        date: 'October 2023',
        description: 'Top 100 of Sri Lanka Ranking and Top 2500 Global Ranking.',
    },
    {
        title: 'Semi-Finalists - SLIOT Challenge',
        date: 'January 2024',
        description: 'Organized by IEEE WIE Student Branch Affinity Group of KDU in collaboration with AION Campus.',
    },
];

const Achievements = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
            <h2 className="text-center text-3xl font-bold mb-8">Achievements</h2>
            <div className="overflow-x-auto px-4">
                <div className="flex flex-nowrap gap-8 ml-24 pb-6 justify-centre">
                    {awards.map((award, index) => (
                        <div key={index} className="flex-none w-80 h-80 bg-gray-800 p-6 rounded-lg shadow-lg shadow-gray-200 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold mb-2 text-center">{award.title}</h3>
                            <p className="text-sm mb-2 text-center text-gray-400">{award.date}</p>
                            <p className="text-sm text-center">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
