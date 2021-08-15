import React, { useContext } from "react";
import BookContext from "../context/books/bookContext";
function TableRow({ book }) {
  const bookContext = useContext(BookContext);
  const { deleteBook, setCurrent, showAddBookForm, showAdd } = bookContext;
  const { id, title, author, isbn } = book;
  const editBook = () => {
    setCurrent(book);
    !showAdd && showAddBookForm();
  };
  const onDelete = () => {
    deleteBook(id);
  };
  return (
    <>
      <td className="px-2 py-1">{title}</td>
      <td className="px-2 py-1">{author}</td>
      <td className="px-2 py-1">{isbn}</td>
      <td className="px-2 py-1 ">
        <i className="far fa-edit" onClick={editBook}></i>
      </td>
      <td className="px-2 py-1 ">
        <i className="fas fa-trash" onClick={onDelete}></i>
      </td>
    </>
  );
}

export default TableRow;
