import React from 'react';
import pokemonDataset from './data/pokemonDataset.json';

const sortedPokemons = Object.keys(pokemonDataset).sort();

export interface PokemonSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export function PokemonSelect(props: PokemonSelectProps) {
    return (<select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
        <option value="">---ポケモン選択---</option>
        {sortedPokemons.map((name) => <option key={name} value={name}>{name}</option>)}
    </select>);
}
