import styles from "./Book.module.scss";

const Book = ({ books }) => {
  return (
    <div className={styles.books}>
      <div className={styles.books_wrapper}>
        {books?.slice(0, 8).map((book) => (
          <div className={styles.book}>
            <img
              className={styles.book_img}
              src={book.imageLinks?.thumbnail}
              alt={book.title}
            />{" "}
            <h3 className={styles.book_header}>{book.title}</h3>
            <h4 className={styles.book_author}>Author: {book.authors}</h4>
            <p className={styles.book_description}>Description:</p>
            <p className={styles.book_description} key={book.id}>
              {book.description === undefined
                ? ""
                : book.description.slice(0, 80) + " ..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
