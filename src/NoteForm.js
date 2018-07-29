import React from 'react'

import './NoteForm.css'

const NoteForm = ({note, saveNote, deleteNote}) => {

    const handleChange = (ev) => {
        const tmpNote = {...note}
        tmpNote[ev.target.name] = ev.target.value
        saveNote(tmpNote)
    }

    return (
        <div className="NoteForm">
            <div className="form-actions">
                <button type="button" onClick={deleteNote}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
            <form>
                <p>
                    <input
                        type="text"
                        name="title" 
                        placeholder={"Title your note"}
                        value={note.title}
                        onChange={handleChange}
                    />
                </p>

                <textarea 
                    name="body" 
                    value={note.body} 
                    onChange={handleChange} 
                />
            </form>
        </div>
    )
}

export default NoteForm

