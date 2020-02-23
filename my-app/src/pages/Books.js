import React from "react";
import SearchBtn from "./components/SearchBtn";
import ViewBtn from "./components/ViewBtn";
import DeleteBtn from "./components/DeleteBtn";

function Books() {
    return (
        <div>
            <SearchBtn>
                <ViewBtn>
                    <DeleteBtn>

                    </DeleteBtn>
                </ViewBtn>
            </SearchBtn>
        </div>
    )
}

export default Books;