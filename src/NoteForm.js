import React from 'react'

import './NoteForm.css'

const NoteForm = ({note}) => {
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
                        
                    />
                </p>

                <textarea name="body" value={note.body}></textarea>
            </form>
        </div>
    )
}

export default NoteForm

