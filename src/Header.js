import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './components/LoginButton'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="text-center">My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user
          ? <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
          : ''
        }
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        <LoginButton />
      </Navbar>
    )
  }
}

export default Header;
