import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import ActionButtons from './ActionButtons';
import ChordId from './ChordId';
import ChordType from './ChordType';
import ChordViewWrapper from './ChordViewWrapper';
import Header from './Header';
import Title from './Title';
import EditIcon from '../../../../../../common/icons/EditIcon';
import TrashIcon from '../../../../../../common/icons/TrashIcon';
import {Button} from '../../../../../../common';
import getChordsType from '../../helpers/getChordsType';

function ChordView() {
    const history = useHistory();

    const selectedChord = useSelector((state) => state.chords.selectedChord);

    const onEditHandler = () => history.push(`edit/${selectedChord.chordId}`);

    return (
        <ChordViewWrapper>
            <Header>
                <Title>
                    <ChordId>{selectedChord.chordId}</ChordId>
                    <ChordType>{getChordsType(selectedChord.chordType)}</ChordType>
                </Title>
                <ActionButtons>
                    <Button variant='secondary' onClick={onEditHandler} iconOnly rounded>
                        <EditIcon size='15px' />
                    </Button>
                    <Button variant='secondary' iconOnly rounded>
                        <TrashIcon size='15px' />
                    </Button>
                </ActionButtons>
            </Header>
        </ChordViewWrapper>
    );
}

export default ChordView;
