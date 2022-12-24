import { createContext, useState } from "react";
import BOOKS from "../books-data.json"

export const BooksContext = createContext({
    books:[]
});

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState(BOOKS);
    const value = {books, setBooks}
    return <BooksContext.Provider value={value}>{ children}</BooksContext.Provider>
}