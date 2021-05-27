import React from "react";
import {Counter} from 'fronton-react'
import EntityInfoCell from "./EntityInfoCell";
import Name from "../../ChordsList/List/ListItem/Name";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entities: props.chord.relatedEntities,
        }
    }

    onQuantityChangeHandler = ({entityId, value}) => {
        this.setState((state) => {
           const entityIndex = state.entities.findIndex((entity) => entity.entityId === entityId);
           let entities = [...state.entities];
            entities[entityIndex].quantity = value;

           return {entities};
        });
    }

    render() {
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
                {this.state.entities.map(({entityId, name, mainPhoto, quantity}) => (
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
                        <td width="180px">{entityId === this.props.chord.baseEntity.entityId ? 'TRUE' : 'FALSE'}</td>
                        <td width="180px">
                            <Counter
                                value={quantity}
                                size="s"
                                step={1}
                                onChange={(event) => this.onQuantityChangeHandler({
                                    entityId,
                                    value: event.target.value
                                })}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Table;