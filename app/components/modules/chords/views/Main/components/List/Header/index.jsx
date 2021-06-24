import React from 'react';
import {Button} from '../../../../../../../common';
import DownloadIcon from '../../../../../../../common/icons/DownloadIcon';
import TrashListIcon from '../../../../../../../common/icons/TrashListIcon';
import ChordsFound from './ChordsFound';
import ChordsQuantityText from './ChordsQuantityText';
import DeleteChords from './DeleteChords';
import DownloadChords from './DownloadChords';
import HeaderWrapper from './HeaderWrapper';
import LeftBlock from './LeftBlock';
import CheckedContainer from '../CheckedContainer';
import Checkbox from '../../../../../../../common/Checkbox';

function Header({
    checkedAll,
    checkedChordsQuantity,
    foundChordsQuantity,
    onCheckedAll,
    onDelete,
}) {
    const isDisabledButton = !checkedChordsQuantity;

    return (
        <HeaderWrapper>
            <LeftBlock>
                <CheckedContainer>
                    <Checkbox checked={checkedAll} onChange={onCheckedAll} />
                </CheckedContainer>
                <ChordsQuantityText>
                    {checkedChordsQuantity} связок выбрано
                </ChordsQuantityText>
                <DownloadChords>
                    <Button
                        kind="icon"
                        size='s'
                        disabled={isDisabledButton}
                    >
                        <DownloadIcon />
                    </Button>
                </DownloadChords>
                <DeleteChords>
                    <Button
                        kind="icon"
                        size='s'
                        disabled={isDisabledButton}
                        onClick={onDelete}
                    >
                        <TrashListIcon />
                    </Button>
                </DeleteChords>
            </LeftBlock>
            <ChordsFound>
                {foundChordsQuantity} НАЙДЕНО
            </ChordsFound>
        </HeaderWrapper>
    )
}

export default Header;
