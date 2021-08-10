import React from 'react'
import './Comment.scss'
import user from '../../assets/user.jpg'
function Comment() {
    return (
        <div className='comment'>
            <div className="container">
                <div className="comment__heading">
                    <p className="comment__title">
                        Discussion (0)
                    </p>
                    <button className="subscribe__btn">Subscribe</button>
                </div>
                <div className="text__area">
                    <img src={user} alt="" className="user__image" />
                    <div>
                        <textarea className='comment__area' placeholder='Add to the discussion'>
                        </textarea>
                        <button className="submit__btn">Submit</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Comment
