import React, { useState } from 'react';
import pokemonDataset from './data/pokemonDataset.json';
import { MyParty, MyPokemon, PokemonType, PokemonTypeList, EmptyMyPokemon, MyPokemonMove, MoveKind, EmptyMyPokemonMove } from './model';
import { PokemonSelect } from './PokemonSelect';

export interface MyPokemonEditorProps {
    value: MyPokemon;
    onChange: (value: MyPokemon) => void;
}

function PokemonTypeSelect(props: { value: PokemonType, onChange: (value: PokemonType) => void }) {
    return (<select value={props.value} onChange={(e) => props.onChange(e.target.value as PokemonType)}>
        {PokemonTypeList.map((pokemonType) => <option key={pokemonType} value={pokemonType}>{pokemonType}</option>)}
    </select>)
}

function MoveInput(props: { value: MyPokemonMove, onChange: (value: MyPokemonMove) => void }) {
    const { value, onChange } = props;
    return (<div>
        技名:<input type="text" value={value.name} onChange={(e) => onChange({ ...value, name: e.target.value })} />
        技タイプ:<PokemonTypeSelect value={value.type} onChange={(type) => onChange({ ...value, type })} />
        種別:<select value={value.moveKind} onChange={(e) => onChange({ ...value, moveKind: e.target.value as MoveKind })}>
            <option value="physical">物理</option>
            <option value="special">特殊</option>
            <option value="status">変化</option>
        </select>
        威力: <input type="number" value={value.attack.toString()} min={0} max={999} onChange={(e) => onChange({ ...value, attack: Number(e.target.value) })} />
    </div>
    )
}

export function MyPokemonEditor(props: MyPokemonEditorProps) {
    const pokemon = props.value;
    const [newMove, setNewMove] = useState<MyPokemonMove>(EmptyMyPokemonMove);
    return (<div>
        <PokemonSelect value={pokemon.name} onChange={(value) => props.onChange({ ...pokemon, name: value })} />
        タイプ1:<PokemonTypeSelect value={pokemon.attrs.type1} onChange={(value) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, type1: value } })} />
        タイプ2:<PokemonTypeSelect value={pokemon.attrs.type2} onChange={(value) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, type2: value } })} />
        HP: <input type="number" min={0} max={999} value={pokemon.attrs.hp.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, hp: Number(e.target.value) } })} />
        A: <input type="number" min={0} max={999} value={pokemon.attrs.a.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, a: Number(e.target.value) } })} />
        B: <input type="number" min={0} max={999} value={pokemon.attrs.b.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, b: Number(e.target.value) } })} />
        C: <input type="number" min={0} max={999} value={pokemon.attrs.c.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, c: Number(e.target.value) } })} />
        D: <input type="number" min={0} max={999} value={pokemon.attrs.d.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, d: Number(e.target.value) } })} />
        S: <input type="number" min={0} max={999} value={pokemon.attrs.s.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, s: Number(e.target.value) } })} />
        技: {JSON.stringify(pokemon.moves)}
        <MoveInput value={newMove} onChange={setNewMove} />
        <button onClick={() => {
            props.onChange({ ...pokemon, moves: [...pokemon.moves, newMove] });
            setNewMove(EmptyMyPokemonMove);
        }}>技追加</button>
    </div>);
}

export interface MyPartyEditorProps {
    value: MyParty;
    onChange: (value: MyParty) => void;
}

export function MyPartyEditor(props: MyPartyEditorProps) {
    const [pokemon, setPokemon] = useState<MyPokemon>(EmptyMyPokemon);
    return (
        <div>
            <div><MyPokemonEditor value={pokemon} onChange={setPokemon} /><button onClick={() => {
                props.onChange({ ...props.value, myPokemons: [...props.value.myPokemons, pokemon] });
                setPokemon(EmptyMyPokemon);
            }}>追加</button></div>
            <div>{JSON.stringify(props.value)}</div>
        </div>
    );
}
