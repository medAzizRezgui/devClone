
import React from 'react'
import Heart from '../../UI/HeartReact/HeartReact'
import user from '../../assets/user.jpg'
import './UserComment.scss'
function UserComment(props) {
    return (
        <div >
            <div className="user__comment" >
                <img src={user} alt="" className="user__image" />
                <div className="comment__body">
                    <p className="comment__info">
                        LUKE知る
                        •
                        Aug 10
                    </p>
                    <p className='comment__value'>{props.text}</p>
                    <Heart
                        hearts={0} />
                </div>
            </div>
        </div>
    )
}

export default UserComment
