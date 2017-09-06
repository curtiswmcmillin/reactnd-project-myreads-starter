import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from './Bookshelf.js'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
    static propTypes = {
        addToShelf: PropTypes.func.isRequired        
    }

    state = {
        searchResults: []
    }

    changeShelf = (book) => {
        //console.debug('changeShelf', book)
        this.props.addToShelf(book);
        this.setState((state) => ({
            searchResults: state.searchResults.filter((b) => b.id !== book.id)
        }))
    }

    search = (e) => {
        const q = e.target.value;
        BooksAPI.search(q, 2).then((results) => {
            results.forEach((book) => {
                book.shelf = 'none'
            })
            this.setState({ searchResults: results })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.search} />
                    </div>
                </div>
                <Bookshelf shelfTitle="Search Results" changeShelf={this.changeShelf} shelfBooks={this.state.searchResults} />
            </div>
        )
    }
}

export default SearchBooks