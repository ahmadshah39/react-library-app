import React, { useEffect, useContext } from "react";
import BookContext from "../context/books/bookContext";
import TableRows from "./TableRows";
function DataTable() {
  const bookContext = useContext(BookContext);
  const { getBooks, books, filtered } = bookContext;
  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white px-4 py-4 rounded-xl shadow-md">
      <table className="w-full text-left mt-3 rounded-xl">
        <thead>
          <tr className="">
            <th className=" px-2 py-1">Title</th>
            <th className=" px-2 py-1">Author</th>
            <th className=" px-2 py-1">ISBN #</th>
            <th className=" px-2 py-1 "></th>
            <th className="px-2 py-1  "></th>
          </tr>
        </thead>
        <tbody>
          {books !== null ? (
            filtered !== null ? (
              <TableRows books={filtered} />
            ) : (
              <TableRows books={books} />
            )
          ) : (
            <tr>
              <td>
                <h1>No Books Found...</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
