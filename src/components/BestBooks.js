import axios from 'axios';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    let apiUrl = `${process.env.REACT_APP_SERVER}/books`;
    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
      console.log(results);
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
