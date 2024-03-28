import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img src="https://i.ibb.co/RphDY9V/download-1.png" alt="error-image"/>
            <Link to="/" className="text-xl font-bold bg-gray-600 text-white px-5 py-3 rounded-lg hover:bg-gray-500">Go To Homepage</Link>
        </div>
    );
};

export default ErrorElement;