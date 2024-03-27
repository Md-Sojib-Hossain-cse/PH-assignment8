import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div className="mt-8 xl:mt-10">
            <div className="flex justify-center items-center h-24 w-full bg-[#1313130D] rounded-lg md:rounded-xl xl:rounded-2xl mb-4 md:mb-8">
                <h2 className="text-[#131313] text-2xl font-bold leading-6">Books</h2>
            </div>
            <div className="flex justify-center items-center mb-8 md:mb-12">
                <div className="flex justify-center items-center bg-[#23BE0A] rounded-lg relative h-12 w-36">
                    <select name="sort" id="sort" className="text-white bg-[#23BE0A] pl-4 rounded-lg h-full w-full text-lg font-semibold leading-5 appearance-none">
                        <option disabled selected>Sort By</option>
                        <option value="a">b</option>
                        <option value="a">c</option>
                    </select>
                    <IoIosArrowDown className="text-white font-bold absolute right-3" />
                </div>
            </div>
            <div className="flex items-center w-full sm:justify-start mb-8">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600">
                    <span>Read Books</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600">
                    <span>Wishlist Books</span>
                </a>
                <a className="grow border-b border-gray-600 px-5 py-6"></a>
            </div>
        </div>
    );
};

export default ListedBooks;