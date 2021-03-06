/**
 * ポケモン名を http://wiki.pokebattle.net/ でのURLで使われる名前に変換
 * @param pokemonName 
 */
function pokemonNameToCanonical(pokemonName: string): string {
    // 入力：'マタドガス', 'マタドガス (ガラルのすがた)'
    // 出力：'マタドガス', 'マタドガス（ガラルのすがた）'
    // 種族名以外でURLに入るのはリージョンフォルムのみ。

    switch (pokemonName) {
        case 'ポリゴン2':
            return 'ポリゴン２';
        case 'ポリゴンZ':
            return 'ポリゴンＺ';
        case 'タイプ:ヌル':
            return 'タイプ：ヌル（タイプヌル）';
    }

    const baseName = pokemonName.match(/^([ァ-ヴー]+)/)?.[0];
    if (!baseName) {
        return '';
    }

    let suffix = '';
    if (pokemonName.includes('アローラ')) {
        suffix = '（アローラのすがた）';
    } else if (pokemonName.includes('ガラル')) {
        suffix = '（ガラルのすがた）';
    }
    return baseName + suffix;
}

export function pokemonNameToURL(pokemonName: string) {
    return `https://pokemon-wiki.net/${pokemonNameToCanonical(pokemonName)}`;
}
