import React from 'react'

import './NoteForm.css'

const NoteForm = ({note, saveNote}) => {

    const handleChange = (ev) => {
        const tmpNote = {...note}
        tmpNote[ev.target.name] = ev.target.value
        saveNote(tmpNote)
    }

    return (
        <div className="NoteForm">
            <div className="form-actions">
                <button type="button">
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

                <textarea name="body" value={note.body} onChange={handleChange}></textarea>
            </form>
        </div>
    )
}

export default NoteForm

