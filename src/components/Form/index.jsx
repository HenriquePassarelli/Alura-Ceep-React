import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "No Category";
  }

  _handleTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }
  _handleTextarea(e) {
    e.stopPropagation();
    this.text = e.target.value;
  }
  _newNote(e) {
    e.preventDefault(); // prevent the reload
    e.stopPropagation();
    this.props.newNote(this.title, this.text, this.category);
  }

  _handleCategory(e) {
    e.stopPropagation();
    this.category = e.target.value;
  }

  render() {
    return (
      <form className="register-form" onSubmit={this._newNote.bind(this)}>
        <select
          onChange={this._handleCategory.bind(this)}
          className="register-form-input"
        >
          <option value="No Category">No Category</option>
          {this.props.categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="register-form-input"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="type your note "
          className="register-form-input"
          onChange={this._handleTextarea.bind(this)}
        />
        <button className="register-form-input register-form-submit">
          New note
        </button>
      </form>
    );
  }
}

export default Form;
