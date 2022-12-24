import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../contexts/books.context";

const BookDetail = () => { 
    const [bookData, setBookData] = useState({})
    const { books } = useContext(BooksContext);
    const { id } = useParams();
    useEffect(() => {
        setBookData(() => {
            const data = books.filter(({ _id }) => _id === Number(id))
            setBookData(data.shift())
         })
    }, [])
    if (bookData) { 
        const {authors, categories, longDescription, publishedDate,status, thumbnailUrl, title, isbn   } = bookData

        return <div>
            <img src={thumbnailUrl} alt="" />
            <div>
                <i>{ isbn}</i>
            <i><strong>{status }</strong></i>
            </div>
            <div>
                <strong>Authors</strong>
                <p>{ authors}</p>
            </div>
            
            <div>
                <strong>Categories</strong>
                <p>{ categories}</p>
            </div>
            
        <div>
                <h3>{title}</h3>
                <p>{ longDescription}</p>
        </div>
    </div>
    }
    return <div>
        Loading...
    </div>

};
export default BookDetail