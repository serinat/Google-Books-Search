import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";
import './App.css';

//import SearchBtn from "./components/SearchBtn";
//import ViewBtn from "./components/ViewBtn";
//import DeleteBtn from "./components/DeleteBtn";

function App() {
  return (
    <Router>
      <div>
        <Header />
       
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        
      </div>
    </Router>
  );
}

export default App;
