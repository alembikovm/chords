import React, { useState, useEffect } from "react";
import {Counter} from 'fronton-react'
import EntityInfoCell from "./EntityInfoCell";
import Name from "../ChordsList/List/ListItem/Name";
import TrashIcon from "../../../../../../common/icons/TrashIcon";
import TrashIconWrapper from "./TrashIconWrapper";
import LastCell from "./LastCell";
import {Button} from "../../../../../../common";

function Table({chord, onChange}) {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        if (chord.relatedEntities.length) {
            const baseEntityIndex = chord.relatedEntities.findIndex(
                (entity) => entity.entityId === chord.baseEntity.entityId
            );

            const baseEntity = {...chord.relatedEntities[baseEntityIndex]};

            setEntities([
                baseEntity,
                ...chord.relatedEntities.filter((entity) => entity.entityId !== baseEntity.entityId)
            ]);
        } else {
            setEntities([]);
        }
    }, [chord]);

    const onQuantityChangeHandler = ({entityId, value}) => {
        const entityIndex = entities.findIndex((entity) => entity.entityId === entityId);

        let updatedEntities = [...entities];
        updatedEntities[entityIndex].quantity = value;

        setEntities(updatedEntities);
    };

    const onDeleteSku = ({entityId}) => {
        setEntities(entities.filter((entity) => entity.entityId !== entityId));
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
                                <Button
                                    variant='pseudo'
                                    onClick={() => {
                                        onChange();
                                        onDeleteSku({entityId});
                                    }}
                                    iconOnly
                                >
                                    <TrashIcon
                                        width="11.67px"
                                        height="15px"
                                        className='iconTrash'
                                    />
                                </Button>
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
