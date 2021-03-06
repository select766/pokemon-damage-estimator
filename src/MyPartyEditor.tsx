import React, { useState, useCallback, useEffect } from 'react';
import { MyParty, MyPokemon, PokemonType, PokemonTypeList, EmptyMyPokemon, MyPokemonMove, MoveKind, EmptyMyPokemonMove, PokemonTypeShort, MoveKindLong, MoveKindList, MoveKindShort, DynamaxMoveNames, getDynamaxMovePower } from './model';
import { PokemonSelect } from './PokemonSelect';
import pokemonDataset from './data/pokemonDataset.json';
import moveDataset from './data/moveDataset.json';

export interface MyPokemonEditorProps {
    value: MyPokemon;
    onChange: (value: MyPokemon) => void;
}

function PokemonTypeSelect(props: { value: PokemonType, onChange: (value: PokemonType) => void, emptyMessage: string }) {
    return (<select value={props.value} onChange={(e) => props.onChange(e.target.value as PokemonType)}>
        {PokemonTypeList.map((pokemonType) => <option key={pokemonType} value={pokemonType}>{pokemonType || props.emptyMessage}</option>)}
    </select>);
}

function MoveInput({ value, onChange }: { value: MyPokemonMove, onChange: (value: MyPokemonMove) => void }) {
    const onSelectMoveName = useCallback((name: string) => {
        const moveInfo = moveDataset.find((m) => m.name === name);
        if (!moveInfo) {
            return;
        }
        onChange({ name, type: moveInfo.type as PokemonType, moveKind: moveInfo.moveKind as MoveKind, power: moveInfo.power });
    }, [onChange]);
    return (<div>
        技名:<select value={value.name} onChange={(e) => onSelectMoveName(e.target.value)}>
            <option value="">---技選択---</option>
            {moveDataset.map((moveInfo) => <option key={moveInfo.name} value={moveInfo.name}>{moveInfo.name}</option>)}
        </select>
        <input type="text" value={value.name} onChange={(e) => onChange({ ...value, name: e.target.value })} />
        <PokemonTypeSelect value={value.type} onChange={(type) => onChange({ ...value, type })} emptyMessage="タイプ" />
        <select value={value.moveKind} onChange={(e) => onChange({ ...value, moveKind: e.target.value as MoveKind })}>
            {MoveKindList.map((moveKind) => <option key={moveKind} value={moveKind}>{MoveKindLong[moveKind]}</option>)}
        </select>
        威力: <input type="number" value={value.power.toString()} min={0} max={999} onChange={(e) => onChange({ ...value, power: Number(e.target.value) })} />
    </div>
    );
}

export function MyPokemonEditor({ value, onChange }: MyPokemonEditorProps) {
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
        onChange({ ...value, name, attrs: { ...value.attrs, type1: d.type1, type2: d.type2 } });
    }, [value, onChange]);
    const onSortMoveClick = useCallback((index: number, direction: number) => {
        const newMoves = [...value.moves];
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= newMoves.length) {
            return;
        }
        const tmp = newMoves[index];
        newMoves[index] = newMoves[newIndex];
        newMoves[newIndex] = tmp;
        onChange({ ...value, moves: newMoves });
    }, [value, onChange]);
    const onDeleteMove = useCallback((index: number) => {
        const newMoves = [...value.moves];
        newMoves.splice(index, 1);
        onChange({ ...value, moves: newMoves });
    }, [value, onChange]);
    return (<div>
        <PokemonSelect value={value.name} onChange={(value) => onSelectPokemon(value)} />
        <PokemonTypeSelect value={value.attrs.type1} onChange={(t) => onChange({ ...value, attrs: { ...value.attrs, type1: t } })} emptyMessage="タイプ1" />
        <PokemonTypeSelect value={value.attrs.type2} onChange={(t) => onChange({ ...value, attrs: { ...value.attrs, type2: t } })} emptyMessage="タイプ2" />
        HP: <input type="number" min={0} max={999} value={value.attrs.hp.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, hp: Number(e.target.value) } })} />
        A: <input type="number" min={0} max={999} value={value.attrs.a.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, a: Number(e.target.value) } })} />
        B: <input type="number" min={0} max={999} value={value.attrs.b.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, b: Number(e.target.value) } })} />
        C: <input type="number" min={0} max={999} value={value.attrs.c.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, c: Number(e.target.value) } })} />
        D: <input type="number" min={0} max={999} value={value.attrs.d.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, d: Number(e.target.value) } })} />
        S: <input type="number" min={0} max={999} value={value.attrs.s.toString()} onChange={(e) => onChange({ ...value, attrs: { ...value.attrs, s: Number(e.target.value) } })} />
        技: <ul>{value.moves.map((move, i) => (
            <li>{move.name}({PokemonTypeShort[move.type]}{move.power}{MoveKindShort[move.moveKind]})
                <button onClick={(e) => onSortMoveClick(i, -1)}>↑</button>
                <button onClick={(e) => onSortMoveClick(i, 1)}>↓</button>
                <button onClick={(e) => onDeleteMove(i)}>🗑</button>
            </li>))}</ul>
        <MoveInput value={newMove} onChange={setNewMove} />
        <button onClick={() => {
            onChange({ ...value, moves: [...value.moves, newMove] });
            setNewMove(EmptyMyPokemonMove);
        }}>技追加</button>
        <MoveInput value={newDynamaxMove} onChange={setNewDinamaxMove} />
        <button onClick={() => {
            onChange({ ...value, moves: [...value.moves, newDynamaxMove] });
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
                            <td><label><input type="checkbox" checked={poke.chosen} onChange={(e) => onChosenChange(i, e.target.checked)} />{poke.name}</label></td>
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
