import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WishBookCard from "../WishBookCard/WishBookCard";

const WishList = ({ bookDetails }) => {
    const [wishList, setWishList] = useState([]);


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

    if(wishList.length > 0){
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
}

export default WishList;