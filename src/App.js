import Header from './compnents/header/Header';
import Home from './compnents/Home/Home';
import FullPost from './compnents/FullPost/FullPost';
import SideNavState from './context/SideNav Context/SideNavState';
import CommentState from './context/CommentState';
import {
  BrowserRouter as Router,
  Switch,
  Route,

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
            <CommentState>
              <FullPost />
            </CommentState>
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
