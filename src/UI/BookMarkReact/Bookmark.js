import React, { useState } from 'react'
import './Bookmark.scss'
import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';


function BookmarkReact(props) {


    const [count, setCount] = useState(props.bookmarks)

    const toggleActiveIcon = (e) => {
        e.currentTarget.classList.toggle('bookmark__icon-active')
        if (e.currentTarget.classList.contains('bookmark__icon-active')) {
            setCount(props.bookmarks + 1);
        }
        else {
            setCount(props.bookmarks)
        }
    }

    return (
        <div className={'bookmark__container'}>
            <BookmarkTwoToneIcon
                onClick={(e) => toggleActiveIcon(e)}
                className={'bookmark__icon'}></BookmarkTwoToneIcon>
            <p className="bookmark__count">{count}</p>
        </div>


    )
}

export default BookmarkReact
