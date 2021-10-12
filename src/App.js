import React from "react";
import List from './components/List'
import Form from './components/Form'
import "./assets/App.css";
import './assets/index.css';
import CategoryList from './components/CategoryList'
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      categories: []
    }
  }

  newNote(title, text, category) {
    const newNote = { title, text, category };
    const notes = [...this.state.notes, newNote];
    const newState = { notes }
    this.setState(newState);
  }

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({ notes });
    console.log(this.state.notes)
  }

  newCategory(categoryName) {
    const categories = [...this.state.categories, categoryName]
    this.setState({ categories });
  }

  render() {
    const { notes } = this.state
    return (
      <section className="content">
        <Form categories={this.state.categories} newNote={this.newNote.bind(this)} />
        <main className="main-content">
          <CategoryList addCategory={this.newCategory.bind(this)} categories={this.state.categories} />
          <List notes={notes} deleteNote={this.deleteNote.bind(this)} />

        </main>

      </section>
    );
  }
}

export default App;
