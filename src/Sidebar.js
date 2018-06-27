import React from 'react'


import quill from './assets/img/quill.svg'
import newIcon from './assets/img/new.png'
import newHover from './assets/img/new-hover.png'



const Sidebar = () => {

    return (
        <div className="Sidebar" style={styles.sidebar}>
            <div className="logo" style={styles.logo}>
                <img src={quill} alt="Noteherder" style={styles.logoImg} />
            </div>

            <a href="./">
                <img src={newIcon} alt="New note" />
                <img src={newHover} alt="New note" />
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

const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'Fauna One',
        color: '#666666',
        fontSize: '3rem'
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    }
}

export default Sidebar;