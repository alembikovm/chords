import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlusIcon } from 'fronton-react';
import { useHistory, useParams } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import ActionButtons from './ActionButtons';
import ChordId from './ChordId';
import ChordType from './ChordType';
import ChordViewWrapper from './ChordViewWrapper';
import Header from './Header';
import Main from './Main';
import Title from './Title';
import Table from '../../components/Table';
import EditIcon from '../../../../../../common/icons/EditIcon';
import TrashListIcon from '../../../../../../common/icons/TrashListIcon';
import { Button } from '../../../../../../common';
import getChordsType from '../../helpers/getChordsType';
import { fetchChordById} from '../../../../../../../slices/chords/chordsSlice';
import Loader from '../../components/Loader';

function ChordView({ onDelete }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {chordId} = useParams();

    const selectedChord = useSelector(state => state.chords.selectedChord);
    const selectedChordStatus = useSelector(state => state.chords.selectedChordStatus);

    useEffect(() => {
        if (selectedChordStatus === 'idle') {
            dispatch(fetchChordById(chordId));
        }
    }, [selectedChordStatus, dispatch]);

    const onEditHandler = () => history.push(`edit/${selectedChord?.chordId}`);

    return (
        <ChordViewWrapper>
            {(selectedChordStatus === 'loading' || selectedChordStatus === 'idle') ? (
                <Loader />
            ) : (
                <>
                    <Header>
                        <Title>
                            <ChordId>{selectedChord.chordId}</ChordId>
                            <ChordType>{getChordsType(selectedChord.chordType)}</ChordType>
                        </Title>
                        <ActionButtons>
                            <Button variant='secondary' onClick={onEditHandler} iconOnly rounded>
                                <EditIcon size='15px' />
                            </Button>
                            <Button variant='secondary' onClick={() => onDelete([selectedChord.chordId])} iconOnly rounded>
                                <TrashListIcon size='15px' />
                            </Button>
                        </ActionButtons>
                    </Header>
                    <Main>
                        <div>
                            <Button size='s' variant='secondary' iconLeft={<PlusIcon />} onClick={onEditHandler}>
                                Добавить SKU
                            </Button>
                        </div>
                        <Table
                            rows={selectedChord.relatedEntities}
                            baseEntity={selectedChord.baseEntity}
                            disabledSwitchers
                            disabledEdit
                        />
                    </Main>
                </>
            )}
        </ChordViewWrapper>
    );
}

export default ChordView;
