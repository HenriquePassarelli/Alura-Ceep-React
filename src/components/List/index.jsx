import React from "react";
import CardNotes from "../CardNotes";
import "./List.css";

class List extends React.Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => (
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
