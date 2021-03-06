import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onSelectShelf: PropTypes.func.isRequired
    }

    handleSelect = (e) => {
        const book = {
            id: this.props.book.id,
            shelf: e.target.value
        }
        this.props.onSelectShelf(book);
    }

    render() {
        const book = this.props.book

        if (!book.imageLinks) {
            book.imageLinks = { thumbnail: '' };
        }
        if (!book.imageLinks.thumbnail) {
            book.imageLinks.thumbnail = '';
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={this.handleSelect}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors[0] : ''}</div>
            </div>
        )
    }
}

export default Book