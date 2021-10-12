import React from "react";
import CardNotes from "../CardNotes";
import './List.css'

class List extends React.Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => (
          <li className="note-item" key={index}>
            <CardNotes title={note.title} text={note.text}/>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
