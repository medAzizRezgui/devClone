import React, { useState } from 'react'
import SideNavContext from './sidenav-context'



function SideNavState(props) {
    const [show, setShow] = useState(false)
    return (
        <SideNavContext.Provider value={{
            show, setShow
        }}
        >
            {props.children}

        </SideNavContext.Provider>
    )
}

export default SideNavState
