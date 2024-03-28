import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WishBookCard from "../WishBookCard/WishBookCard";

const WishList = ({ bookDetails, sortBy }) => {
    const [wishList, setWishList] = useState([]);

    if (sortBy === "rating") {
        wishList.sort(
            (a, b) => {
                return a.rating - b.rating;
            }
        )
        wishList.reverse
    }
    else if (sortBy === "totalPages") {
        wishList.sort(
            (a, b) => {
                return a.totalPages - b.totalPages;
            }
        )
        wishList.reverse
    }
    else if (sortBy === "yearOfPublishing") {
        wishList.sort(
            (a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing;
            }
        )
        wishList.reverse
    }


    useEffect(() => {
        const stringifiedWishList = localStorage.getItem('wishlist');
        const lsWishList = JSON.parse(stringifiedWishList);
        const updatedWishList = [];
        lsWishList.map(wishBooks => {
            bookDetails.filter(book => {
                if (wishBooks === book.bookId) {
                    updatedWishList.push(book);
                }
            })
            setWishList(updatedWishList);
        })
    }, [bookDetails]);

    if (wishList.length > 0) {
        return (
            <div className="space-y-4 lg:space-y-6 pt-8">
                {
                    wishList.map(wishbook => <WishBookCard key={wishbook.bookId} wishbook={wishbook}></WishBookCard>)
                }
            </div>
        );
    }
};

WishList.propTypes = {
    bookDetails: PropTypes.array,
    sortBy: PropTypes.string,
}

export default WishList;