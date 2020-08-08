import React, { useMemo, useRef } from 'react';

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

function pokemonNameToURL(pokemonName: string) {
    return `http://wiki.pokebattle.net/${pokemonNameToCanonical(pokemonName)}`;
}

function pushCachedUrl(cachedUrls: string[], url: string): string[] {
    cachedUrls = cachedUrls.filter((cachedUrl) => cachedUrl !== url);
    cachedUrls.unshift(url);
    cachedUrls = cachedUrls.slice(0, 10);
    return cachedUrls;
}

export function ExternalSiteView(props: { pokemonName: string }) {
    const url = useMemo(() => pokemonNameToURL(props.pokemonName), [props.pokemonName]);
    const cachedUrls = useRef<string[]>([]);
    cachedUrls.current = pushCachedUrl(cachedUrls.current, url);
    return (<div className="ExternalSiteView">
        <div className="wikiLink">対戦wiki: <a href={url} target="_blank" rel='noreferrer noopener'>{url}</a></div>
        {cachedUrls.current.map((cachedUrl) => <iframe key={cachedUrl} style={{ display: cachedUrl === url ? 'block' : 'none' }} title="External Site" src={cachedUrl} referrerPolicy='no-referrer'></iframe>)}
    </div>)
}
