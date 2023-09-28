import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setBooks }) => {
  const [input, setInput] = useState("");

  const inputChange = async (e) => {
    setInput(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    fetchBooks(input);
  };

  const fetchBooks = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=AIzaSyCJT7XBbq7jORV6iv_E8XZaKBPZqjZjXkU`
    );

    const data = await response.json();
    await setBooks(data.items.map((book) => book.volumeInfo));
  };

  return (
    <>
      <div className={styles.search}>
        <h2 className={styles.header}>You can search for books here!</h2>
        <form className={styles.search_form} action="">
          <input
            className={styles.search_input}
            placeholder="Search for a Title or Author"
            type="text"
            value={input}
            onChange={inputChange}
          />
          <button onClick={submit} className={styles.search_btn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
