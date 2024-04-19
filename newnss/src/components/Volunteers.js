
const VolunteerList = () => {
    return (
        <div>
        <div className="bg-white p-6 pl-24 mt-10 mb-20">
            <h2 className="text-2xl font-bold mb-4">Volunteers:</h2>
            <ul className="space-y-2">
                <li>
                    List of 
                    <a
                        href="https://example.com/current-volunteers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold cursor-pointer text-green-600 hover:underline"
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
                        className="font-semibold cursor-pointer text-yellow-600 hover:underline"
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
                        className="font-semibold cursor-pointer text-red-600 hover:underline"
                    >
                        past volunteers
                    </a>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default VolunteerList;