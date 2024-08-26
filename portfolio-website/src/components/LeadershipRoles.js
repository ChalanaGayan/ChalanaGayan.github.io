// LeadershipRoles.js
import React from 'react';

const roles = [
    {
        title: 'Department Representative - Department of Computer Science and Engineering',
        date: '2023-2024',
    },
    {
        title: 'Leader - Membership HR Team - Sasnaka Sansada',
        date: '2024-Ongoing',
    },
    {
        title: 'District Coordinator - Sasnaka Sansada',
        date: '2022-2023',
    },
    {
        title: 'Team Leader - IGV - AIESEC CS',
        date: '2022-2023',
    },
    {
        title: 'Senior Prefect - R/Sivali Central College',
        date: '2017-2028',
    },
];

const LeadershipRoles = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
            <h2 className="text-center text-3xl font-bold mb-8">Leadership Roles</h2>
            <div className="overflow-x-auto px-4">
                <div className="flex flex-nowrap pb-6 gap-8">
                    {roles.map((role, index) => (
                        <div key={index} className="flex-none w-72 h-80 bg-gray-800 p-6 rounded-lg shadow-gray-200 shadow-lg flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold mb-2 text-center">{role.title}</h3>
                            <p className="text-sm text-center text-gray-400">{role.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipRoles;
