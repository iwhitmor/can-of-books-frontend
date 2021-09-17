import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="text-center" style={{width: "100%"}}>"If you don't like to read, you haven't found the right book" - J.K. Rowling</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
