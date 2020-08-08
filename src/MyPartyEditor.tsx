import React, { useState, useCallback, useEffect } from 'react';
import { MyParty, MyPokemon, PokemonType, PokemonTypeList, EmptyMyPokemon, MyPokemonMove, MoveKind, EmptyMyPokemonMove, PokemonTypeShort, MoveKindLong, MoveKindList, MoveKindShort, DynamaxMoveNames, getDynamaxMovePower } from './model';
import { PokemonSelect } from './PokemonSelect';
import pokemonDataset from './data/pokemonDataset.json';
import moveDataset from './data/moveDataset.json';

export interface MyPokemonEditorProps {
    value: MyPokemon;
    onChange: (value: MyPokemon) => void;
}

function PokemonTypeSelect(props: { value: PokemonType, onChange: (value: PokemonType) => void }) {
    return (<select value={props.value} onChange={(e) => props.onChange(e.target.value as PokemonType)}>
        {PokemonTypeList.map((pokemonType) => <option key={pokemonType} value={pokemonType}>{pokemonType}</option>)}
    </select>);
}

function MoveInput(props: { value: MyPokemonMove, onChange: (value: MyPokemonMove) => void }) {
    const { value, onChange } = props;
    const onSelectMoveName = useCallback((name: string) => {
        const moveInfo = moveDataset.find((m) => m.name === name);
        if (!moveInfo) {
            return;
        }
        onChange({ name, type: moveInfo.type as PokemonType, moveKind: moveInfo.moveKind as MoveKind, power: moveInfo.power });
    }, [value]);
    return (<div>
        技名:<select value={value.name} onChange={(e) => onSelectMoveName(e.target.value)}>
            <option value="">---技選択---</option>
            {moveDataset.map((moveInfo) => <option key={moveInfo.name} value={moveInfo.name}>{moveInfo.name}</option>)}
        </select>
        <input type="text" value={value.name} onChange={(e) => onChange({ ...value, name: e.target.value })} />
        技タイプ:<PokemonTypeSelect value={value.type} onChange={(type) => onChange({ ...value, type })} />
        種別:<select value={value.moveKind} onChange={(e) => onChange({ ...value, moveKind: e.target.value as MoveKind })}>
            {MoveKindList.map((moveKind) => <option key={moveKind} value={moveKind}>{MoveKindLong[moveKind]}</option>)}
        </select>
        威力: <input type="number" value={value.power.toString()} min={0} max={999} onChange={(e) => onChange({ ...value, power: Number(e.target.value) })} />
    </div>
    );
}

export function MyPokemonEditor(props: MyPokemonEditorProps) {
    const pokemon = props.value;
    const [newMove, setNewMove] = useState<MyPokemonMove>(EmptyMyPokemonMove);
    const [newDynamaxMove, setNewDinamaxMove] = useState<MyPokemonMove>(EmptyMyPokemonMove);
    useEffect(() => {
        // 通常技に応じて対応するダイマックス技候補を表示
        if (newMove.power === 0) {
            setNewDinamaxMove({ name: DynamaxMoveNames[''], type: 'ノーマル', moveKind: 'status', power: 0 });
        } else {
            setNewDinamaxMove({ name: DynamaxMoveNames[newMove.type], type: newMove.type, moveKind: newMove.moveKind, power: getDynamaxMovePower(newMove.type, newMove.power) });
        }
    }, [newMove]);
    const onSelectPokemon = useCallback((name: string) => {
        const d = pokemonDataset[name as keyof typeof pokemonDataset] as PokemonData;
        props.onChange({ ...pokemon, name, attrs: { ...pokemon.attrs, type1: d.type1, type2: d.type2 } });
    }, [pokemon, props.onChange]);
    const onSortMoveClick = useCallback((index: number, direction: number) => {
        const newMoves = [...pokemon.moves];
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= newMoves.length) {
            return;
        }
        const tmp = newMoves[index];
        newMoves[index] = newMoves[newIndex];
        newMoves[newIndex] = tmp;
        props.onChange({ ...pokemon, moves: newMoves });
    }, [props]);
    const onDeleteMove = useCallback((index: number) => {
        const newMoves = [...pokemon.moves];
        newMoves.splice(index, 1);
        props.onChange({ ...pokemon, moves: newMoves });
    }, [pokemon, props.onChange]);
    return (<div>
        <PokemonSelect value={pokemon.name} onChange={(value) => onSelectPokemon(value)} />
        タイプ1:<PokemonTypeSelect value={pokemon.attrs.type1} onChange={(value) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, type1: value } })} />
        タイプ2:<PokemonTypeSelect value={pokemon.attrs.type2} onChange={(value) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, type2: value } })} />
        HP: <input type="number" min={0} max={999} value={pokemon.attrs.hp.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, hp: Number(e.target.value) } })} />
        A: <input type="number" min={0} max={999} value={pokemon.attrs.a.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, a: Number(e.target.value) } })} />
        B: <input type="number" min={0} max={999} value={pokemon.attrs.b.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, b: Number(e.target.value) } })} />
        C: <input type="number" min={0} max={999} value={pokemon.attrs.c.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, c: Number(e.target.value) } })} />
        D: <input type="number" min={0} max={999} value={pokemon.attrs.d.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, d: Number(e.target.value) } })} />
        S: <input type="number" min={0} max={999} value={pokemon.attrs.s.toString()} onChange={(e) => props.onChange({ ...pokemon, attrs: { ...pokemon.attrs, s: Number(e.target.value) } })} />
        技: <ul>{pokemon.moves.map((move, i) => (
            <li>{move.name}({PokemonTypeShort[move.type]}{move.power}{MoveKindShort[move.moveKind]})
                <button onClick={(e) => onSortMoveClick(i, -1)}>↑</button>
                <button onClick={(e) => onSortMoveClick(i, 1)}>↓</button>
                <button onClick={(e) => onDeleteMove(i)}>🗑</button>
            </li>))}</ul>
        <MoveInput value={newMove} onChange={setNewMove} />
        <button onClick={() => {
            props.onChange({ ...pokemon, moves: [...pokemon.moves, newMove] });
            setNewMove(EmptyMyPokemonMove);
        }}>技追加</button>
        <MoveInput value={newDynamaxMove} onChange={setNewDinamaxMove} />
        <button onClick={() => {
            props.onChange({ ...pokemon, moves: [...pokemon.moves, newDynamaxMove] });
            setNewDinamaxMove(EmptyMyPokemonMove);
        }}>DM技追加</button>
        <a href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%80%E3%82%A4%E3%83%9E%E3%83%83%E3%82%AF%E3%82%B9%E3%82%8F%E3%81%96" target="_blank" rel="noreferrer noopener">DM情報</a>
    </div>);
}

