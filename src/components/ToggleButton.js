import React, { useContext } from "react";
import BookContext from "../context/books/bookContext";
function ToggleButton() {
  const bookContext = useContext(BookContext);
  const { showAddBookForm, showAdd, clearCurrent } = bookContext;
  const onClick = () => {
    showAddBookForm();
    clearCurrent();
  };
  const btnText = showAdd ? "Cancel" : "Add Book";
  const btnIcon = showAdd ? "fa-times" : "fa-plus";
  return (
    <div
      onClick={onClick}
      className="px-4 z-30 cursor-pointer py-2 bg-brand-pink absolute bottom-4 right-4 rounded-3xl hover:bg-opacity-70 focus:outline-none"
    >
      {btnText} <i className={"fas right " + btnIcon}></i>
    </div>
  );
}

export default ToggleButton;
