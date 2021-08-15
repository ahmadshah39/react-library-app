import React, { useState, useContext, useEffect,  } from "react";
import BookContext from "../context/books/bookContext";
function AddBookForm() {
  const bookContext = useContext(BookContext);
  const { addBook, current, showAddBookForm, updateBook } = bookContext;
  useEffect(() => {
    if (current !== null) {
      setBook(current);
    } else {
      setBook({
        title: "",
        author: "",
        isbn: "",
      });
    }
  }, [bookContext, current]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
  });
  const { title, author, isbn } = book;
  const onChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null) {
      updateBook(book);
    } else {
      addBook(book);
    }
    setBook({
      title: "",
      author: "",
      isbn: "",
    });
    showAddBookForm();
  };

  const onClick=(e)=>{
      showAddBookForm();    
  }

  return (
    <div  className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-40 grid justify-items-center items-center"  onClick ={onClick} >
    <div className="bg-white px-4 max-w-sm z-10 py-4 rounded-xl shadow-md" onClick = {(event) => event.stopPropagation()}>
      <div className="flex justify-between">
        <h1 className="text-3xl text-left font-bold text-brand-dark-brown my-5 ">
          {current !== null ? "UPDATE BOOK" : "ADD BOOK"}
        </h1>
        <i className="fas fa-plus right"></i>
      </div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          className="px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black"
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Title..."
        />
        <input
          onChange={onChange}
          value={author}
          className="px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black"
          type="text"
          name="author"
          id="author"
          placeholder="Author..."
        />
        <input
          onChange={onChange}
          className="px-4 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black"
          type="text"
          value={isbn}
          name="isbn"
          id="isbn"
          placeholder="ISBN #"
        />

        <input
          onChange={onChange}
          className="px-4 py-1 mb-4 bg-brand-dark-brown text-white font-bold text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark-brown  border-2 w-full border-black"
          type="submit"
          name="submit"
          id="submit"
          value={current !== null ? "UPDATE BOOK" : "ADD BOOK"}
          placeholder="ISBN #"
        />
      </form>
    </div>
    </div>
  );
}

export default AddBookForm;
