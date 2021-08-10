import React, { useContext } from 'react'
import UserComment from '../UserComment/UserComment'
import CommentContext from '../../context/comment-context'


function FinalComment() {
    const { comments } = useContext(CommentContext);

    return (
        <div>
            {comments.map((comment) => (
                <UserComment text={comment.text}>
                </UserComment>
            ))}
        </div>
    )
}

export default FinalComment
