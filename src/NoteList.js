import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList = ({notes, setActiveNote}) => {

    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {notes.map(note => (
                            <Note 
                            key={note.id} 
                            note={note} 
                            setActiveNote={setActiveNote}/>
                    ))}
                </a>
            </ul>
        </div>
    )
}

export default NoteList