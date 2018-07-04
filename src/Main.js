import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm';


// Stateless functional component.  Don't need to be classes.
class Main extends Component {
    constructor () {
        super()
        this.state = {
            active: this.createNote(),
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

    createNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }
    
    setActiveNote = (note) => {
        this.setState({active: note})
    }

    newActiveNote = () => {
        this.setActiveNote(this.createNote())
       //console.log('Click New!')
    }

    render () {
        return (
            <div className="Main" style={style}>
                <Sidebar newNote={this.newActiveNote}/>
                <NoteList notes={this.state.notes} setActiveNote={this.setActiveNote} />
                <NoteForm note={this.state.active} />
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