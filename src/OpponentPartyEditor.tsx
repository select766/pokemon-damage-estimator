import React, { useState } from 'react';
import { OpponentParty } from './model';
import { PokemonSelect } from './PokemonSelect';

export interface OpponentPartyEditorProps {
    value: OpponentParty;
    onChange: (value: OpponentParty) => void;
}

export function OpponentPartyEditor(props: OpponentPartyEditorProps) {
    const [newPokemon, setNewPokemon] = useState<string>('');
    return (<div>
        <PokemonSelect value={newPokemon} onChange={setNewPokemon} />
        <button onClick={() => {
            props.onChange({ ...props.value, opponentPokemons: [...props.value.opponentPokemons, { name: newPokemon, chosen: false }] });
            setNewPokemon('');
        }}>追加</button>
        {JSON.stringify(props.value)}
    </div>)
}
