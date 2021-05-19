import React from 'react';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import {Dropdown} from '../../common';

function Chords() {
    const options = [
        {id: 0, value: 'Яблоко'},
        {id: 1, value: 'Апельсин'},
    ];
    const selectedValue = 0;

    return (
        <Container>
            <ContentWrapper>
                <div>
                    Для поиска связки выбери ее тип и критерий поиска
                </div>
                <Dropdown
                    value={selectedValue}
                    options={options}
                    placeholder="Выберите тип связки"
                />
            </ContentWrapper>
        </Container>
    );
}

export default Chords;
