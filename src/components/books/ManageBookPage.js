import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadBooks, saveBook } from "../../redux/actions/bookActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import BookForm from "./BookForm";
import { newBook } from "../../../tools/mockData";

function ManageBookPage({
  books,
  authors,
  loadAuthors,
  loadBooks,
  saveBook,
  history,
  ...props
}) {
  const [book, setBook] = useState({ ...props.book });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch(error => {
        alert("Loading books failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveBook(book).then(() => {
      history.push("/books");
    });
  }

  return (
    <BookForm
      book={book}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageBookPage.propTypes = {
  authors: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveBook: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    book: newBook,
    books: state.books,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadBooks,
  loadAuthors,
  saveBook
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBookPage);
