import React from 'react'
import './FireReact.scss'
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
function FireReact(props) {
    return (
        <div className={'fire__container'}>
            <WhatshotTwoToneIcon className={'fire__icon'}></WhatshotTwoToneIcon>
            <p className="fire__count">{props.fire}</p>
        </div>
    )
}

export default FireReact
