import {Character} from "./character";

export interface User {
    id: number;
    characters: Character[];
}