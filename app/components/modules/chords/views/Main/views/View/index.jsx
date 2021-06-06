import React from "react";
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

function ChordView(props) {
    return (
        props.loading ? (
            <LoaderContainer>
                <Loader size="xl" />
            </LoaderContainer>
        ) : (
            <>
                <ViewHeader>

                    <MainInfo>
                        <TitleContainer>
                            <Title>ID {props.chord.chordId}</Title>
                            <Type>{props.chord.chordType}</Type>
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
                            onClick={() => props.onDelete(props.chord.chordId)}
                        >
                            <TrashIcon width="11.67px" height="15px"/>
                        </Button>
                    </Actions>
                </ViewHeader>
                <ViewMain>
                    <Button
                        kind="regular"
                        size="m"
                        variant="secondary"
                        iconLeft={
                            <PlusIcon />
                        }
                        onClick={() => console.log('Add SKU')}
                        style={{alignSelf: 'start', marginBottom: '7px'}}
                    >
                        Добавить SKU
                    </Button>
                    <ChordTable chord={props.chord} />
                </ViewMain>
            </>
        )
    );
}

export default ChordView;
