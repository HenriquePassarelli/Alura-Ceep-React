import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };

    this._newCategory = this._newCategory.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategory);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategory);
  }

  _newCategory(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInput(e) {
    if (e.key === "Enter") {
      this.props.addCategory(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list-list">
          {this.state.categories.map((category, index) => (
            <li key={index} className="category-list-item">
              {category}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="category-list-input"
          placeholder="Add Category"
          onKeyUp={this._handleInput.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
