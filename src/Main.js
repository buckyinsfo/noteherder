import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm';


// Stateless functional component.  Don't need to be classes.
const Main = () => {

    return (
        <div className="Main" style={style}>
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
        
        
    )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    color: '#0000ff',
}
export default Main;