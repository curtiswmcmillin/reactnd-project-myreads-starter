import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom'
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
              <div>
                <Bookshelf shelfTitle="Currently Reading" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'currentlyReading'))} />
                <Bookshelf shelfTitle="Have Read" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'read'))} />
                <Bookshelf shelfTitle="Want to Read" changeShelf={this.changeShelf} shelfBooks={this.state.books.filter((b) => (b.shelf === 'wantToRead'))} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks addToShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp