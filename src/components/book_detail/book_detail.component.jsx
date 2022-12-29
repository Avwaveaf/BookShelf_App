import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import "./book_detail.styles.scss"
import Loader from "../Loader/loader.component";
import { UserContext } from "../../contexts/user.context";
import { DropdownContext } from "../../contexts/dropdown.context";
import GoogleIcon from "../googleIcon/googleIcon.component";

const BookDetail = () => { 
    const [bookData, setBookData] = useState({})
    const { categoriesMap } = useContext(CategoriesContext);
    const { id } = useParams();
    const {currentUser } = useContext(UserContext); 
    const {addItemToCart } = useContext(DropdownContext); 
    const navigate = useNavigate();
    const price = Math.floor((Math.random() * 30) + 10);

    
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

    const addToCartHandler = () => {
        if (currentUser) {
            addItemToCart({
                ...bookData,
                qty: 1,
                price: price
            });
        } else { 
            navigate('/sign-in')
        }
     }

    if (bookData._id) { 
        const {authors, categories, longDescription, publishedDate,status, thumbnailUrl, title, isbn   } = bookData
        const { $date } = publishedDate;
        // Create a new Date object from the date string
        const date = new Date($date);

        // Use the toLocaleDateString method to format the date
        const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        });
        return <div className="detail-page-container">
            <div className="detail-page-detail-container">
                <div className="detail-page-image-container">
                    
                <img src={thumbnailUrl} alt="" />
                </div>
                <div className="detail-page-book-data-container">
                    
                <div className="detail-page-book-status-logo-container">
                <i>{isbn}</i>
                        
                    <i><strong>{status}</strong></i>
                    </div>
                    <div>
                        <strong>Published Date:</strong>
                        <p><i>{formattedDate}</i></p>
                    </div>
                </div>
                <div>
                    <strong>Authors</strong>
                    <p>{ authors}</p>
                </div>
                
                <div>
                    <strong>Categories</strong>
                    <p>{ categories}</p>
                </div>
            </div>

            
            <div className="detail-page-description-container">
                <div className="detail-page-desc-item-container">
                    
                <h3>{title}</h3>
                <p>{ longDescription}</p>
                </div>
                <div className="addToCart-button-container">
                    
                <button onClick={addToCartHandler}>Add to Cart &nbsp; <GoogleIcon iconName='shopping_bag'/></button>
                </div>
            </div>
    </div>
    }
    return <div>
        <Loader/>
    </div>

};
export default BookDetail