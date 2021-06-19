const chordTypesHash = {
    COMPLEMENT: 'комплемент',
};

const getChordsType = (chordType) => chordTypesHash[chordType] || 'Неизвестно';

export default getChordsType;
