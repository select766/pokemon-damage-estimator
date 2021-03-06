import React from 'react';
import pokemonDataset from './data/pokemonDataset.json';
import { MyPokemon, PokemonType, PokemonTypeList, MyPokemonMove, MoveKind, PokemonTypeShort, OpponentPokemon, PokemonData, BothParty } from './model';
import { CalcStatusNonHP, defaultLevel, ivMax, evMax, evMin, ivMin, CalcDamage, CalcStatusHP, GetTypeMatchCharacter, IsSameTypeMove } from './damage';
import { SelectedMatchPokemon } from './MatchSelector';

function BaseStatView({ pokemonName }: { pokemonName: string }) {
    const d = pokemonDataset[pokemonName as keyof typeof pokemonDataset] as PokemonData;
    if (!d) {
        return null;
    }
    return (<table>
        <thead><tr><th></th><th>タイプ</th><th>H</th><th>A</th><th>B</th><th>C</th><th>D</th><th>S</th></tr></thead>
        <tbody><tr>
            <td>{d.name}</td>
            <td>{PokemonTypeShort[d.type1 as PokemonType]}{PokemonTypeShort[d.type2 as PokemonType]}</td>
            <td className='numeric'>{d.hp}</td>
            <td className='numeric'>{d.a}</td>
            <td className='numeric'>{d.b}</td>
            <td className='numeric'>{d.c}</td>
            <td className='numeric'>{d.d}</td>
            <td className='numeric'>{d.s}</td>
        </tr></tbody>
    </table>);
}

function SpeedView({ myPokemon, opponentPokemon }: { myPokemon: MyPokemon, opponentPokemon: OpponentPokemon }) {
    const d = pokemonDataset[opponentPokemon.name as keyof typeof pokemonDataset] as PokemonData;
    if (!d) {
        return null;
    }

    const saisoku = CalcStatusNonHP(d.s, ivMax, evMax, 1, defaultLevel);
    const junsoku = CalcStatusNonHP(d.s, ivMax, evMax, 0, defaultLevel);
    const saisokuscarf = saisoku * 1.5 | 0;
    const junsokuscarf = junsoku * 1.5 | 0;
    const mufuri = CalcStatusNonHP(d.s, ivMax, evMin, 0, defaultLevel);
    const saiti = CalcStatusNonHP(d.s, ivMin, evMin, -1, defaultLevel);
    return (<table>
        <thead><tr><th>自分</th><th>最速</th><th>準速</th><th>最ス</th><th>準ス</th><th>無振</th><th>最遅</th></tr></thead>
        <tbody><tr>
            <td className='numeric'>{myPokemon.attrs.s.toString()}</td>
            <td className='numeric'>{saisoku.toString()}</td>
            <td className='numeric'>{junsoku.toString()}</td>
            <td className='numeric'>{saisokuscarf.toString()}</td>
            <td className='numeric'>{junsokuscarf.toString()}</td>
            <td className='numeric'>{mufuri.toString()}</td>
            <td className='numeric'>{saiti.toString()}</td>
        </tr></tbody>
    </table>)
}

function AttackDamageOneMove({ myPokemon, move, opponentData }: { myPokemon: MyPokemon, move: MyPokemonMove, opponentData: PokemonData }) {
    if (move.moveKind === 'status' || move.power === 0) {
        return null;
    }
    const attack = move.moveKind === 'physical' ? myPokemon.attrs.a : myPokemon.attrs.c;
    const defendBase = move.moveKind === 'physical' ? opponentData.b : opponentData.d;
    const allmax = CalcDamage(move.power, attack, CalcStatusNonHP(defendBase, ivMax, evMax, 1, defaultLevel), defaultLevel, move.type, myPokemon.attrs.type1, myPokemon.attrs.type2, opponentData.type1, opponentData.type2) / CalcStatusHP(opponentData.hp, ivMax, evMax, defaultLevel);
    const hpmax = CalcDamage(move.power, attack, CalcStatusNonHP(defendBase, ivMax, evMin, 0, defaultLevel), defaultLevel, move.type, myPokemon.attrs.type1, myPokemon.attrs.type2, opponentData.type1, opponentData.type2) / CalcStatusHP(opponentData.hp, ivMax, evMax, defaultLevel);
    const mufuri = CalcDamage(move.power, attack, CalcStatusNonHP(defendBase, ivMax, evMin, 0, defaultLevel), defaultLevel, move.type, myPokemon.attrs.type1, myPokemon.attrs.type2, opponentData.type1, opponentData.type2) / CalcStatusHP(opponentData.hp, ivMax, evMin, defaultLevel);
    return (<tr>
        <td>{move.name}</td>
        <td className={IsSameTypeMove(move.type, myPokemon.attrs.type1, myPokemon.attrs.type2) ? 'sameTypeMove' : ''}>{GetTypeMatchCharacter(move.type, opponentData.type1, opponentData.type2)}</td>
        <td className='numeric'>{allmax * 100 | 0}</td>
        <td className='numeric'>{hpmax * 100 | 0}</td>
        <td className='numeric'>{mufuri * 100 | 0}</td>
    </tr>);
}

