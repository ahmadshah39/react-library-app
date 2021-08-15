import React, { useContext } from "react";
import AddBookForm from "../components/AddBookForm";
import DataTable from "../components/DataTable";
import SearchForm from "../components/SearchForm";
import ToggleButton from "../components/ToggleButton";
import BookContext from "../context/books/bookContext";
import { useTransition, animated } from "react-spring";
function Home() {
  const bookContext = useContext(BookContext);
  const { showAdd } = bookContext;
  const transitions = useTransition(showAdd, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: "auto", width: "auto" },
    leave: { opacity: 0, height: 0 },
  });
  return (
    <div className="w-full h-full bg-brand-gray">
      <div className="bg-brand-pink h-2/6 w-full ">
        <div className="w-full h-1/2 flex justify-center items-center">
          <h1 className="text-center text-3xl font-bold  text-brand-gray-light">
            <i className="fas fa-book-open mr-5 text-brand-gray-light"></i> MY
            LIBRARY APP
          </h1>
        </div>
      </div>
      <div className="container mx-auto -mt-32 px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-9">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 justify-center items-start px-2 space-y-2">
          
          <div className="space-y-2 col-span-3">
            <SearchForm />
            <DataTable />
          </div>
          <ToggleButton />
        </div>
      </div>
      {transitions(
            (style, item) =>
              item && (
                <animated.div style={style}>
                  <AddBookForm />
                </animated.div>
              )
          )}
    </div>
  );
}

export default Home;
