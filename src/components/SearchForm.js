import React, { useContext, useRef, useEffect } from "react";

import BookContext from "../context/books/bookContext";
function SearchForm() {
  const bookContext = useContext(BookContext);
  const { filterBooks, clearFilter, filtered } = bookContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterBooks(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className="bg-white px-4 py-4 rounded-xl shadow-md">
      <input
        className=" w-full focus:outline-none px-2 h-6"
        type="text"
        ref={text}
        name="search"
        id="search"
        placeholder="Search..."
        onChange={onChange}
      />
    </div>
  );
}

export default SearchForm;
