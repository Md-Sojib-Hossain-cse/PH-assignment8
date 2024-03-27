import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../Components/Tags/Tags";

const BookDetails = () => {
    const books = useLoaderData();
    const searchedBook = useParams();
    const searchedBookInt = parseInt(searchedBook.bookId);


    const currentBook = books.find(book => {
        if (book.bookId === searchedBookInt) {
            return book;
        }
    })

    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = currentBook;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-8 xl:mt-10 mb-16 xl:mb-24">
            <div className="bg-[#1313130D] rounded-lg lg:rounded-xl xl:rounded-2xl flex justify-center items-center">
                <img src={image} alt="book-image" className="w-4/5 h-4/5" />
            </div>
            <div>
                <h2 className="text-[#131313] font-playfair text-4xl font-bold leading-10">{bookName}</h2>
                <p className="text-[#131313CC] text-xl font-medium leading-5 mt-5 pb-5">By : {author}</p>
                <p className="text-[#131313CC] text-xl font-medium leading-5 py-4 border-y border-[#13131326]">{category}</p>
                <p className="mt-4 md:mt-6 mb-8 md:mb-12 text-[#131313] text-lg leading-6 font-normal"><span className="font-bold text-[#131313]">Review :</span> {review}</p>
                <div className="flex gap-4 items-center pb-5">
                    <p className="text-[#131313] text-base font-bold leading6">Tag</p>
                    {
                        tags.map((tag, index) => <Tags key={index} tag={tag}></Tags>)
                    }
                </div>
                <div className="pt-6 border-t border-[#13131326] space-y-3">
                    <div className="flex gap-6">
                        <p className="w-2/5 text-[#131313B3] text-base font-normal leading-6">Number of Pages :</p>
                        <span className="text-[#131313] text-base font-semibold leading-6">{totalPages}</span>
                    </div>
                    <div className="flex gap-6">
                        <p className="w-2/5 text-[#131313B3] text-base font-normal leading-6">Publisher :</p>
                        <span className="text-[#131313] text-base font-semibold leading-6">{publisher}</span>
                    </div>
                    <div className="flex gap-6">
                        <p className="w-2/5 text-[#131313B3] text-base font-normal leading-6">Year of Publishing: :</p>
                        <span className="text-[#131313] text-base font-semibold leading-6">{yearOfPublishing}</span>
                    </div>
                    <div className="flex gap-6">
                        <p className="w-2/5 text-[#131313B3] text-base font-normal leading-6">Rating: :</p>
                        <span className="text-[#131313] text-base font-semibold leading-6">{rating}</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="btn text-[#131313] bg-transparent rounded-lg mt-6 md:mt-8 lg:mt-10 xl:mt-12 border border--[#1313134D]">
                        <a to='/listed-books'>Read</a>
                    </button>
                    <button className="btn text-white bg-[#50B1C9] rounded-lg mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        <a to='/listed-books'>Wishlist</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;