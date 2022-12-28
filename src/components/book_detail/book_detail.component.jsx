import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";

import Loader from "../Loader/loader.component";

const BookDetail = () => { 
    const [bookData, setBookData] = useState({})
    const { categoriesMap } = useContext(CategoriesContext);
    const { id } = useParams();
    
    useEffect(() => {
        // setBookData(() => {
            // const data = books.filter(({ _id }) => _id === Number(id))
            // setBookData(data.shift())
       Object.keys(categoriesMap).map(title => {
            const data = categoriesMap[title].filter(item => item._id === Number(id))
            if (data.length) { 
                const bookDetail = data.shift();
                setBookData(bookDetail);
            }
       });
        //  })
    }, [categoriesMap, id]);
    if (bookData._id) { 
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
        <Loader/>
    </div>

};
export default BookDetail