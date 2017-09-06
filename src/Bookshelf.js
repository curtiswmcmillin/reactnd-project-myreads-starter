import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class Bookshelf extends React.Component {

    static propTypes = {
        shelfTitle: PropTypes.string.isRequired,
        shelfBooks: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    changeShelf = (book) => {
        this.props.changeShelf(book);
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.shelfBooks.map((book) => (
                            <li key={book.id}><Book book={book} onSelectShelf={this.changeShelf} /></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf