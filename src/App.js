import React from 'react'
import { Route } from 'react-router';
import './App.css'
import Main from './Main.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book) => {
    BooksAPI.update(book, book.shelf).then((b) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      });
    });
  }

  render() {
    const books = this.state.books;
    return (
      <div>
        <Route exact path='/' render={() => (
          <Main myBooks={books} addToShelf={this.changeShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks myBooks={books} addToShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp