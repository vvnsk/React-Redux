import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";

class BooksPage extends React.Component {
  componentDidMount() {
    const { books, authors, actions } = this.props;

    if (books.length === 0) {
      actions.loadBooks().catch(error => {
        alert("Loading books failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Books</h2>
        <BookList books={this.props.books} />
      </>
    );
  }
}

BooksPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    books:
      state.authors.length === 0
        ? []
        : state.books.map(book => {
            return {
              ...book,
              authorName: state.authors.find(a => a.id === book.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
