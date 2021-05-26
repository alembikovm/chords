import React from "react";
import {Checkbox, Tooltip} from "fronton-react";
import ItemWrapper from "./ItemWrapper";
import CheckboxContainer from "./CheckboxContainer";
import ItemId from "./ItemId";
import MainContainer from "./MainContainer";
import Title from "./Title";
import Type from "./Type";
import Sku from './Sku';
import Text from "./Text";
import ExampleContainer from "./ExampleContainer";
import Name from "./Name";

function ListItem({_id, id, type, sku, name, checked, onItemCheckClick}) {
    return (
        <ItemWrapper>
            <CheckboxContainer>
                <Checkbox checked={checked} onChange={(value) => onItemCheckClick({_id, checked: value})} />
            </CheckboxContainer>
            <MainContainer>
                <Title>
                    <ItemId>
                        ID {id}
                    </ItemId>
                    <Type>
                        {type}
                    </Type>
                </Title>
                <Sku sku={sku} type={type} />
                <Text>
                    Пример SKU в связке:
                </Text>
                <ExampleContainer>
                    <img width="48px" height="48px" style={{marginRight: '12px'}} />
                    <Name>{name}</Name>
                </ExampleContainer>
            </MainContainer>
        </ItemWrapper>
    );
}

export default ListItem;