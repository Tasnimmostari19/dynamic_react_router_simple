
import './App.css';
import Home from './Components/Home/Home';

import About from './Components/About/About';
import NotFound from './NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
