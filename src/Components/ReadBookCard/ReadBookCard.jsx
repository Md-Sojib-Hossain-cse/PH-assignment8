import PropTypes from "prop-types";
import Tags from "../Tags/Tags";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { PiNoteDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const ReadBookCard = ({ readBook }) => {
    const {bookId , image, bookName, author, tags, yearOfPublishing, publisher, rating, category, totalPages } = readBook;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 border border-[#13131326] rounded-lg lg:rounded-xl xl:rounded-2xl p-4 lg:p-6">
            <div className="flex justify-center items-center bg-[#1313130D] rounded-lg lg:rounded-xl xl:rounded-2xl">
                <img src={image} alt="" className="h-42 w-32" />
            </div>
            <div className="lg:col-span-3">
                <div className="space-y-4">
                    <h3 className="text-[#131313] font-playfair text-2xl font-bold leading-7">{bookName}</h3>
                    <p className="text-[#131313CC] text-base font-medium leading-5">By : {author}</p>
                    <div className='flex gap-3 lg:gap-5 items-center'>
                        <p className="text-[#131313] text-base font-bold leading-6">Tag</p>
                        {
                            tags.map((tag, index) => <Tags key={index} tag={tag}></Tags>)
                        }
                        <div className="flex gap-1 items-center text-[#131313CC] text-base font-normal leading-5"><IoLocationOutline /> <p>Year of Publishing : {yearOfPublishing}</p></div>
                    </div>
                    <div className="text-[#13131399] text-base font-normal leading-5 flex gap-4 pb-4">
                        <div className="flex gap-1 items-center"><GoPeople /> <p>Publisher : {publisher}</p> </div>
                        <div className="flex gap-1 items-center"><PiNoteDuotone /><p>Pages : {totalPages}</p> </div>
                    </div>
                </div>
                <div className="pt-4 border-t border-[#13131326] flex gap-3 items-center">
                    <p className='text-[#328EFF] text-base font-medium leading-5 px-4 py-2 bg-[#328EFF26] rounded-3xl'>Category : {category}</p>
                    <p className='text-[#FFAC33] text-base font-medium leading-5 px-4 py-2 bg-[#FFAC3326] rounded-3xl'>Rating : {rating}</p>
                    <Link to={`/book-details/${bookId}`}><button className='text-white text-base font-medium leading-5 px-4 py-2 bg-[#23BE0A] rounded-3xl'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBookCard.propTypes = {
    readBook: PropTypes.object,
}

export default ReadBookCard;