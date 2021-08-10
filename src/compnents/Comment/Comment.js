import React, { useState, useContext } from 'react'
import './Comment.scss'
import CommentContext from '../../context/comment-context'
import FinalComment from './FinalComment';
import user from '../../assets/user.jpg'
function Comment(props) {
    const { addComment } = useContext(CommentContext);

    const [data, setData] = useState('')
    const [disc, setDisc] = useState(0)

    const inputValue = (e) => {
        setData(e.currentTarget.value)

    }
    const DisplayComment = (e) => {
        e.preventDefault();

        setDisc(disc + 1)
        const newComment = {
            id: Math.random(),
            text: data,
        }
        addComment(newComment)
        console.log(newComment);
    }

    return (
        <div className='comment'>
            <div className="container">
                <div className="comment__heading">
                    <p className="comment__title">
                        Discussion ({disc})
                    </p>
                    <button className="subscribe__btn">Subscribe</button>
                </div>
                <div className="text__area">
                    <img src={user} alt="" className="user__image" />
                    <div>
                        <textarea
                            onChange={(e) => inputValue(e)}
                            className='comment__area' placeholder='Add to the discussion'>
                        </textarea>
                        <button
                            onClick={(e) => DisplayComment(e)}
                            className="submit__btn">Submit</button>
                    </div>

                </div>
                <FinalComment />
            </div>
        </div>
    )
}

export default Comment
