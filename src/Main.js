import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm';


// Stateless functional component.  Don't need to be classes.
class Main extends Component {
    constructor () {
        super()
        this.state = {
            active: {
                id: null,
                title: '',
                body: '',
            },
            notes: [
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
        }
    }   
    
    setActiveNote = (note) => {
        this.setState({active: note})
    }

    render () {
        return (
            <div className="Main" style={style}>
                <Sidebar />
                <NoteList notes={this.state.notes} setActiveNote={this.setActiveNote} />
                <NoteForm activeNote={this.state.active} />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    color: '#0000ff',
}
export default Main;