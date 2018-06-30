import React from 'react'
import { StyleSheet, css } from 'aphrodite'


import quill from './assets/img/quill.svg'
import newIcon from './assets/img/new.png'
import newHover from './assets/img/new-hover.png'



const Sidebar = () => {

    return (
        <div className={ css( styles.sidebar ) } >
            <div className={ css( styles.logo ) }>
                <img src={quill} alt="Noteherder" className={ css( styles.logoImg ) } />
            </div>

            <a href="/notes" className={ css( styles.newNote ) } >
                <img src={newHover} alt="New note" className={ css( styles.newNoteImg ) } />
                <img src={newIcon} alt="New note hover" className={ css( styles.newNoteImg, styles.newNoteImgHover ) } />
            </a>

            <div className="SignOut">
                <button>
                    <i className={`fa fa-sign-out ${ css( styles.buttonIcon )}` }>
                    </i>
                </button>
            </div>
        </div>
    )

}

const styles = StyleSheet.create({
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
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    newNoteImgHover: {
        ':hover': {
            opacity: 0,
        },
    },
})

export default Sidebar;