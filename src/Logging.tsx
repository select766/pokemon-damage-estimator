import React, { useState, useCallback, useRef, useEffect } from 'react';
import { OpponentParty, BothParty } from './model';
import { PokemonSelect } from './PokemonSelect';
import { SelectedMatchPokemon } from './MatchSelector';
import { appendLog, getLog, clearLog } from './logSaver';

export interface LoggingProps {
    party: BothParty;
    selectedMatchPokemon: SelectedMatchPokemon;
}

function putMessage(message: string) {
    appendLog(message);
}

export function Logging({ party, selectedMatchPokemon }: LoggingProps) {
    const [message, setMessage] = useState('');
    const [displayMessage, setDisplayMessage] = useState(false);
    const [savedMessage, setSavedMessage] = useState('');
    const onTextareaKeydown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            const fullMessage = `${(new Date()).toISOString()}\n${selectedMatchPokemon.myPokemon?.name} vs ${selectedMatchPokemon.opponentPokemon?.name}:\n${message}\n\n`;
            putMessage(fullMessage);
            setMessage('');
        }
    }, [selectedMatchPokemon, message]);

    useEffect(() => {
        if (displayMessage) {
            setSavedMessage(getLog());
        }
    }, [displayMessage]);

    const onGameEndClick = useCallback((gameResult: string) => {
        const result = `バトル終了: ${gameResult}`;
        const myChoices = party.myParty.myPokemons.map((poke) => `${poke.chosen ? '☆' : ''}${poke.name}`).join(' ');
        const opponentChoices = party.opponentParty.opponentPokemons.map((poke) => `${poke.chosen ? '☆' : ''}${poke.name}`).join(' ');
        const fullMessage = `${(new Date()).toISOString()}\n${result}\n自分選出: ${myChoices}\n相手選出: ${opponentChoices}\n\n------------\n\n`;
        putMessage(fullMessage);
    }, [party]);

    const onClearLogClick = useCallback(() => {
        clearLog();
        setDisplayMessage(false);
    }, []);

    return (<div className="Logging">
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={onTextareaKeydown} />
        </div>
        <div>
            <button onClick={() => onGameEndClick('勝ち')}>勝ち</button><button onClick={() => onGameEndClick('負け')}>負け</button><button onClick={() => onGameEndClick('その他')}>他終了</button>
            <label><input type="checkbox" checked={displayMessage} onChange={(e) => setDisplayMessage(e.target.checked)} />ログ表示</label>
        </div>
        {
            displayMessage && (<div><textarea value={savedMessage} /><button onClick={() => onClearLogClick()}>消去</button></div>)
        }
    </div>);
}
