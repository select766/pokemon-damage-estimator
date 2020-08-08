import React, { useState, useCallback, useRef } from 'react';
import { OpponentParty } from './model';
import { PokemonSelect } from './PokemonSelect';

export interface OpponentPartyEditorProps {
    value: OpponentParty;
    onChange: (value: OpponentParty) => void;
}

export function OpponentPartyEditor(props: OpponentPartyEditorProps) {
    const [newPokemon, setNewPokemon] = useState<string>('');
    const newPokemonInputRef = useRef<HTMLInputElement | null>(null);
    const pokes = props.value.opponentPokemons;
    const onAddPokemonClick = useCallback(() => {
        const newPokes = [...props.value.opponentPokemons];
        newPokes.push({ name: newPokemon, chosen: false });
        props.onChange({ ...props.value, opponentPokemons: newPokes });
        setNewPokemon('');
        setTimeout(() => {
            newPokemonInputRef.current?.focus();
        }, 10);
    }, [props, newPokemon]);
    const onChosenChange = useCallback((index: number, checked: boolean) => {
        const newPokes = [...props.value.opponentPokemons];
        newPokes[index] = { ...props.value.opponentPokemons[index], chosen: checked };
        props.onChange({ ...props.value, opponentPokemons: newPokes });
    }, [props]);
    const onDeletePokemonClick = useCallback((index: number) => {
        const newPokes = [...props.value.opponentPokemons];
        newPokes.splice(index, 1);
        props.onChange({ ...props.value, opponentPokemons: newPokes });
    }, [props]);
    return (<div>
        <h2>相手</h2>
        <div>
            <PokemonSelect ref={newPokemonInputRef} value={newPokemon} onChange={setNewPokemon} onSubmit={onAddPokemonClick} />
            <button onClick={onAddPokemonClick}>追加</button>
        </div>
        <div>
            <table>
                <tbody>
                    {pokes.map((poke, i) => <tr key={i}><td><label><input type="checkbox" checked={poke.chosen} onChange={(e) => onChosenChange(i, e.target.checked)} />{poke.name}</label></td><td><button onClick={(e) => onDeletePokemonClick(i)}>🗑</button></td></tr>)}
                </tbody>
            </table>
        </div>
    </div>)
}
