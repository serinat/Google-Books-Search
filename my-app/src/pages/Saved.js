import React from "react";
import Header from "./components/Header";
import ViewBtn from "./components/ViewBtn";
import DeleteBtn from "./components/DeleteBtn";

function Saved() {
    return (
        <div>
            <Header>
                <h1>Saved Books</h1>
                <h1>Results</h1>
                <ViewBtn>
                    <DeleteBtn>


                    </DeleteBtn>
                </ViewBtn>

            </Header>
        </div>
    )
}

export default Saved;