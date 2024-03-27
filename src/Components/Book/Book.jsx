import PropTypes from 'prop-types';
import Tags from '../Tags/Tags';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {

    const { bookName, author, image, rating, tags, category } = book;
    return (
        <div className='p-4 md:p-6 space-y-4 md:space-y-6 border border-[#13131326] rounded-lg md:rounded-xl lg:rounded-2xl'>
            <div className='h-[240px] flex justify-center items-center bg-[#F3F3F3] rounded-lg md:rounded-xl lg:rounded-2xl'>
                <img src={image} alt="book-image" className='h-4/5'/>
            </div>
            <div>
                <div className='flex gap-3'>
                    {
                        tags.map((tag , index) => <Tags key={index} tag={tag}></Tags>)
                    }
                </div>
                <h4 className='text-[#131313] font-playfair text-2xl font-bold leading-8 mt-4'>{bookName}</h4>
                <p className='mt-4 text-[#131313CC] text-lg font-medium leading-5 pb-5'>By : {author}</p>
                <div className='pt-5 border-t border-dashed border-[#13131326] flex justify-between items-center text-[#131313CC] text-lg font-medium leading-5'>
                    <p>{category}</p>
                    <p className='flex items-center gap-2'>{rating} <FaRegStar /></p>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;