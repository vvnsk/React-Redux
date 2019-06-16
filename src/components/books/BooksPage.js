import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class BooksPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadBooks().catch(error => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>Books</h2>
        {this.props.books.map(book => (
          <div key={book.title}>{book.title}</div>
        ))}
      </>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
