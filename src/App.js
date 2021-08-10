import Header from './compnents/header/Header';
import Home from './compnents/Home/Home';
import FullPost from './compnents/FullPost/FullPost';
import SideNavState from './context/SideNav Context/SideNavState';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <SideNavState>
          <Header />
        </SideNavState>
        <Switch>
          <Route path='/post'>
            <FullPost />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
