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
const bookReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ADD_FORM: {
      return {
        ...state,
        showAdd: !state.showAdd,
      };
    }
    case GET_BOOK: {
      return {
        ...state,
        books: action.payload,
      };
    }
    case ADD_BOOK: {
      return {
        ...state,
        books:
          state.books !== null
            ? [...state.books, action.payload]
            : [action.payload],
      };
    }
    case UPDATE_BOOK: {
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    }
    case DELETE_BOOK: {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    }
    case SET_CURRENT: {
      return {
        ...state,
        current: action.payload,
      };
    }
    case ClEAR_CURRENT: {
      return {
        ...state,
        current: null,
      };
    }
    case FILTER_BOOKS: {
      return {
        ...state,
        filtered: state.books.filter((book) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            book.title.match(regex) ||
            book.author.match(regex) ||
            book.isbn.match(regex)
          );
        }),
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        filtered: null,
      };
    }

    default:
      return state;
  }
};
export default bookReducer;
