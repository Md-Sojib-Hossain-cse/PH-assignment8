import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../Components/ReadList/ReadList";
import WishList from "../Components/WishList/WishList";
import { Link, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const bookDetails = useLoaderData();
    return (
        <div className="mt-8 xl:mt-10">
            <div className="flex justify-center items-center h-24 w-full bg-[#1313130D] rounded-lg md:rounded-xl xl:rounded-2xl mb-4 md:mb-8">
                <h2 className="text-[#131313] text-2xl font-bold leading-6">Books</h2>
            </div>
            <div className="flex justify-center items-center mb-8 md:mb-12">
                <div className="flex justify-center items-center bg-[#23BE0A] rounded-lg relative h-12 w-36">
                    <select className="select select-bordered w-full bg-[#23BE0A] text-white max-w-xs">
                        <option disabled selected>Sort By</option>
                        <option >Rating</option>
                        <option>Number of Pages</option>
                        <option>Published Year</option>
                    </select>
                </div>
            </div>
            <div className="mb-8">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>
                    <TabPanel>
                        <ReadList bookDetails={bookDetails}></ReadList>
                    </TabPanel>
                    <TabPanel>
                        <WishList bookDetails={bookDetails}></WishList>
                    </TabPanel>
                </Tabs>
            </div>
            <div className='flex items-center justify-center'>
                <Link to="/" className="my-8 text-center px-4 py-3 rounded-lg text-white bg-[#23BE0A]">Add Books</Link>
            </div>
        </div>

    );
};

export default ListedBooks;