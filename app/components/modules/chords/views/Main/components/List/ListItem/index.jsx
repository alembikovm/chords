import React from 'react';
import {Tooltip} from 'fronton-react';
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
import Checkbox from '../../../../../../../common/Checkbox';

function ListItem({
    chordId,
    chordType,
    baseEntity,
    checked,
    onCheckChord,
    onItemClick,
}) {
    const plugPhotoURL = 'https://res.cloudinary.com/lmru/image/upload/photoiscoming.png';

    return (
        <ListItemWrapper onClick={() => onItemClick(chordId)}>
            <CheckedContainer>
               <Checkbox checked={checked} onChange={(value) => onCheckChord(value, chordId)}/>
            </CheckedContainer>
            <Chord>
                <ChordTitle>
                    <Tooltip title={chordId}>
                        <ChordId>ID {chordId}</ChordId>
                    </Tooltip>
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
                        <Info title={`
                            ${136} SKU - активные SKU без даты AVS или до даты AVS больше 3-х месяцев
                            ${6} SKU - SKU с датой AVS и стоком, до даты AVS менее 3-х месяцев и есть стоки/дата AVS уже наступила, но все еще есть остатки
                            ${3} SKU - SKU с наступившей датой AVS и без стоков
                        
                        `} />
                    </div>
                </ChordSKU>
                <ChordText>
                    Пример SKU в связке:
                </ChordText>
                <Entity>
                    <img src={baseEntity.mainPhoto || plugPhotoURL} width='48px' height='48px' />
                    <EntityName>
                        {baseEntity.name}
                    </EntityName>
                </Entity>
            </Chord>
        </ListItemWrapper>
    );
}

export default ListItem;
