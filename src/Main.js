import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm';


// Stateless functional component.  Don't need to be classes.
class Main extends Component {
    constructor () {
        super()

        this.state = {
            active: this.createBlankNote(),
            notes: sample,
        }
    }

    componentDidMount() {
        const notes = JSON.parse( window.localStorage.getItem( 'notes') )
        if( notes ) {
            this.setState({ notes })
        }
    }

    createBlankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }
    
    setActiveNote = (note) => {
        this.setState({active: note})
    }

    newNote = () => {
        this.setActiveNote(this.createBlankNote())
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]
        const i = notes.findIndex(iNote => iNote.id === note.id)
        
        if ( i === -1 ) {
            note.id = notes.length + 1
            notes.push(note)
        } else {
            notes[i] = note
        }

        this.setState({notes})
        this.setActiveNote(note) 
        
        window.localStorage.setItem("notes", JSON.stringify(notes))
    }

    deleteNote = () => {
        const notes = [...this.state.notes]
        const i = notes.findIndex(iNote => iNote.id === this.state.active.id)
        
        if ( i > -1 ) {
            notes.splice(i, 1)
            this.setState({notes})
            this.newNote()

            window.localStorage.setItem('notes', JSON.stringify(notes))
        }      
    }

    render () {
        return (
            <div className="Main" style={style}>
                <Sidebar newNote={this.newNote}/>
                <NoteList notes={this.state.notes} setActiveNote={this.setActiveNote} />
                <NoteForm note={this.state.active} saveNote={this.saveNote} deleteNote={this.deleteNote} />
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

const sample = [{
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
},]

export default Main;