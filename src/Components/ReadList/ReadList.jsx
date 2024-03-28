import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadList = ({bookDetails , handleSortBookList}) => {
    const [readList , setReadList] = useState([]);
    console.log(handleSortBookList)


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
    handleSortBookList : PropTypes.func,
}
export default ReadList;