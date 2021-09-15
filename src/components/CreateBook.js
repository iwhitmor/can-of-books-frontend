import React from 'react';

class CreateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.name.value,
      description: elements.description.value,
      rating: elements.rating.value,
    }
    console.log('saving', formData);
    this.props.onSave(formData);
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" />
        <input placeholder="description" name="description" />
        <input placeholder="rating" name="rating" />
        <button type="submit">
          Save Book!
        </button>
      </form>
    )
  }
}

export default CreateBook;