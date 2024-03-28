import Book from "../Book/Book";
import PropTypes from 'prop-types'

const Books = ({books}) => {
    const allBooks = books;
    return (
        <div className="my-8 md:my-12 lg:my-16 xl:my-24">
            <h3 className="text-[#131313] font-playfair text-4xl font-bold text-center mb-5 md:mb-7 lg:mb-9 xl:mb-10">Books</h3>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </section>
        </div>
    );
};

Books.propTypes = {
    books : PropTypes.array,
}

export default Books;