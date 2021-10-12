import React, { Component } from "react";
import "./style.css";

class CardNotes extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-note-header">
          <h3 className="card-note-tile">{this.props.title}</h3>
        </header>
        <p className="card-note-text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNotes;
