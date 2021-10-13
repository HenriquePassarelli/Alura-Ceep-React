import React from "react";
import CardNotes from "../CardNotes";
import "./List.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes.bind(this));
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => (
          <li className="note-item" key={index}>
            <CardNotes
              deleteNote={this.props.deleteNote}
              index={index}
              title={note.title}
              text={note.text}
              categories={note.category}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
