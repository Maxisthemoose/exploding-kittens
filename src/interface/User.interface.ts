import { Snowflake } from "discord.js";
import Card from "./Card.interface";

export default interface User {
    id: Snowflake;
    cards: Card[];
}