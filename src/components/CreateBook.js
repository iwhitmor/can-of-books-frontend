import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './createBook.css';

export default class CreateBook extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    };
  }

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
        <Button class="row justify-content-center" style={{width: "25%"}} onClick={this.showModalOnClick} variant ="secondary">Add A Book</Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Add A Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={this.handleSubmit}>
              <input placeholder="Book Title" name="title" />
              <input placeholder="Quick Description" name="description" />
              <input placeholder="Book Rating" name="rating" />
              <Button onClick={this.handleClose} variant="secondary" type="submit">
                Save Book
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}


