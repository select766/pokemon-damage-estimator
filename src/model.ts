export type MoveKind = 'physical' | 'special' | 'status';
export const MoveKindList: MoveKind[] = ['physical', 'special', 'status'];
export const MoveKindLong: { [key in MoveKind]: string } = {
    'physical': '物理',
    'special': '特殊',
    'status': '変化',
};
export const MoveKindShort: { [key in MoveKind]: string } = {
    'physical': '物',
    'special': '特',
    'status': '変',
};

export type PokemonType = '' | 'ノーマル' | 'かくとう' | 'ひこう' | 'どく' | 'じめん' | 'いわ' | 'むし' | 'ゴースト' | 'はがね' | 'ほのお' | 'みず' | 'くさ' | 'でんき' | 'エスパー' | 'こおり' | 'ドラゴン' | 'あく' | 'フェアリー';
export const PokemonTypeList: PokemonType[] = ['', 'ノーマル', 'かくとう', 'ひこう', 'どく', 'じめん', 'いわ', 'むし', 'ゴースト', 'はがね', 'ほのお', 'みず', 'くさ', 'でんき', 'エスパー', 'こおり', 'ドラゴン', 'あく', 'フェアリー'];
export const PokemonTypeShort: { [key in PokemonType]: string } = {
    '': '',
    'ノーマル': 'ノ',
    'かくとう': '格',
    'ひこう': '飛',
    'どく': '毒',
    'じめん': '地',
    'いわ': '岩',
    'むし': '虫',
    'ゴースト': 'ゴ',
    'はがね': '鋼',
    'ほのお': '炎',
    'みず': '水',
    'くさ': '草',
    'でんき': '電',
    'エスパー': 'エ',
    'こおり': '氷',
    'ドラゴン': 'ド',
    'あく': '悪',
    'フェアリー': 'フ',
};

export const DynamaxMoveNames: { [key in PokemonType]: string } = {
    '': 'ダイウォール',
    'ノーマル': 'ダイアタック',
    'かくとう': 'ダイナックル',
    'ひこう': 'ダイジェット',
    'どく': 'ダイアシッド',
    'じめん': 'ダイアース',
    'いわ': 'ダイロック',
    'むし': 'ダイワーム',
    'ゴースト': 'ダイホロウ',
    'はがね': 'ダイスチル',
    'ほのお': 'ダイバーン',
    'みず': 'ダイストリーム',
    'くさ': 'ダイソウゲン',
    'でんき': 'ダイサンダー',
    'エスパー': 'ダイサイコ',
    'こおり': 'ダイアイス',
    'ドラゴン': 'ダイドラグーン',
    'あく': 'ダイアーク',
    'フェアリー': 'ダイフェアリー',
};

export function getDynamaxMovePower(type: PokemonType, originalPower: number): number {
    if (type === 'かくとう' || type === 'どく') {
        if (originalPower <= 40) {
            return 70;
        } else if (originalPower <= 50) {
            return 75;
        } else if (originalPower <= 60) {
            return 80;
        } else if (originalPower <= 70) {
            return 85;
        } else if (originalPower <= 100) {
            return 90;
        } else if (originalPower <= 140) {
            return 95;
        } else {
            return 100;
        }
    } else {
        if (originalPower <= 40) {
            return 90;
        } else if (originalPower <= 50) {
            return 100;
        } else if (originalPower <= 60) {
            return 110;
        } else if (originalPower <= 70) {
            return 120;
        } else if (originalPower <= 100) {
            return 130;
        } else if (originalPower <= 140) {
            return 140;
        } else {
            return 150;
        }
    }
}

export interface PokemonData {
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

export interface MyPokemonMove {
    name: string;
    type: PokemonType;
    moveKind: MoveKind;
    power: number;//威力, 変化技は0
}

export const EmptyMyPokemonMove: MyPokemonMove = {
    name: '',
    type: 'ノーマル',
    moveKind: 'physical',
    power: 0,
};

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
    attrs: { type1: '', type2: '', hp: 0, a: 0, b: 0, c: 0, d: 0, s: 0 },
    moves: [],
    chosen: true,
};

export interface MyParty {
    myPokemons: MyPokemon[];
}

export const EmptyMyParty = {
    myPokemons: []
};

export interface OpponentPokemon {
    name: string;
    chosen: boolean;
}

export interface OpponentParty {
    opponentPokemons: OpponentPokemon[];
}

export const EmptyOpponentParty: OpponentParty = {
    opponentPokemons: []
};

export interface BothParty {
    myParty: MyParty;
    opponentParty: OpponentParty;
}

export const EmptyBothParty: BothParty = {
    myParty: EmptyMyParty,
    opponentParty: EmptyOpponentParty,
};

