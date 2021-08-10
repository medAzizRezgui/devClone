import React from 'react'
import './Bookmark.scss'
import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';
function BookmarkReact(props) {
    return (
        <div className={'bookmark__container'}>
            <BookmarkTwoToneIcon className={'bookmark__icon'}></BookmarkTwoToneIcon>
            <p className="bookmark__count">{props.bookmarks}</p>
        </div>


    )
}

export default BookmarkReact
