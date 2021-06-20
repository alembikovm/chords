import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import ActionButtons from './ActionButtons';
import ChordId from './ChordId';
import ChordType from './ChordType';
import ChordViewWrapper from './ChordViewWrapper';
import Header from './Header';
import Main from './Main';
import Title from './Title';
import Table from '../../components/Table';
import EditIcon from '../../../../../../common/icons/EditIcon';
import TrashIcon from '../../../../../../common/icons/TrashIcon';
import {Button} from '../../../../../../common';
import getChordsType from '../../helpers/getChordsType';
import {PlusIcon} from "fronton-react";

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
            <Main>
                <Button size='s' variant='secondary' iconLeft={<PlusIcon />} onClick={onEditHandler}>
                    Добавить SKU
                </Button>
                <Table
                    rows={selectedChord.relatedEntities}
                    baseEntity={selectedChord.baseEntity}
                    disabledSwitchers
                    disabledEdit
                />
            </Main>
        </ChordViewWrapper>
    );
}

export default ChordView;
