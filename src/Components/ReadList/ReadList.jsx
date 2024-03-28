import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadList = ({bookDetails}) => {
    const [readList , setReadList] = useState([]);


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
    return (
        <div className="space-y-4 lg:space-y-6 pt-8">
            {
                readList.map(readBook => <ReadBookCard key={readBook.bookId} readBook={readBook}></ReadBookCard>)
            }
        </div>
    );
};

ReadList.propTypes ={
    bookDetails : PropTypes.array,
}
export default ReadList;