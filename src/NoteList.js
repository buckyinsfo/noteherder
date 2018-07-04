import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList = (props) => {

    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {props.notes.map(note => (
                            <Note 
                            key={note.id} 
                            note={note} 
                            setActiveNote={props.setActiveNote}/>
                    ))}
                </a>
            </ul>
        </div>
    )
}

export default NoteList