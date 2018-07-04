import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList = () => {
    const notes = [
        {
            id: 1,
            title: 'My first note',
            body: 'This is my first note',
        },
        {
            id: 2,
            title: 'My second note',
            body: 'This is my second note',
        },
        {
            id: 3,
            title: 'My thirds note',
            body: 'This is my third note',
        },
    ]
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {notes.map(note => <Note key={note.id} note={note} />)}
                </a>
            </ul>
        </div>

    )
}

export default NoteList