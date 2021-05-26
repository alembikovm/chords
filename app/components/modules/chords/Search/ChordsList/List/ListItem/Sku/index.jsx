import React from 'react';
import Index from "../../../../../../../common/Info";
import Text from "../Text";
import SkuContainer from "./SkuContainer";

function Sku({sku, type}) {
    return (
        <SkuContainer>
            <Text style={{marginRight: '17px'}}>
                {'SKU в связке: '}
                <span style={{color: 'var(--success-primary)'}}>{sku.active} SKU</span>/
                <span style={{color: 'var(--accent-primary)'}}>{sku.withStocks} SKU</span>/
                {sku.withoutStocks} SKU
            </Text>
            <Index title={type} />
        </SkuContainer>
    );
}

export default Sku;