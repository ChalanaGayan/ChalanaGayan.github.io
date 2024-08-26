// ExtracurricularActivities.js
import React from 'react';

const activities = [
    {
        title: 'Spark Challenge Awareness',
        organization: 'Sasnaka Sansada & ILO & CCC',
    },
    {
        title: 'Organized Blood Donation Campaign',
        date: 'October 2023',
        organization: 'Sasnaka Sansada',
    },
    {
        title: 'Manusath Project',
        organization: 'Sasnaka Sansada',
    },
    {
        title: 'Entrepreneurship TOT Workshop',
        organization: 'Sasnaka Sansada',
    },
    {
        title: 'AIESEC CS On The Map Project',
        organization: 'AIESEC CS',
    },
    {
        title: 'Member - Management Team (-1)',
        organization: 'Sasnaka Sansada',
        date: 'Ongoing',
    },
];

const ExtracurricularActivities = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white">
            <h2 className="text-center text-3xl font-bold mb-8">Extracurricular Activities</h2>
            <div className="overflow-x-auto px-4">
                <div className="flex flex-nowrap pb-6 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex-none w-64 h-80 bg-gray-800 p-6 rounded-lg shadow-lg shadow-green-200 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold mb-2 text-center">{activity.title}</h3>
                            {activity.date && <p className="text-sm text-center text-gray-400">{activity.date}</p>}
                            <p className="text-sm text-center">{activity.organization}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtracurricularActivities;
