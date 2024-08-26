import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ isLoading, children }) => {
    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        } else {
            const timer = setTimeout(() => setLoading(false), 1000); // Optional delay
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <p className="ml-4 text-lg text-white">Loading...</p>
            </div>
        );
    }

    return <>{children}</>;
};

export default LoadingScreen;
