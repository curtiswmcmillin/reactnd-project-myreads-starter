import React from 'react'
import Link from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf.js'
import * as BooksAPI from './BooksAPI.js'

class ListBooks extends React.Component {
    state = {
        allBooks: [],
        booksToRead: [],
        booksReading: [],
        booksHaveRead: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                allBooks: books,
                booksToRead: books.filter((book) => (
                    book.shelf === 'wantToRead'
                )),
                booksReading: books.filter((book) => (
                    book.shelf === 'currentlyReading'
                )),
                booksHaveRead: books.filter((book) => (
                    book.shelf === 'read'
                ))
            })
        })
    }
    render() {
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelfTitle="Currently Reading" books={this.state.booksReading} />
                        <Bookshelf shelfTitle="To Read" books={this.state.booksToRead} />
                        <Bookshelf shelfTitle="Have Read" books={this.state.booksHaveRead} />
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks
