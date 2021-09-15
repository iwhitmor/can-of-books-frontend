import React from 'react';

export default class CreateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    console.log(event.target.elements);
    let formData = {
      title: elements.title.value,
      description: elements.description.value,
      rating: elements.rating.value,
    }
    console.log('saving', formData);
    
    this.props.onSave(formData);

    event.target.reset();
    elements.title.focus();
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="Book Title" name="title" />
        <input placeholder="Quick Description" name="description" />
        <input placeholder="Book Rating" name="rating" />
        <button type="submit">
          Save Book!
        </button>
      </form>
    )
  }
}