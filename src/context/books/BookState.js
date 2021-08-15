import { useReducer } from "react";
import BookReducer from "./bookReducer";
import BookContext from "./bookContext";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_BOOK,
  GET_BOOK,
  SHOW_ADD_FORM,
  DELETE_BOOK,
  SET_CURRENT,
  ClEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER,
} from "../actionTypes";

const BookState = (props) => {
  const initialState = {
    books: null,
    current: null,
    filtered: null,
    error: null,
    showAdd: false,
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);
  // GET BOOKS
  const getBooks = () => {
    const books = JSON.parse(localStorage.getItem("books"));
    dispatch({
      type: GET_BOOK,
      payload: books,
    });
  };
  // Add BOOK
  const addBook = (book) => {
    book.id = uuidv4();
    state.books !== null
      ? localStorage.setItem("books", JSON.stringify([...state.books, book]))
      : localStorage.setItem("books", JSON.stringify([book]));
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  };
  // Update BOOK
  const updateBook = async (book) => {
    const books = state.books.map((bookitem) =>
      bookitem.id === book.id ? book : bookitem
    );
    localStorage.setItem("books", JSON.stringify(books));
    dispatch({
      type: UPDATE_BOOK,
      payload: book,
    });
  };
  // Delete BOOK
  const deleteBook = (id) => {
    const books = state.books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
    dispatch({ type: DELETE_BOOK, payload: id });
  };
  // Filter Books
  const filterBooks = (text) => {
    if(state.books !== null){
      dispatch({ type: FILTER_BOOKS, payload: text });
    }
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // Set Current book
  const setCurrent = (book) => {
    dispatch({ type: SET_CURRENT, payload: book });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: ClEAR_CURRENT });
  };
  const showAddBookForm = () => {
    dispatch({ type: SHOW_ADD_FORM });
  };

  return (
    <BookContext.Provider
      value={{
        showAdd: state.showAdd,
        books: state.books,
        current: state.current,
        filtered: state.filtered,
        showAddBookForm,
        addBook,
        getBooks,
        deleteBook,
        setCurrent,
        clearCurrent,
        updateBook,
        filterBooks,
        clearFilter,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
