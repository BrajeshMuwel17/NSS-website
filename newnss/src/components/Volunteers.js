const VolunteerList = () => {
    return (
        <div className="p-6 pl-24 mt-10 mb-20">
            <h2 className="text-3xl font-bold mb-4">Volunteers:</h2>
            <ul className="space-y-2 text-xl">
                <li>
                    List of  
                    <a
                        href="https://example.com/current-volunteers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold cursor-pointer text-green-600 hover:underline ml-2"
                    >
                         current volunteers
                    </a>
                </li>
                <li>
                    List of  
                    <a
                        href="https://example.com/support-volunteers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold cursor-pointer text-yellow-600 hover:underline ml-2"
                    >
                         support volunteers
                    </a>
                </li>
                <li>
                    List of 
                    <a
                        href="https://example.com/past-volunteers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold cursor-pointer text-red-600 hover:underline ml-2"
                    >
                         past volunteers
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default VolunteerList;
