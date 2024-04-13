import React, { useState } from 'react';

const Activities = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = [
        'All',
        'Cleanliness',
        'Donations',
        'Teaching',
        'Welfare',
        'Awareness',
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Define content for each tab
    const tabContents = {
        'All': 'All activities content',
        'Cleanliness': 'Cleanliness activities content',
        'Donations': 'Donations activities content',
        'Teaching': 'Teaching activities content',
        'Welfare': 'Welfare activities content',
        'Awareness': 'Awareness activities content',
    };

    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Activities</h2>
            <p className="text-gray-600 mb-6">
                Below are a few activities performed by NSS cell of IIT Guwahati over the
                past weeks.
            </p>
            <div className="flex justify-center mb-6 border-2 rounded-full bg-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 mr-2 mt-1 mb-1 rounded-full transition-colors duration-300 ${activeTab === tab
                            ? 'bg-white text-gray-600 shadow-md'
                            : 'bg-gray-200 text-gray-500 hover:bg-gray-200 hover:shadow-md'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {/* Show content based on active tab */}
            <div className="text-center">
                {tabContents[activeTab]}
            </div>
        </div>
    );
};

export default Activities;
