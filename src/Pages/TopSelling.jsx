import { useLoaderData } from "react-router-dom";
import TopBooks from "../Components/TopBooks/TopBooks";

const TopSelling = () => {
    const topSellingBooks = useLoaderData();
    console.log(topSellingBooks)
    return (
        <div>
            <h3 className="text-3xl font-bold text-[#131313] my-8 text-center">Our Top Selling Books</h3>
            <div className="flex flex-col gap-4 md:gap-6">
                {
                    topSellingBooks.map((book , index) => <TopBooks key={index} book={book}></TopBooks>)
                }
            </div>
        </div>
    );
};

export default TopSelling;