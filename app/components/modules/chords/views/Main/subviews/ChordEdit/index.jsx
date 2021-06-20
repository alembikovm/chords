import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ActionButtons from './ActionButtons';
import ChordId from './ChordId';
import ChordType from './ChordType';
import ChordEditWrapper from './ChordEditWrapper';
import Header from './Header';
import Main from './Main';
import Title from './Title';
import Table from '../../components/Table';
import TrashIcon from '../../../../../../common/icons/TrashIcon';
import {Button, Dropdown, FullWidthInput} from '../../../../../../common';
import getChordsType from '../../helpers/getChordsType';
import FormGroup from "./FormGroup";
import FooterButtons from '../../components/FooterButtons';

function ChordEdit() {
    const [searchString, setSearchString] = useState('');
    const selectedChord = useSelector((state) => state.chords.selectedChord);

    const onChangeSearchString = (event) => {
        setSearchString(event.target.value);
    };

    console.log(selectedChord);

    return (
        <ChordEditWrapper>
            <Header>
                <Title>
                    <ChordId>{selectedChord.chordId}</ChordId>
                    <ChordType>{getChordsType(selectedChord.chordType)}</ChordType>
                </Title>
                <ActionButtons>
                    <Button variant='secondary' iconOnly rounded>
                        <TrashIcon size='15px' />
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
                <Button variant='secondary'>Отменить</Button>
                <Button>Сохранить изменения</Button>
            </FooterButtons>
        </ChordEditWrapper>
    );
}

export default ChordEdit;
