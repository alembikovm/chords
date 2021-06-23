import React from 'react';
import {Counter} from 'fronton-react';
import NameCell from './NameCell';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableWrapper from './TableWrapper';
import Switcher from '../../../../../../common/Switcher';
import TrashIcon from '../../../../../../common/icons/TrashIcon';
import {Button} from "../../../../../../common";

function Table({rows, baseEntity, disabledSwitchers = false, disabledEdit = false}) {
    const isBaseEntity = (entityId) => entityId === baseEntity?.entityId;

    return (
        <div style={{flex: '1 1 auto', position: 'relative'}}>
            <TableWrapper>
                <TableHead>
                    <tr>
                        <th style={{width: '100px'}}>SKU</th>
                        <th style={{width: '350px'}}>Название</th>
                        <th style={{width: '120px'}}>Главный SKU</th>
                        <th style={{width: '150px', textAlign: 'center'}}>Количество</th>
                        <th></th>
                    </tr>
                </TableHead>
                <TableBody>
                    {rows.map(({entityId, name, mainPhoto, quantity}) => (
                        <tr key={entityId}>
                            <td style={{width: '100px'}}>{entityId}</td>
                            <td style={{width: '350px'}}>
                                <NameCell name={name} mainPhoto={mainPhoto} />
                            </td>
                            <td style={{width: '120px'}}>
                                <Switcher
                                    id={entityId}
                                    checked={isBaseEntity(entityId)}
                                    disabled={disabledSwitchers}
                                />
                            </td>
                            <td style={{width: '150px'}}>
                                <Counter
                                    value={quantity}
                                    size="s"
                                    step={1}
                                    disabled={disabledEdit}
                                />
                            </td>
                            <td style={{textAlign: 'right'}}>
                                {!disabledEdit && (
                                    <Button
                                        variant='pseudo'
                                        onClick={() => console.log('remove')}
                                        iconOnly
                                    >
                                        <TrashIcon size='24px' className='iconTrash' />
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </TableBody>
            </TableWrapper>
        </div>
    );
}

export default Table;
