import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import ActionButtons from './ActionButtons';
import ChordId from './ChordId';
import ChordType from './ChordType';
import ChordEditWrapper from './ChordEditWrapper';
import Header from './Header';
import Main from './Main';
import Title from './Title';
import Table from '../../components/Table';
import TrashListIcon from '../../../../../../common/icons/TrashListIcon';
import {Button, Dropdown, FullWidthInput} from '../../../../../../common';
import getChordsType from '../../helpers/getChordsType';
import FormGroup from "./FormGroup";
import FooterButtons from '../../components/FooterButtons';
import Loader from '../../components/Loader';
import {fetchChordById} from '../../../../../../../slices/chords/chordsSlice';

function ChordEdit({onDelete}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {chordId} = useParams();
    const [searchString, setSearchString] = useState('');

    const selectedChord = useSelector((state) => state.chords.selectedChord);
    const selectedChordStatus = useSelector(state => state.chords.selectedChordStatus);

    const onChangeSearchString = (event) => {
        setSearchString(event.target.value);
    };

    useEffect(() => {
        if (selectedChordStatus === 'idle') {
            dispatch(fetchChordById(chordId));
        }
    }, [selectedChordStatus, dispatch]);

    const onCancel = () => history.go(-1);

    return (
        <ChordEditWrapper>
            {(selectedChordStatus === 'loading' || selectedChordStatus === 'idle') ? (
                <Loader />
            ) : (
                <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Header>
                        <Title>
                            <ChordId>{selectedChord.chordId}</ChordId>
                            <ChordType>{getChordsType(selectedChord.chordType)}</ChordType>
                        </Title>
                        <ActionButtons>
                            <Button variant='secondary' onClick={() => onDelete([selectedChord.chordId])} iconOnly rounded>
                                <TrashListIcon size='15px' />
                            </Button>
                        </ActionButtons>
                    </Header>
                    <Main>
                        <FormGroup>
                            <Dropdown
                                label='Тип связки'
                                value={getChordsType(selectedChord.chordType)}
                                items={[]}
                                size='lg'
                                disabled
                            />
                            <FullWidthInput
                                inputSize='lg'
                                label='Поиск SKU'
                                placeholder='Введите SKU, чтобы добавить в связку'
                                value={searchString}
                                onChange={onChangeSearchString}
                            />
                        </FormGroup>
                        <Table
                            rows={selectedChord.relatedEntities}
                            baseEntity={selectedChord.baseEntity}
                            disabledSwitchers
                        />
                    </Main>
                    <FooterButtons>
                        <Button variant='secondary' onClick={onCancel}>Отменить</Button>
                        <Button>Сохранить изменения</Button>
                    </FooterButtons>
                </div>
            )}
        </ChordEditWrapper>
    );
}

export default ChordEdit;
