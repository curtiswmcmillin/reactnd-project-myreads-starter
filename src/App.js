import React from 'react'
import Link from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Router, Route, Switch } from 'react-router'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp