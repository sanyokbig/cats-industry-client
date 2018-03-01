import * as React from "react";
import {Character} from "../schema/character";
import {Table} from "reactstrap";
import {Portrait} from "./Portrait";

const CharacterRow = (props: Character) => (
    <tr key={props.name}>
        <th key="portrait"><Portrait characterID={props.id} size="32"/></th>
        <th key="name" style={{fontWeight: props.is_main ? "bold" : "normal"}}>{props.name}</th>
        <th key="cando">
            {props.is_industrial && <i className="fas fa-envelope"/>}
            {props.is_mailing && <i className="fas fa-envelope"/>}
        </th>
    </tr>
);

interface CharactersListProps {
    list: Character[];
}

export const CharactersList = (props: CharactersListProps) => {
    const rows = props.list.map(c => CharacterRow(c));
    return (
        <Table>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
};