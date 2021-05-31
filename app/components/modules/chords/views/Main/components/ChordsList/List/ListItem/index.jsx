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

function ListItem({
    chordId,
    chordType,
    baseEntity,
    relatedEntities,
    checked,
    onItemCheckClick,
    onClick,
}) {
    const sku = relatedEntities.reduce((res, entity) => {
        if (entity.avsTrigger === 'GREEN') return {...res, green: res.green + 1};
        if (entity.avsTrigger === 'YELLOW') return {...res, yellow: res.yellow + 1};
        if (entity.avsTrigger === 'GRAY') return {...res, gray: res.gray + 1};
    }, {green: 0, yellow: 0, gray: 0});

    return (
        <ItemWrapper onClick={onClick}>
            <CheckboxContainer>
                <Checkbox checked={checked} onChange={(value) => onItemCheckClick({chordId, checked: value})} />
            </CheckboxContainer>
            <MainContainer>
                <Title>
                    <ItemId>
                        ID {chordId}
                    </ItemId>
                    <Type>
                        {chordType}
                    </Type>
                </Title>
                <Sku sku={sku} type={chordType} />
                <Text>
                    Пример SKU в связке:
                </Text>
                <ExampleContainer>
                    <img
                        src={baseEntity.mainPhoto}
                        width="48px"
                        height="48px"
                        style={{marginRight: '12px'}}
                    />
                    <Name>{baseEntity.name}</Name>
                </ExampleContainer>
            </MainContainer>
        </ItemWrapper>
    );
}

export default ListItem;