import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './components/BestBooks';
import Profile from './components/Profile'
import CreateBook from './components/CreateBook';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: { email : 'fscotfitz@gatsby.com' },
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <CreateBook />
              <BestBooks />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
