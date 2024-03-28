import PropTypes from "prop-types";

const TopBooks = ({ book }) => {
    const { title, author, genre, description, price, publisher, cover_image } = book;
    return (
        <div className="border rounded-lg lg:rounded-xl p-4 lg:p-6 grid lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-gray-100 rounded-lg lg:rounded-xl flex justify-center items-center py-6">
                <img src={cover_image} alt="book-image" className="h-32" />
            </div>
            <div className="lg:col-span-3 space-y-3">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-lg font-medium">By : {author}</p>
                <p className="text-base font-normal">{description}</p>
                <div className="flex justify-between text-lg font-normal">
                    <p>Genre : {genre}</p>
                    <p>Publisher : {publisher}</p>
                </div>
                <button className="text-lg font-semibold mt-2 px-3 py-2 rounded-lg bg-[#23BE0A] text-white">Price : ${price}</button>
            </div>
        </div>
    );
};

TopBooks.propTypes = {
    book: PropTypes.object,
}

export default TopBooks;