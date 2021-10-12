import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteSVG } from "../../assets/icons/delete.svg";
class CardNotes extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }
  render() {
    return (
      <section className="card-note">
        <header className="card-note-header">
          <h3 className="card-note-tile">{this.props.title}</h3>
          <DeleteSVG onClick={this.delete.bind(this)} />
          <h4>{this.props.categories}</h4>
        </header>
        <p className="card-note-text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNotes;
