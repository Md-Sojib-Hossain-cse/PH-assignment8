import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadList = ({bookDetails , sortBy}) => {
    const [readList , setReadList] = useState([]);

    if(sortBy === "rating"){
        readList.sort(
            (a, b) => {
                return a.rating - b.rating;
            }
        )
        readList.reverse
    }
    else if(sortBy === "totalPages"){
        readList.sort(
            (a, b) => {
                return a.totalPages - b.totalPages;
            }
        )
        readList.reverse
    }
    else if(sortBy === "yearOfPublishing"){
        readList.sort(
            (a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing;
            }
        )
        readList.reverse
    }


    useEffect(() => {
        const stringifiedReadList = localStorage.getItem('readList');
        const readlist = JSON.parse(stringifiedReadList);
        const updatedReadList = [];
        readlist.map(readBooks => {
            bookDetails.filter(book => {
                if(readBooks === book.bookId){
                    updatedReadList.push(book);
                }
            })
            setReadList(updatedReadList);
        })
    } , [bookDetails]);

    if(readList.length > 0){
        return (
            <div className="space-y-4 lg:space-y-6 pt-8">
                {
                    readList.map(readBook => <ReadBookCard key={readBook.bookId} readBook={readBook}></ReadBookCard>)
                }
            </div>
        );
    }
};

ReadList.propTypes ={
    bookDetails : PropTypes.array,
    sortBy : PropTypes.string,
}
export default ReadList;