import React from 'react'
import './HeartReact.scss'

import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
function HeartReact(props) {
    return (
        <div className={'heart__container'}>
            <FavoriteTwoToneIcon className={'heart__icon'}></FavoriteTwoToneIcon>
            <p className="heart__count">{props.hearts}</p>
        </div>


    )
}

export default HeartReact
