import React, { useState } from 'react';
import FiltersContainer from "./FiltersContainer";
import FiltersBlock from './FiltersBlock'
import { Input, Button, Dropdown } from "../../../../../../common";
import CleanIcon from "../../../../../../common/icons/CleanIcon";

function Filters({ onFilter }) {
    const initialFilters = {
        sku: '',
        subject: '',
        type: '',
        subtype: '',
        model: '',
    };
    const [filters, setFilters] = useState(initialFilters);

    const onResetFilters = () => setFilters(initialFilters);

    const onChangeFilters = (field, value) => setFilters({ ...filters, [field]: value });

    const modelItems = [
        { key: 'MOD_200005', value: 'Бетоносмесители\xa0электрические' },
        { key: 'MOD_200006', value: 'Бензиновые\xa0бетономешалки' },
        { key: 'MOD_200007', value: 'Запчасти\xa0для\xa0бетоносмесителей' },
        { key: 'MOD_200008', value: 'Прицепы' },
        { key: 'MOD_200009', value: 'Строительные\xa0тачки' },
    ];

    const subtypeItems = [
        {key: '1', value: 'СТРОИТ\xa0ОБОРУДОВАНИЕ'},
        {key: '2', value: 'СУХИЕ\xa0СМЕСИ'},
        {key: '3', value: 'СТРОИТ\xa0МАТЕРИАЛЫ'},
        {key: '4', value: 'КАНАЛИЗ\xa0И\xa0ВОДОСТОКИ'},
        {key: '5', value: 'КРОВЕЛЬНЫЕ\xa0СИСТЕМЫ'},  
    ];

    const typeItems = [
        {key: '1', value: 'ЛЕСТНИЦЫ'},
        {key: '2', value: 'ПРИЦЕПЫ'},
        {key: '3', value: 'СТРОИТЕЛЬНЫЕ\xa0ЛЕСА'},
        {key: '4', value: 'КАНАЛИЗ\xa0И\xa0ВОДОСТОКИ'},
        {key: '5', value: 'БЕТОНОСМЕСИТЕЛИ'},  
    ];

    const subjectItems = [
        {key: '1', value: 'СТРОИТ\xa0БОРУДОВАНИЕ'},
        {key: '2', value: 'СУХИЕ\xa0СМЕСИ'},
        {key: '3', value: 'СТРОИТ\xa0МАТЕРИАЛЫ'},
        {key: '4', value: 'КАНАЛИЗ\xa0И\xa0ВОДОСТОКИ'},
        {key: '5', value: 'КРОВЕЛЬНЫЕ\xa0СИСТЕМЫ'},  
    ];

    return (
        <FiltersContainer>
            <FiltersBlock>
                <div style={{ maxWidth: '160px', width: '100%' }}>
                    <Input
                        value={filters.sku}
                        onChange={(event) => onChangeFilters('sku', event.target.value)}
                        inputSize='m'
                        placeholder='Введи SKU'
                    />
                </div>
                <div style={{ maxWidth: '150px', width: '100%' }}>
                    <Dropdown
                        value={filters.type}
                        items={subjectItems}
                        onChange={(event) => onChangeFilters('type', event.target.value)}
                        placeholder='Подотдел'
                    />
                </div>
                <div style={{ maxWidth: '150px', width: '100%' }}>
                    <Dropdown
                        value={filters.type}
                        items={typeItems}
                        onChange={(event) => onChangeFilters('type', event.target.value)}
                        placeholder='Тип'
                    />
                </div>
                <div style={{ maxWidth: '150px', width: '100%' }}>
                    <Dropdown
                        value={filters.subtype}
                        items={subtypeItems}
                        onChange={(event) => onChangeFilters('subtype', event.target.value)}
                        placeholder='Подтип'
                    />
                </div>
                <div style={{ maxWidth: '120px', width: '100%' }}>
                    <Dropdown
                        value={filters.model}
                        items={modelItems}
                        onChange={(event) => onChangeFilters('model', event.target.value)}
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
                    <CleanIcon size='20px' color='text-primary' />
                </Button>
                <Button variant='secondary' onClick={onFilter}>
                    Применить фильтры
                </Button>
            </FiltersBlock>
        </FiltersContainer>
    );
}

export default Filters;
