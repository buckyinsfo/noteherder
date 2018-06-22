import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm';


// Stateless functional component.  Don't need to be classes.
const Main = () => {

    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
        
        
    )
}

export default Main;