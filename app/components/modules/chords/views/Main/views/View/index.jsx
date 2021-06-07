import React, {useState, useEffect} from "react";
import {Button, Loader, PlusIcon} from "fronton-react";
import ViewHeader from "./ViewHeader";
import MainInfo from "./MainInfo";
import Title from "./Title";
import TitleContainer from "./TitleContainer";
import Date from "./Date";
import Type from "./Type";
import Actions from "./Actions";
import TrashIcon from "../../../../../../common/icons/TrashIcon";
import ViewMain from "./ViewMain";
import {ChordTable} from '../../components';
import LoaderContainer from '../../../../components/LoaderContainer';
import FooterButtons from "../Create/components/FooterButtons";
import FormGroup from "../Create/FormGroup";
import {Dropdown, Input} from "../../../../../../common";
import EditWrapper from "./EditWrapper";

function ChordView(props) {
    const [isEdit, setEdit] = useState(false);
    const [chord, setChord] = useState(props.chord);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        setChord(props.chord);
    }, [props.chord]);

    const onChangeSearchString = (event) => {
        setSearchString(event.target.value);
    };

    const onTableChange = (event) => {
        setEdit(true);
    };

    const onSaveEditHandler = (event) => {
        setEdit(false);
    };

    const onCancelEditHandler = (event) => {
        setEdit(false);
    };

    const onAddSkuHandler = () => {
        setEdit(true);
    };

    const chordsItems = [
        {id: 1, value: 'Компоненты'},
        {id: 2, value: 'Дублоны'},
        {id: 3, value: 'Похожие товары'},
        {id: 4, value: 'Комплименты'},
        {id: 5, value: 'Замена'},
    ];

    return (
        props.loading ? (
            <LoaderContainer>
                <Loader size="xl" />
            </LoaderContainer>
        ) : (
            <>
                {isEdit ? (
                    <EditWrapper>
                        <h2>Редактирование связки</h2>
                        <FormGroup>
                            <Dropdown
                                label='Тип связки'
                                value={chord.type}
                                items={chordsItems}
                                disabled
                            />
                            <Input
                                inputSize='m'
                                label='Поиск SKU'
                                placeholder='Введите SKU, чтобы добавить в связку'
                                value={searchString}
                                onChange={onChangeSearchString}
                            />
                        </FormGroup>
                    </EditWrapper>
                ) : (
                    <ViewHeader>
                        <MainInfo>
                            <TitleContainer>
                                <Title>ID {chord.chordId}</Title>
                                <Type>{chord.chordType}</Type>
                            </TitleContainer>
                            <Date style={{marginTop: '4px'}}>Сегодня, 12:31</Date>
                        </MainInfo>
                        <Actions>
                            <Button
                                kind="regular"
                                size="m"
                                variant="secondary"
                                iconOnly
                                rounded
                                onClick={() => props.onDelete(chord.chordId)}
                            >
                                <TrashIcon width="11.67px" height="15px"/>
                            </Button>
                        </Actions>
                    </ViewHeader>
                )}
                <ViewMain>
                    {!isEdit && (
                        <Button
                            kind="regular"
                            size="m"
                            variant="secondary"
                            iconLeft={<PlusIcon />}
                            onClick={onAddSkuHandler}
                            style={{alignSelf: 'start', marginBottom: '7px'}}
                        >
                            Добавить SKU
                        </Button>
                    )}
                    <ChordTable chord={chord} onChange={onTableChange} />
                    {isEdit && <FooterButtons onSave={onSaveEditHandler} onCancel={onCancelEditHandler} />}
                </ViewMain>
            </>
        )
    );
}

export default ChordView;
