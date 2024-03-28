import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../Components/ReadList/ReadList";
import WishList from "../Components/WishList/WishList";
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const bookDetails = useLoaderData();
    return (
        <div className="mt-8 xl:mt-10">
            <div className="flex justify-center items-center h-24 w-full bg-[#1313130D] rounded-lg md:rounded-xl xl:rounded-2xl mb-4 md:mb-8">
                <h2 className="text-[#131313] text-2xl font-bold leading-6">Books</h2>
            </div>
            <div className="flex justify-center items-center mb-8 md:mb-12">
                <div className="flex justify-center items-center bg-[#23BE0A] rounded-lg relative h-12 w-36">
                    <select name="sort" id="sort" className="text-white bg-[#23BE0A] pl-4 rounded-lg h-full w-full text-lg font-semibold leading-5 outline-none appearance-none">
                        <option disabled selected>Sort By</option>
                        <option value="a">Rating</option>
                        <option value="a">Number of Pages</option>
                        <option value="a">Published Year</option>
                    </select>
                    <IoIosArrowDown className="text-white font-bold absolute right-3" />
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
        </div>
    );
};

export default ListedBooks;