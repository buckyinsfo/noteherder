import React from 'react'

const Note = ({note, setActiveNote}) => {
    return (
        <li 
            className="Note"
            onClick={ () => setActiveNote(note)} 
        >
            <div className="note">
                <div className="note-title">
                    {note.title}
                </div>
                <div className="note-body">
                    <p>
                    {note.body}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Note