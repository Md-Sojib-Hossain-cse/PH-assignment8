import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ListedBooksError = () => {
    return (
        <div>
            <div className="mt-8 xl:mt-10">
                <div className="flex justify-center items-center h-24 w-full bg-[#1313130D] rounded-lg md:rounded-xl xl:rounded-2xl mb-4 md:mb-8">
                    <h2 className="text-[#131313] text-2xl font-bold leading-6">Books</h2>
                </div>
                <div className="flex justify-center items-center mb-8 md:mb-12">
                    <div className="flex justify-center items-center bg-[#23BE0A] rounded-lg relative h-12 w-36">
                        <select className="select select-bordered w-full bg-[#23BE0A] text-white max-w-xs">
                            <option disabled selected>Sort By</option>
                            <option>Rating</option>
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
                            <h4 className="text-xl font-semibold mt-6 text-center">NO items added in ReadList</h4>
                        </TabPanel>
                        <TabPanel>
                            <h4 className="text-xl font-semibold mt-6 text-center">NO items added in Wishlist</h4>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className='flex items-center justify-center'>
                    <Link to="/" className="my-8 text-center px-4 py-3 rounded-lg text-white bg-[#23BE0A]">Add Books</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksError;