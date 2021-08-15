import React from "react";
import TableRow from "./TableRow";
import { useTransition, animated } from "react-spring";
function TableRows({ books }) {
  const transitions = useTransition(books, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {transitions((style, book) => (
        <animated.tr style={style}>
          <TableRow key={book.id} book={book} />
        </animated.tr>
      ))}
    </>
  );
}

export default TableRows;
