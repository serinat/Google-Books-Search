import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchField from "react-search-field";

//import SearchBtn from "./components/SearchBtn";
//import ViewBtn from "./components/ViewBtn";

function Search(props) {
    return (
        <div>
            <Jumbotron>
                <h1 class="display-4">(React) Google Books Search</h1>
                <p class="lead">Search for and save books of interest</p>
            </Jumbotron>
            <Jumbotron>
                <h3>Book Search</h3>
                <h6>Book title</h6>
                <SearchField
                    placeholder="Search..."
                    onChange={props.handleInputChange} />
                

            </Jumbotron>

            
        </div>
    );
}

export default Search;