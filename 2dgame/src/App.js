import './App.css';
import Menu from './Menu/menu';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pong from './Play/Pong/pong';
import About from './About/about';
import Store from './Store/store';
import Settings from './Settings/settings';
import Stats from './Stats/stats';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/menu" component={Menu}></Route>
          <Route exact path="/play" component={Pong}></Route>
          <Route exact path="/stats" component={Stats}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/store" component={Store}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Route exact path="/*">
              <Redirect to="/menu" />
          </Route>
        </Switch>   
      </Router>   
    </div>
  );
}

export default App;
