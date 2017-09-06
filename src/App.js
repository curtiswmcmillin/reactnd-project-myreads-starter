import React from 'react'
import { Route } from 'react-router';
import './App.css'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from './Bookshelf.js'

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

      console.debug('changeShelf updatedBook', book.shelf, b);

      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      });

    });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf shelfTitle="Currently Reading" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'currentlyReading'))} />
              <Bookshelf shelfTitle="Have Read" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'read'))} />
              <Bookshelf shelfTitle="Want to Read" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'wantToRead'))} />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp