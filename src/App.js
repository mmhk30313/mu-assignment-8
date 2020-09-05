import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
export const Context = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <Context.Provider value={[posts,setPosts]}>
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/details/:userId">
            <Details/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </Context.Provider>
  );
}

export default App;