// [技タイプ][受けるポケモンのタイプ] = ダメージ補正*2
export const typeMatch: { [key in PokemonType]: { [key in PokemonType]: number } } = {
    '': {
        '': 2,
        'かくとう': 2,
        'ノーマル': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 2,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 2,
    },
    'ノーマル': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 1,
        'むし': 2,
        'ゴースト': 0,
        'はがね': 1,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 2,
    },
    'かくとう': {
        '': 2,
        'ノーマル': 4,
        'かくとう': 2,
        'ひこう': 1,
        'どく': 1,
        'じめん': 2,
        'いわ': 4,
        'むし': 1,
        'ゴースト': 0,
        'はがね': 4,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 1,
        'こおり': 4,
        'ドラゴン': 2,
        'あく': 4,
        'フェアリー': 1,
    },
    'ひこう': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 4,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 1,
        'むし': 4,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 2,
        'みず': 2,
        'くさ': 4,
        'でんき': 1,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 2,
    },
    'どく': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 1,
        'じめん': 1,
        'いわ': 1,
        'むし': 2,
        'ゴースト': 1,
        'はがね': 0,
        'ほのお': 2,
        'みず': 2,
        'くさ': 4,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 4,
    },
    'じめん': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 0,
        'どく': 4,
        'じめん': 2,
        'いわ': 4,
        'むし': 1,
        'ゴースト': 2,
        'はがね': 4,
        'ほのお': 4,
        'みず': 2,
        'くさ': 1,
        'でんき': 4,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 2,
    },
    'いわ': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 1,
        'ひこう': 4,
        'どく': 2,
        'じめん': 1,
        'いわ': 2,
        'むし': 4,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 4,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 4,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 2,
    },
    'むし': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 1,
        'ひこう': 1,
        'どく': 1,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 1,
        'はがね': 1,
        'ほのお': 1,
        'みず': 2,
        'くさ': 4,
        'でんき': 2,
        'エスパー': 4,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 4,
        'フェアリー': 1,
    },
    'ゴースト': {
        '': 2,
        'ノーマル': 0,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 4,
        'はがね': 2,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 4,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 1,
        'フェアリー': 2,
    },
    'はがね': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 4,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 1,
        'みず': 1,
        'くさ': 2,
        'でんき': 1,
        'エスパー': 2,
        'こおり': 4,
        'ドラゴン': 2,
        'あく': 2,
        'フェアリー': 4,
    },
    'ほのお': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 1,
        'むし': 4,
        'ゴースト': 2,
        'はがね': 4,
        'ほのお': 1,
        'みず': 1,
        'くさ': 4,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 4,
        'ドラゴン': 1,
        'あく': 2,
        'フェアリー': 2,
    },
    'みず': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 4,
        'いわ': 4,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 2,
        'ほのお': 4,
        'みず': 1,
        'くさ': 1,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 1,
        'あく': 2,
        'フェアリー': 2,
    },
    'くさ': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 1,
        'どく': 1,
        'じめん': 4,
        'いわ': 4,
        'むし': 1,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 1,
        'みず': 4,
        'くさ': 1,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 1,
        'あく': 2,
        'フェアリー': 2,
    },
    'でんき': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 4,
        'どく': 2,
        'じめん': 0,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 2,
        'ほのお': 2,
        'みず': 4,
        'くさ': 1,
        'でんき': 1,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 1,
        'あく': 2,
        'フェアリー': 2,
    },
    'エスパー': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 4,
        'ひこう': 2,
        'どく': 4,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 1,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 0,
        'フェアリー': 2,
    },
    'こおり': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 4,
        'どく': 2,
        'じめん': 4,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 1,
        'みず': 1,
        'くさ': 4,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 1,
        'ドラゴン': 4,
        'あく': 2,
        'フェアリー': 2,
    },
    'ドラゴン': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 2,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 4,
        'あく': 2,
        'フェアリー': 0,
    },
    'あく': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 1,
        'ひこう': 2,
        'どく': 2,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 4,
        'はがね': 2,
        'ほのお': 2,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 4,
        'こおり': 2,
        'ドラゴン': 2,
        'あく': 1,
        'フェアリー': 1,
    },
    'フェアリー': {
        '': 2,
        'ノーマル': 2,
        'かくとう': 4,
        'ひこう': 2,
        'どく': 1,
        'じめん': 2,
        'いわ': 2,
        'むし': 2,
        'ゴースト': 2,
        'はがね': 1,
        'ほのお': 1,
        'みず': 2,
        'くさ': 2,
        'でんき': 2,
        'エスパー': 2,
        'こおり': 2,
        'ドラゴン': 4,
        'あく': 4,
        'フェアリー': 2,
    },
};