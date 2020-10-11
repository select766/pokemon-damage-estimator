import React, { useMemo, useRef } from 'react';
import { pokemonNameToURL } from './pokemonNameToUrlPokedb';

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
