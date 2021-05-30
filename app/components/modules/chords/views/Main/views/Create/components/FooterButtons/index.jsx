import React from 'react';
import {Button, PlusIcon} from 'fronton-react';
import FooterButtonsWrapper from './FooterButtonsWrapper';

function FooterButtons(props) {
    return (
        <FooterButtonsWrapper>
            <Button
                kind="regular"
                size="m"
                variant="secondary"
                onClick={props.onCancelClick}
            >
                Отменить
            </Button>
            <Button
                kind="regular"
                size="m"
                variant="primary"
                onClick={props.onSaveClick}
            >
                Сохранить изменения
            </Button>
        </FooterButtonsWrapper>
    );
}

export default FooterButtons;
