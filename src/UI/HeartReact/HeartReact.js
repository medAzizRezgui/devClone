import React, { useState } from 'react'
import './HeartReact.scss'

import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';


function HeartReact(props) {
    const [count, setCount] = useState(props.hearts)
    const toggleActiveIcon = (e) => {
        e.currentTarget.classList.toggle('heart__icon-active');
        if (e.currentTarget.classList.contains('heart__icon-active')) {
            setCount(props.hearts + 1);
        }
        else {
            setCount(props.hearts)
        }
    }


    return (
        <div className={'heart__container'}>
            <FavoriteTwoToneIcon
                onClick={(e) => toggleActiveIcon(e)}
                className={'heart__icon'}></FavoriteTwoToneIcon>
            <p className="heart__count">{count}</p>
        </div>


    )
}

export default HeartReact
