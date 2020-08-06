type PokemonType = '' | 'ノーマル' | 'かくとう' | 'ひこう' | 'どく' | 'じめん' | 'いわ' | 'むし' | 'ゴースト' | 'はがね' | 'ほのお' | 'みず' | 'くさ' | 'でんき' | 'エスパー' | 'こおり' | 'ドラゴン' | 'あく' | 'フェアリー';
interface PokemonData {
    name: string;
    type1: PokemonType;
    type2: PokemonType;
    hp: number;
    a: number;
    b: number;
    c: number;
    d: number;
    s: number;
}

declare module '*/pokemonDataset.json' {
    const value: {[key: string]: PokemonData};
    export default value;
}
