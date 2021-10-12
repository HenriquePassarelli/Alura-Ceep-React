import React from "react";
import List from './components/List'
import Form from './components/Form'
import "./assets/App.css";
import './assets/index.css';

class App extends React.Component {

  constructor() {
    super();
    
    this.state =  {
      notes: []

    }
  }

  newNote(title, text){
    const newNote = {title,text};
    const notes = [...this.state.notes, newNote];
    const newState = {notes}
    this.setState(newState);
  }

  render() {
    const {notes} = this.state
    return (
      <section className="content">
        <Form newNote={this.newNote.bind(this)}/>
        <List notes={notes}/>

      </section>
    );
  }
}

export default App;
