import { player } from "./player.model";

export interface lobby{
    id: string;
    host: player;
    players: player[];
    state: string
}