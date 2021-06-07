import React, { useState, useEffect } from "react";
import {Counter} from 'fronton-react'
import EntityInfoCell from "./EntityInfoCell";
import Name from "../ChordsList/List/ListItem/Name";
import TrashIcon from "../../../../../../common/icons/TrashIcon";
import TrashIconWrapper from "./TrashIconWrapper";
import LastCell from "./LastCell";

function Table({chord, onChange}) {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        const baseEntityIndex = chord.relatedEntities.findIndex(
            (entity) => {
                console.log(entity.entityId, chord.baseEntity.entityId);
                return entity.entityId === chord.baseEntity.entityId
            }
        );
        console.log(baseEntityIndex);
        const baseEntity = {...chord.relatedEntities[baseEntityIndex]};

        setEntities([
            baseEntity,
            ...chord.relatedEntities.filter((entity) => entity.entityId !== baseEntity.entityId)
        ]);
    }, [chord]);

    const onQuantityChangeHandler = ({entityId, value}) => {
        const entityIndex = entities.findIndex((entity) => entity.entityId === entityId);

        let updatedEntities = [...entities];
        updatedEntities[entityIndex].quantity = value;

        setEntities(updatedEntities);
    };

    return (
        <table>
            <thead>
            <tr>
                <th width="100px">SKU</th>
                <th width="340px">Название</th>
                <th width="180px">Главный SKU</th>
                <th width="180px">Кол-во</th>
            </tr>
            </thead>
            <tbody>
            {entities.map(({entityId, name, mainPhoto, quantity}) => (
                <tr key={entityId}>
                    <td valign="top" width="100px">{entityId}</td>
                    <EntityInfoCell>
                        <img
                            src={mainPhoto}
                            width="48px"
                            height="48px"
                            style={{marginRight: '12px'}}
                        />
                        <Name>{name}</Name>
                    </EntityInfoCell>
                    <td width="180px">{entityId === chord.baseEntity.entityId ? 'TRUE' : 'FALSE'}</td>
                    <td width="180px">
                        <LastCell>
                            <Counter
                                value={quantity}
                                size="s"
                                step={1}
                                onChange={(event) => {
                                    onChange();
                                    onQuantityChangeHandler({
                                        entityId,
                                        value: event.target.value
                                    });
                                }}
                            />
                            <TrashIconWrapper>
                                <TrashIcon width="11.67px" height="15px" className='iconTrash' />
                            </TrashIconWrapper>
                        </LastCell>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
