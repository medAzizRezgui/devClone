import React, { useState } from 'react'
import './Comment.scss'
import user from '../../assets/user.jpg'
import Heart from '../../UI/HeartReact/HeartReact'
function Comment(props) {


    const [data, setData] = useState('')
    const [show, setShow] = useState(false)
    const [disc, setDisc] = useState(0)
    const inputValue = (e) => {
        if (!show) {
            setData(e.currentTarget.value)
        }
    }
    const DisplayComment = (e) => {
        e.preventDefault();
        setShow(true)
        setDisc(disc + 1)
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
                <div style={{ display: show ? 'block' : 'none' }}>

                    <div className="user__comment" >
                        <img src={user} alt="" className="user__image" />
                        <div className="comment__body">
                            <p className="comment__info">
                                LUKE知る
                                •
                                Aug 10
                            </p>
                            <p className='comment__value'>{show ? data : null}</p>
                            <Heart
                                hearts={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
