import React, { useState, useCallback, useEffect } from 'react';
import pokemonDataset from './data/pokemonDataset.json';
import { convertRomanToKana } from './RomajiToKatakana';

const sortedPokemons = Object.keys(pokemonDataset).sort();

export interface PokemonSelectProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
}

export const PokemonSelect = React.forwardRef<HTMLInputElement, PokemonSelectProps>(({ value, onChange, onSubmit }: PokemonSelectProps, ref) => {
    const [romaji, setRomaji] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(sortedPokemons);
    const onRomajiChange = useCallback((newRomaji: string) => {
        setRomaji(newRomaji);
        let filtered: string[] = [];
        if (newRomaji.length > 0) {
            const katakana = convertRomanToKana(newRomaji);
            filtered = sortedPokemons.filter((name) => name.startsWith(katakana));
        }
        if (filtered.length === 0) {
            filtered = sortedPokemons;
        }
        setFilteredPokemons(filtered);
        onChange(filtered[0]);
    }, [onChange]);
    useEffect(() => {
        if (value.length === 0) {
            setRomaji('');
        }
    }, [value]);

    const onInputKeydown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onSubmit) {
            if (e.key === 'Enter') {
                e.preventDefault();
                onSubmit();
            }
        }
    }, [onSubmit]);

    return (<span>
        <input ref={ref} type="text" value={romaji} onChange={(e) => onRomajiChange(e.target.value)} onKeyDown={onInputKeydown} />
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">---ポケモン選択---</option>
            {filteredPokemons.map((name) => <option key={name} value={name}>{name}</option>)}
        </select></span>);
});
