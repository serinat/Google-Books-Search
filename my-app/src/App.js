import React from "react";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";
//import SearchBtn from "./components/SearchBtn";
//import ViewBtn from "./components/ViewBtn";
//import DeleteBtn from "./components/DeleteBtn";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/books" component={Books} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
