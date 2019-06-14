import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";

class BooksPage extends React.Component {
  state = {
    book: {
      title: ""
    }
  };

  handleChange = event => {
    const book = { ...this.state.book, title: event.target.value };
    this.setState({ book });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(bookActions.createBook(this.state.book));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Books</h2>
        <h3>Add Book</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.book.title}
        />
        <input type="submit" value="Save" />
        {this.props.books.map(book => (
          <div key={book.title}>{book.title}</div>
        ))}
      </form>
    );
  }
}

BooksPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BooksPage);
