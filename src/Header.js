import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './components/LoginButton'
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    
    const { auth0 } = this.props;
    console.log('auth0 in App', auth0);
    
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="text-center">My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user
          ? <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
          : ''
        }
        {auth0.isAuthenticated
          ? <>Welcome back, {auth0.user.nickname}</>
          : <LoginButton />
        }
   
      </Navbar>
    )
  }
}

export default withAuth0(Header);
