import React from 'react';
import './ReactBar.scss';
import Heart from '../HeartReact/HeartReact';
import Bookmark from '../BookMarkReact/Bookmark';
import FireReact from '../FireReact/FireReact';
import Dots from '../Dots/Dots'
function ReactBar() {
    return (
        <div className={'react__bar'}>
            <div className="container react__bar__container">
                <Heart hearts={44} />
                <FireReact fire={8} />
                <Bookmark bookmarks={4} />
                <Dots />
            </div>

        </div>
    )
}

export default ReactBar
