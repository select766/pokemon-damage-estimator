export type MoveKind = 'physical' | 'special' | 'status';

export type PokemonType = '' | 'ノーマル' | 'ひこう' | 'どく' | 'じめん' | 'いわ' | 'むし' | 'ゴースト' | 'はがね' | 'ほのお' | 'みず' | 'くさ' | 'でんき' | 'エスパー' | 'こおり' | 'ドラゴン' | 'あく' | 'フェアリー';
export const PokemonTypeList: PokemonType[] = ['', 'ノーマル', 'ひこう', 'どく', 'じめん', 'いわ', 'むし', 'ゴースト', 'はがね', 'ほのお', 'みず', 'くさ', 'でんき', 'エスパー', 'こおり', 'ドラゴン', 'あく', 'フェアリー'];

export interface MyPokemonMove {
    name: string;
    type: PokemonType;
    moveKind: MoveKind;
    attack: number;//威力, 変化技は0
}

export const EmptyMyPokemonMove: MyPokemonMove = {
    name: '',
    type: 'ノーマル',
    moveKind: 'physical',
    attack: 0,
}

export interface MyPokemonAttrs {
    type1: PokemonType;
    type2: PokemonType;
    hp: number;// 実数値
    a: number;
    b: number;
    c: number;
    d: number;
    s: number;
}

export interface MyPokemon {
    name: string;
    attrs: MyPokemonAttrs;
    moves: MyPokemonMove[];
    chosen: boolean;
}

export const EmptyMyPokemon: MyPokemon = {
    name: '',
    attrs: {type1: '', type2: '', hp: 0, a: 0, b: 0, c: 0, d: 0, s: 0},
    moves: [],
    chosen: true,
}

export interface MyParty {
    myPokemons: MyPokemon[];
}

export const EmptyMyParty = {
    myPokemons: []
}

export interface OpponentPokemon {
    name: string;
    chosen: boolean;
}

export interface OpponentParty {
    opponentPokemons: OpponentPokemon[];
}

export const EmptyOpponentParty: OpponentParty = {
    opponentPokemons: []
}
