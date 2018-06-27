import React from 'react'


import quill from './assets/img/quill.svg'
import newIcon from './assets/img/new.png'
import newHover from './assets/img/new-hover.png'



const Sidebar = () => {

    return (
        <div className="Sidebar">
            <div className="sidebar">
                Sidebar
            <img src={quill} alt="Noteherder" />
            </div>

            <a href="#">
                <img src={newIcon} alt="New note"/>
                <img src={newHover} alt="New note"/>
            </a>

            <div className="SignOut">
                <button>
                    <i className="fa fa-sign-out">
                    </i>
                </button>
            </div>
        </div>
    )

}

export default Sidebar;