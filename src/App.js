import React from "react";
import List from './components/List'
import Form from './components/Form'
import "./assets/App.css";
import './assets/index.css';
import CategoryList from './components/CategoryList'
import Category from './data/Category'
import Notes from './data/Notes'
class App extends React.Component {

  constructor() {
    super();
    this.categories = new Category();
    this.notes = new Notes();
  }


  render() {

    return (
      <section className="content">
        <Form categories={this.categories} newNote={this.notes.newNote.bind(this.notes)} />
        <main className="main-content">
          <CategoryList addCategory={this.categories.addCategory.bind(this.categories)} categories={this.categories} />
          <List notes={this.notes} deleteNote={this.notes.deleteNote.bind(this.notes)} />

        </main>

      </section>
    );
  }
}

export default App;
