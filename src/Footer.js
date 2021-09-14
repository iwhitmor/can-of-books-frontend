import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>"If you don't like to read, you haven't found the right book" - J.K. Rowling</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
