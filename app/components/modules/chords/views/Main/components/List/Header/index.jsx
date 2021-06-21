import React from 'react';
import {Checkbox} from 'fronton-react';
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
                    <Checkbox checked={checkedAll} disabled={!foundChordsQuantity} onChange={onCheckedAll} />
                </CheckedContainer>
                <ChordsQuantityText>
                    {checkedChordsQuantity} связок выбрано
                </ChordsQuantityText>
                <DownloadChords>
                    <Button
                        kind="icon"
                        size='s'
                        disabled={isDisabledButton}
                        iconOnly
                    >
                        <DownloadIcon />
                    </Button>
                </DownloadChords>
                <DeleteChords>
                    <Button
                        kind="icon"
                        size='s'
                        disabled={isDisabledButton}
                        iconOnly
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
