import { fetchCharacters } from "../routes/characters-routes";

export function filterAliveCharacters(characters) {
    return characters.filter((character) => character.status === "Alive");
}

export function modifyCharacterNames(characters) {
    return characters.map((character) => {
        character.name = character.name.replace(/ /g, "_");
    });
}

export async function getAliveCharacters() {
    const characters = await fetchCharacters();
    const aliveCharacters = filterAliveCharacters(characters);
    const modifiedNames = modifyCharacterNames(aliveCharacters);
    return modifiedNames.map((character) => character.name);
}