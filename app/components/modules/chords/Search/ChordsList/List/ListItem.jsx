import React from "react";
import ItemWrapper from "./ItemWrapper";
import CheckboxContainer from "../CheckboxContainer";
import {Checkbox} from "fronton-react";

function ListItem(props) {
    return (
        <ItemWrapper>
            <CheckboxContainer>
                <Checkbox />
            </CheckboxContainer>
        </ItemWrapper>
    );
}

export default ListItem;