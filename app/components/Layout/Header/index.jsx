import React from 'react';
import Container from './Container';

function Header(props) {
    return (
        <Container>
            <div>Связки</div>
            {props.children}
        </Container>
    );
}

export default Header;
