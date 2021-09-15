import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
      <Modal show={true} >
        <Modal.Header closeButton>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="post" onSubmit={this.handleSubmit}>
            <input placeholder="Book Title" name="title" />
            <input placeholder="Quick Description" name="description" />
            <input placeholder="Book Rating" name="rating" />
            <Button variant="secondary" type="submit">
              Save Book!
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}


