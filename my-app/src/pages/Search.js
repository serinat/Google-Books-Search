import React from "react";
import Header from "./components/Header";
import SearchBtn from "./components/SearchBtn";
import ViewBtn from "./components/ViewBtn";
import SaveBtn from "./components/SaveBtn";

function Search() {
    return (
        <div>
            <Header>
                <h1>Book Search</h1>
                <SearchBtn>
                    <h1>Results</h1>
                    <ViewBtn>
                        <SaveBtn>


                        </SaveBtn>
                    </ViewBtn>
                </SearchBtn>
            </Header>
        </div>
    )
}

export default Search;