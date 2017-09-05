import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class Bookshelf extends React.Component {
    render() {
        const books = this.props.books
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol>
                        {books.map((book) => (
                            <li key={book.id}><Book book={book} /></li>                
                        ))}                   
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf