import React from "react";
import "./App.css";
import "./assets/main.css";
import Home from "./pages/Home";
import BookState from "./context/books/BookState";
function App() {
  return (
    <BookState>
      <Home />
    </BookState>
  );
}

export default App;
