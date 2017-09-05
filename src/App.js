import React from 'react'
import Link from 'react-router-dom'
import './App.css'
import { Router, Route, Switch } from 'react-router'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
import * as BooksAPI from './BooksAPI.js'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.debug('books', books);
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp