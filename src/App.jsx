import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Book from "./Components/Book/Book";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <Navbar />
      <Landing />
      <SearchBar setBooks={setBooks} />
      <Book books={books} />
      <Footer />
    </>
  );
}

export default App;
