import './App.css';
import Menu from './Menu/menu';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pong from './Play/Pong/pong';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/play" component={Pong}></Route>
        </Switch>   
      </Router>   
    </div>
  );
}

export default App;
