import React from 'react'
import './CommentReact.scss'

import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
function Comment(props) {
    return (
        <div className={'comment__container'}>
            <ChatTwoToneIcon className={'comment__icon'}></ChatTwoToneIcon>
            <p className="comment__count">{props.comments}</p>
        </div>


    )
}

export default Comment
