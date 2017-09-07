import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from './Bookshelf.js'
import PropTypes from 'prop-types'

class Main extends React.Component {

    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        addToShelf: PropTypes.func.isRequired        
    }

    changeShelf = (book) => {
        this.props.addToShelf(book);
    }

    render() {
        const books = this.props.myBooks;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelfTitle="Currently Reading" changeShelf={this.changeShelf} shelfBooks={books.filter((b) => (b.shelf === 'currentlyReading'))} />
                        <Bookshelf shelfTitle="Want to Read" changeShelf={this.changeShelf} shelfBooks={books.filter((b) => (b.shelf === 'wantToRead'))} />
                        <Bookshelf shelfTitle="Have Read" changeShelf={this.changeShelf} shelfBooks={books.filter((b) => (b.shelf === 'read'))} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default Main