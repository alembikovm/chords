import React, {useState} from 'react';
import FiltersContainer from "./FiltersContainer";
import FiltersBlock from './FiltersBlock'
import {Input, Button} from "../../../../../../common";
import CleanIcon from "../../../../../../common/icons/CleanIcon";

function Filters(props) {
    const initialFilters = {
        sku: '',
        subject: '',
        type: '',
        subtype: '',
        model: '',
    };
    const [filters, setFilters] = useState(initialFilters);

    const onResetFilters = () => setFilters(initialFilters);

    const onChangeFilters = (field, value) => setFilters({...filters,  [field]: value});

    return (
        <FiltersContainer>
            <FiltersBlock>
                <div style={{maxWidth: '142px'}}>
                    <Input
                        value={filters.sku}
                        onChange={(event) => onChangeFilters('sku', event.target.value)}
                        inputSize='m'
                        placeholder='Введи SKU'
                    />
                </div>
                <div style={{maxWidth: '133px'}}>
                    <Input
                        value={filters.subject}
                        onChange={(event) => onChangeFilters('subject', event.target.value)}
                        inputSize='m'
                        placeholder='Подотдел'
                    />
                </div>
                <div style={{maxWidth: '50px'}}>
                    <Input
                        value={filters.type}
                        onChange={(event) => onChangeFilters('type', event.target.value)}
                        inputSize='m'
                        placeholder='Тип'
                    />
                </div>
                <div style={{maxWidth: '142px'}}>
                    <Input
                        value={filters.subtype}
                        onChange={(event) => onChangeFilters('subtype', event.target.value)}
                        inputSize='m'
                        placeholder='Подтип'
                    />
                </div>
                <div style={{maxWidth: '75px'}}>
                    <Input
                        value={filters.model}
                        onChange={(event) => onChangeFilters('model', event.target.value)}
                        inputSize='m'
                        placeholder='Модель'
                    />
                </div>
            </FiltersBlock>
            <FiltersBlock>
                <Button
                    onClick={onResetFilters}
                    variant='secondary'
                    iconOnly
                >
                    <CleanIcon />
                </Button>
                <Button variant='secondary'>
                    Применить фильтры
                </Button>
            </FiltersBlock>
        </FiltersContainer>
    );
}

export default Filters;
