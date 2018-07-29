import React, { Component } from 'react'

import base, { auth } from './base'
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
        base.syncState( `${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        })
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
    }

    deleteNote = () => {
        const notes = [...this.state.notes]
        const i = notes.findIndex(iNote => iNote.id === this.state.active.id)
        
        if ( i > -1 ) {
            notes.splice(i, 1)
            this.setState({notes})
            this.newNote()
        }      
    }

    logUser = () => {
        
        auth.onAuthStateChanged(( user ) => {
            if (user) {
                // User is signed in.
                const data = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    isAnonymous: user.isAnonymous,
                    uid: user.uid,
                    providerData: user.providerData,
                }
                console.log( data )
            } else {
                // User is signed out.
                // ...
                console.log( 'User is signed out!' )
            }
        })
    }

    render () {
        return (
            <div className="Main" style={style}>
                <Sidebar newNote={this.newNote} signOut={this.props.signOut} logUser={this.logUser} />
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