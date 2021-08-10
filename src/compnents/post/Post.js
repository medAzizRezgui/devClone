import React from 'react';
import Heart from '../../UI/HeartReact/HeartReact'
import Comment from '../../UI/CommentReact/CommentReact'
import './Post.scss'
import SaveButton from '../../UI/SaveButton/SaveButton';
import { Link } from 'react-router-dom'
function Post(props) {
    return (

        <div className={'post'}>

            <Link to='/post'>
                <div className="user__info">
                    <img src={props.img} alt="" className='user__image' />
                    <div className="user__data">
                        <p className="user__name">{props.name}</p>
                        <span className="post__date">{props.date}</span>
                    </div>
                </div>
                <div className="post__title">
                    {props.title}
                </div>
                <p className="tags">{props.tags}</p>
            </Link>
            <div className="post__info">
                <div className="reacts">
                    <Heart
                        hearts={props.hearts}
                    ></Heart>
                    <Link to='/post'>
                        <Comment
                            comments={props.comments}>
                        </Comment>
                    </Link>
                </div>
                <div className="read">
                    <p className="time">{props.time} min read</p>
                    <SaveButton></SaveButton>
                </div>

            </div>
        </div>


    )
}

export default Post