function AttackDamageView({ myPokemon, opponentPokemon }: { myPokemon: MyPokemon, opponentPokemon: OpponentPokemon }) {
    const opponentData = pokemonDataset[opponentPokemon.name as keyof typeof pokemonDataset] as PokemonData;
    if (!opponentData) {
        return null;
    }

    return (<table>
        <thead><tr><th>技</th><th></th><th>最硬</th><th>H大</th><th>無振</th></tr></thead>
        <tbody>
            {myPokemon.moves.map((move, i) => <AttackDamageOneMove key={i} myPokemon={myPokemon} move={move} opponentData={opponentData} />)}
        </tbody>
    </table>)
}

function DefendDamageOneMove({ myPokemon, move, opponentData }: { myPokemon: MyPokemon, move: MyPokemonMove, opponentData: PokemonData }) {
    if (move.moveKind === 'status' || move.power === 0) {
        return null;
    }
    const attackBase = move.moveKind === 'physical' ? opponentData.a : opponentData.c;
    const defend = move.moveKind === 'physical' ? myPokemon.attrs.b : myPokemon.attrs.d;
    const allmax = CalcDamage(move.power, CalcStatusNonHP(attackBase, ivMax, evMax, 1, defaultLevel), defend, defaultLevel, move.type, opponentData.type1, opponentData.type2, myPokemon.attrs.type1, myPokemon.attrs.type2) / myPokemon.attrs.hp;
    const nonatureup = CalcDamage(move.power, CalcStatusNonHP(attackBase, ivMax, evMax, 0, defaultLevel), defend, defaultLevel, move.type, opponentData.type1, opponentData.type2, myPokemon.attrs.type1, myPokemon.attrs.type2) / myPokemon.attrs.hp;
    const mufuri = CalcDamage(move.power, CalcStatusNonHP(attackBase, ivMax, evMin, 0, defaultLevel), defend, defaultLevel, move.type, opponentData.type1, opponentData.type2, myPokemon.attrs.type1, myPokemon.attrs.type2) / myPokemon.attrs.hp;
    return (<tr>
        <td>{move.name}</td>
        <td className={IsSameTypeMove(move.type, opponentData.type1, opponentData.type2) ? 'sameTypeMove' : ''}>{GetTypeMatchCharacter(move.type, myPokemon.attrs.type1, myPokemon.attrs.type2)}</td>
        <td className='numeric'>{allmax * 100 | 0}</td>
        <td className='numeric'>{nonatureup * 100 | 0}</td>
        <td className='numeric'>{mufuri * 100 | 0}</td>
    </tr>);
}

function DefendDamageView({ myPokemon, opponentPokemon }: { myPokemon: MyPokemon, opponentPokemon: OpponentPokemon }) {
    const opponentData = pokemonDataset[opponentPokemon.name as keyof typeof pokemonDataset] as PokemonData;
    if (!opponentData) {
        return null;
    }

    return <>{(['physical', 'special'] as MoveKind[]).map((moveKind: MoveKind) => {
        const moveKindString = moveKind === 'physical' ? '物' : '特'; return (<table key={moveKind}>
            <thead><tr><th>技</th><th></th><th>最大</th><th>準大</th><th>無振</th></tr></thead>
            <tbody>
                {PokemonTypeList.map((type) => {
                    return <DefendDamageOneMove key={type} myPokemon={myPokemon} move={{ name: `${PokemonTypeShort[type]}${moveKindString}`, moveKind, type, power: 100 }} opponentData={opponentData} />
                })
                }
            </tbody>
        </table>);
    }
    )}</>;
}

export interface DamageViewProps {
    party: BothParty;
    selectedMatchPokemon: SelectedMatchPokemon;
}

export function DamageView({ selectedMatchPokemon }: DamageViewProps) {
    const myPokemon = selectedMatchPokemon.myPokemon;
    const opponentPokemon = selectedMatchPokemon.opponentPokemon;
    return (
        <div className="DamageView">
            <div className="DamageViewBasic">
                {opponentPokemon && <BaseStatView pokemonName={opponentPokemon.name} />}
                {myPokemon && opponentPokemon && <SpeedView myPokemon={myPokemon} opponentPokemon={opponentPokemon} />}
            </div>
            <div className="DamageViewDamage">
                {myPokemon && opponentPokemon && <AttackDamageView myPokemon={myPokemon} opponentPokemon={opponentPokemon} />}
                {myPokemon && opponentPokemon && <DefendDamageView myPokemon={myPokemon} opponentPokemon={opponentPokemon} />}
            </div>
        </div>
    );
}
