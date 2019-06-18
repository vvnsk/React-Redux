import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadBooks } from "../../redux/actions/bookActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageBookPage({ books, authors, loadAuthors, loadBooks }) {
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

  return (
    <>
      <h2>Manage Book</h2>
    </>
  );
}

ManageBookPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadBooks,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBookPage);
