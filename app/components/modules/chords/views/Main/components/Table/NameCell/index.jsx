import React from 'react';
import EntityCover from './EntityCover';
import EntityName from '../../List/ListItem/EntityName';
import NameCellWrapper from './NameCellWrapper';

function NameCell({mainPhoto, name}) {
    return (
        <NameCellWrapper>
            <EntityCover>
                <img src={mainPhoto} width='48px' height='48px' />
            </EntityCover>
            <EntityName>
                {name}
            </EntityName>
        </NameCellWrapper>
    );
}

export default NameCell;
