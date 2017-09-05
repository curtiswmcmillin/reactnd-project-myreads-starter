import React from 'react'
import Link from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf.js'

class ListBooks extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf shelfTitle="Currently Reading" books={this.props.books.filter((book) => (book.shelf === 'currentlyReading'))} />
                    <Bookshelf shelfTitle="Have Read" books={this.props.books.filter((book) => (book.shelf === 'read'))} />
                    <Bookshelf shelfTitle="Want to Read" books={this.props.books.filter((book) => (book.shelf === 'wantToRead'))} />
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks
