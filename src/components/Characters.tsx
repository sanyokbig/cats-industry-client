import * as React from "react";
import {Character} from "../schema/character";
import {Table} from "reactstrap";

const CharacterRow = (props: Character) => (
    <tr key={props.name}>
        <th key="portrait"><img src={"http://image.eveonline.com/Character/" + props.id + "_32.jpg"} alt="portrait"/></th>
        <th key="name">{props.name}</th>
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