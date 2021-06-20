import React from 'react';
import {Checkbox} from 'fronton-react';
import Chord from './Chord';
import ChordId from './ChordId';
import ChordSKU from './ChordSKU';
import ChordSKUColor from './ChordSKUColor';
import ChordText from './ChordText';
import ChordTitle from './ChordTitle';
import ChordType from './ChordType';
import Entity from './Entity';
import EntityName from './EntityName';
import ListItemWrapper from './ListItemWrapper';
import CheckedContainer from '../CheckedContainer';
import Info from '../../../../../../../common/Info';
import getChordsType from '../../../helpers/getChordsType';

function ListItem({
    chordId,
    chordType,
    baseEntity,
    checked,
    onCheckChord,
    onItemClick,
}) {
    return (
        <ListItemWrapper onClick={() => onItemClick(chordId)}>
            <CheckedContainer style={{marginTop: '4px'}}>
                <Checkbox checked={checked} onChange={(value) => onCheckChord(value, chordId)} />
            </CheckedContainer>
            <Chord>
                <ChordTitle>
                    <ChordId>ID {chordId}</ChordId>
                    <ChordType>{getChordsType(chordType)}</ChordType>
                </ChordTitle>
                <ChordSKU>
                    <p>
                        {'SKU в связке: '}
                        <ChordSKUColor color='var(--success-dark)'>
                            136 SKU
                        </ChordSKUColor>
                        {'/ '}
                        <ChordSKUColor color='var(--accent-dark)'>
                            6 SKU
                        </ChordSKUColor>
                        {'/ '}
                        3 SKU
                    </p>
                    <div style={{marginLeft: 'var(--space-200)'}}>
                        <Info title={chordType}  />
                    </div>
                </ChordSKU>
                <ChordText>
                    Пример SKU в связке:
                </ChordText>
                <Entity>
                    <img src={baseEntity.mainPhoto} width='48px' height='48px' />
                    <EntityName>
                        {baseEntity.name}
                    </EntityName>
                </Entity>
            </Chord>
        </ListItemWrapper>
    );
}

export default ListItem;