export interface MyPartyEditorProps {
    value: MyParty;
    onChange: (value: MyParty) => void;
}

export function MyPartyEditor(props: MyPartyEditorProps) {
    const [editingPokemon, setEditingPokemon] = useState<MyPokemon>(EmptyMyPokemon);
    const pokes = props.value.myPokemons;
    const onChosenChange = useCallback((index: number, checked: boolean) => {
        const newPokes = [...props.value.myPokemons];
        newPokes[index] = { ...props.value.myPokemons[index], chosen: checked };
        props.onChange({ ...props.value, myPokemons: newPokes });
    }, [props]);
    const onSortPokemonClick = useCallback((index: number, direction: number) => {
        const newPokes = [...props.value.myPokemons];
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= newPokes.length) {
            return;
        }
        const tmp = newPokes[index];
        newPokes[index] = newPokes[newIndex];
        newPokes[newIndex] = tmp;
        props.onChange({ ...props.value, myPokemons: newPokes });
    }, [props]);
    const onEditPokemonClick = useCallback((index: number) => {
        const newPokes = [...props.value.myPokemons];
        const editPoke = newPokes.splice(index, 1)[0];
        setEditingPokemon(editPoke);
        props.onChange({ ...props.value, myPokemons: newPokes });
    }, [props]);
    const onDeletePokemonClick = useCallback((index: number) => {
        const newPokes = [...props.value.myPokemons];
        newPokes.splice(index, 1);
        props.onChange({ ...props.value, myPokemons: newPokes });
    }, [props]);
    return (
        <div>
            <h2>自分</h2>
            <div><MyPokemonEditor value={editingPokemon} onChange={setEditingPokemon} /><button onClick={() => {
                props.onChange({ ...props.value, myPokemons: [...props.value.myPokemons, editingPokemon] });
                setEditingPokemon(EmptyMyPokemon);
            }}>追加</button></div>
            <div>
                <table>
                    <tbody>
                        {pokes.map((poke, i) => (<tr key={i}>
                            <td><input type="checkbox" checked={poke.chosen} onChange={(e) => onChosenChange(i, e.target.checked)} /></td>
                            <td>{poke.name}</td>
                            <td><button onClick={(e) => onSortPokemonClick(i, -1)}>↑</button></td>
                            <td><button onClick={(e) => onSortPokemonClick(i, 1)}>↓</button></td>
                            <td><button onClick={(e) => onEditPokemonClick(i)}>🖊</button></td>
                            <td><button onClick={(e) => onDeletePokemonClick(i)}>🗑</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
