// imports useing Router to switch pages w
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

// import components
import FriendsList from './components/FriendsList';
import Login from './components/Login';


function App() {

  const logout = () => {
    console.log(("Log out"))
    localStorage.removeItem("token");
  }



  return (
    <Router>
    <div className="App">
      <h1>Welcome to Friends List</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/protected" component={FriendsList}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
