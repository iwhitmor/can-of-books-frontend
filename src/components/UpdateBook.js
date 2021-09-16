import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class UpdateBook extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

  handleSubmit = event => {
    event.preventdefault();

    let elements = event.target.elements;

    let formData = {
      title: elements.name.value,
      description: elements.description.value,
      rating: elements.rating.value,
      email: this.props.book.email,
    }

    console.log('updating', formData);

    let id = this.props.book._id;
    this.props.onUpdate(id, formData);

  }

  showModalOnClick = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    console.log('Please Hide Modal');
    this.setState({ showModal: false });
  }

  render() {

    return (
      <>
        <Button onClick={this.showModalOnClick} variant="secondary">Update Book</Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Update This Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Book Title" name="title" />
              <input placeholder="Quick Description" name="description" />
              <input placeholder="Book Rating" name="rating" />
              <Button onClick={this.handleClose} variant="secondary" type="submit">
                Update Book
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}