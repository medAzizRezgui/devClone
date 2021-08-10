import React, { useState } from 'react'
import './FireReact.scss'
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';

function FireReact(props) {
    const [count, setCount] = useState(props.fire)
    const toggleActiveIcon = (e) => {
        e.currentTarget.classList.toggle('fire__icon-active');

        if (e.currentTarget.classList.contains('fire__icon-active')) {
            setCount(props.fire + 1);
        }
        else {
            setCount(props.fire)
        }
    }
    return (
        <div

            className={'fire__container'}>
            <WhatshotTwoToneIcon
                onClick={(e) => toggleActiveIcon(e)
                } className={'fire__icon'}></WhatshotTwoToneIcon>
            <p

                className="fire__count">{count}</p>
        </div>
    )
}

export default FireReact
