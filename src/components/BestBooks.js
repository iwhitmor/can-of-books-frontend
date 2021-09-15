import axios from 'axios';
import React from 'react';
import CreateBook from './CreateBook';
const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    let apiUrl = `${SERVER}/books`;
    try {
      let results = await axios.get(apiUrl);
      this.setState({ books: results.data });
      console.log('Books', results);
    }
    catch (err) {
      console.log(err);
    }
  }

  handleSave = async bookInfo => {
    let apiUrl = `${SERVER}/books`;
    let results = await axios.post(apiUrl, bookInfo);
    let newBook = results.data;
    console.log(newBook);

    this.fetchBooks();
  }

  handleDelete = async bookId => {
    let apiUrl = `${SERVER}/books/${bookId}`;
    await axios.delete(apiUrl);

    this.setState(state => ({
      books: state.books.filter(book => book._id !== bookId)
    }));
    console.log(this.state.books);
  }


  render() {

    const books = this.state.books;
    console.log(books);

    if (!books) {
      return (
        <p>Loading...</p>
      );
    }

    if (books.length === 0) {
      return (
        <p>No books</p>
      );
    }

    return (
      <>
        <h2>Books</h2>
        <button><CreateBook onSave={this.handleSave} />Add A Book</button>
          <div>{this.state.books.map((book, idx) => (
            <div key={idx}>
              <p>{book.title}</p>
              <p>{book.description}</p>
              <p>Rating: {book.rating}</p>
              <p>{book.email}</p>
              <button onClick={() => this.handleDelete(book._id)}> Delete Book </button>
            </div> ))}
          </div>
      </>
    )
  }
}

export default BestBooks;
