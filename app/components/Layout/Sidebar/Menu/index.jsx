import React from 'react';
import Container from './Container';
import MenuItem from './components/MenuItem';

const items = [
    { to: '/', label: 'Связки' },
    { to: '/foo', label: 'Foo' },
];

function Menu() {
    return (
        <Container>
            {items.map((item) => (
                <MenuItem {...item} key={item.to} />
            ))}
        </Container>
    );
}

export default Menu;
