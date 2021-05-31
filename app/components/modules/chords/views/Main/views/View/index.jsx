import React from "react";
import {Button, PlusIcon} from "fronton-react";
import ViewHeader from "./ViewHeader";
import MainInfo from "./MainInfo";
import Title from "./Title";
import TitleContainer from "./TitleContainer";
import Date from "./Date";
import Type from "./Type";
import Actions from "./Actions";
import TrashIcon from "../../../../../../common/icons/TrashIcon";
import EditIcon from "../../../../../../common/icons/EditIcon";
import ViewMain from "./ViewMain";
import {ChordTable} from '../../components';

class ChordView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ViewHeader>
                    <MainInfo>
                        <TitleContainer>
                            <Title>ID {this.props.chord.chordId}</Title>
                            <Type>{this.props.chord.chordType}</Type>
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
                            onClick={() => console.log('On delete chord click!')}
                        >
                            <TrashIcon width="11.67px" height="15px"/>
                        </Button>
                        <Button
                            kind="regular"
                            size="m"
                            variant="secondary"
                            iconOnly
                            rounded
                            onClick={() => console.log('On edit chord click!')}
                        >
                            <EditIcon size="15px"/>
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
                    <ChordTable chord={this.props.chord} />
                </ViewMain>
            </>
        );
    }
}

export default ChordView;
