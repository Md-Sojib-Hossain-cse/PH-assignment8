import { Link, useLoaderData } from "react-router-dom";
import AuthorCards from "../Components/AuthorCards/AuthorCards";

const Authors = () => {
    const authorsData = useLoaderData();
    return (
        <div className="mt-8 lg:mt-10">
            <h3 className="text-3xl text-black font-bold text-center">Our Popular Authors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
                {
                    authorsData.map((authorData , index) => <AuthorCards  key={index} authorData={authorData}></AuthorCards>)
                }
            </div>
            <div className="mt-12 flex items-center justify-center">
                <Link to="/" className="px-4 py-3 rounded-lg  bg-[#23BE0A] text-white font-bold mb-12">Go to Home</Link>
            </div>
        </div>
    );
};

export default Authors;