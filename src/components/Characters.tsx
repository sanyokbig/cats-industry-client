import * as React from "react";
import {Character} from "../schema/character";
import {Table} from "reactstrap";
import {Portrait} from "./Portrait";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const CharacterRow = (props: Character) => (
    <tr key={props.name}>
        <th key="portrait"><Portrait characterID={props.id} size="32"/></th>
        <th key="name" style={{fontWeight: props.is_main ? "bold" : "normal"}}>{props.name}</th>
        <th key="isIndustrial" style={{width: 10}}>
            {props.is_industrial && <FontAwesomeIcon icon="industry" size="2x" style={{margin: 4}}/>}
        </th>
        <th key="isMailing" style={{width: 10}}>
            {props.is_mailing && <FontAwesomeIcon icon="envelope" size="2x" style={{margin: 4}}/>}
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