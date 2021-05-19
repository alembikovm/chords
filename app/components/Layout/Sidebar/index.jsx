import React from 'react';
import {Button} from 'fronton-react';
import Container from './Container';
import Title from './Title';
import Help from './Help';
import Menu from './Menu';

function Sidebar() {
    return (
        <Container>
            <Title>
                <a href="https://opus-opp.apps.lmru.tech/opus/api/ui/dashboard/" target="_blank">
                    OPUS UI
                </a>
            </Title>
            <Menu />
            <Help>
                <Button
                    kind="regular"
                    variant="secondary"
                    size="s"
                    href="https://confluence.lmru.tech/display/LMRUProdCont/Chords+management+service"
                    target="_blank"
                    wide
                >
                    FAQ & guides
                </Button>
            </Help>
        </Container>
    );
}

export default Sidebar;
