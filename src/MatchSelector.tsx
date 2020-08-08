import { BothParty, MyPokemon, OpponentPokemon } from "./model";
import React, { useCallback } from "react";

export interface SelectedMatch {
    myPokemonIndex: number;
    opponentPokemonIndex: number;
}

export interface SelectedMatchPokemon {
    myPokemon?: MyPokemon;
    opponentPokemon?: OpponentPokemon;
}

export interface MatchSelectorProps {
    party: BothParty;
    selectedMatch: SelectedMatch;
    onChange: (selectedMatch: SelectedMatch, selectedMatchPokemon: SelectedMatchPokemon) => void;
}

function getMatch(party: BothParty, selectedMatch: SelectedMatch): SelectedMatchPokemon {
    return { myPokemon: party.myParty.myPokemons[selectedMatch.myPokemonIndex], opponentPokemon: party.opponentParty.opponentPokemons[selectedMatch.opponentPokemonIndex] };
}

export function MatchSelector({ party, selectedMatch, onChange }: MatchSelectorProps) {
    const setSelectedMyPokemonIndex = useCallback((i) => {
        const newMatch = { ...selectedMatch, myPokemonIndex: i };
        onChange(newMatch, getMatch(party, newMatch));
    }, [party, selectedMatch, onChange]);
    const setSelectedOpponentPokemonIndex = useCallback((i) => {
        const newMatch = { ...selectedMatch, opponentPokemonIndex: i };
        onChange(newMatch, getMatch(party, newMatch));
    }, [party, selectedMatch, onChange]);
    return (
        <div className="MatchSelector">
            <div>自分: {party.myParty.myPokemons.map((myPokemon, i) => myPokemon.chosen && <button key={i} onClick={() => setSelectedMyPokemonIndex(i)} className={i === selectedMatch.myPokemonIndex ? 'selected' : ''}>{myPokemon.name}</button>)}</div>
            <div>相手: {party.opponentParty.opponentPokemons.map((opponentPokemon, i) => opponentPokemon.chosen && <button key={i} onClick={() => setSelectedOpponentPokemonIndex(i)} className={i === selectedMatch.opponentPokemonIndex ? 'selected' : ''}>{opponentPokemon.name}</button>)}</div>
        </div>
    );
}
