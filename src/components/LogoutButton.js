import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

class LogoutButton extends Component {

  render() {

    const { logout } = this.props.auth0;

    return (
      <Button variant="secondary" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    );
  }
};

export default withAuth0(LogoutButton);
