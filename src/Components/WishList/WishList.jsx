import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const WishList = ({bookDetails}) => {
    const [wishList , setWishList] = useState([]);


    useEffect(() => {
        const stringifiedWishList = localStorage.getItem('wishlist');
        const lsWishList = JSON.parse(stringifiedWishList);
        const updatedWishList = [];
        lsWishList.map(wishBooks => {
            bookDetails.filter(book => {
                if(wishBooks === book.bookId){
                    updatedWishList.push(book);
                }
            })
            setWishList(updatedWishList);
        })
    } , [bookDetails]);
    return (
        <div className="space-y-4 lg:space-y-6 pt-8">
            {
                wishList.map(readBook => <ReadBookCard key={readBook.bookId} readBook={readBook}></ReadBookCard>)
            }
        </div>
    );
};

WishList.propTypes ={
    bookDetails : PropTypes.array,
}

export default WishList;