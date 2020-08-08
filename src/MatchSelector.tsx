import { MyParty, OpponentParty, BothParty, MyPokemon, OpponentPokemon } from "./model";
import React, { useState, useCallback } from "react";

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
        <div>
            <div>自分: {party.myParty.myPokemons.map((myPokemon, i) => <button key={i} onClick={() => setSelectedMyPokemonIndex(i)}>{i === selectedMatch.myPokemonIndex && '*'}{myPokemon.name}</button>)}</div>
            <div>相手: {party.opponentParty.opponentPokemons.map((opponentPokemon, i) => <button key={i} onClick={() => setSelectedOpponentPokemonIndex(i)}>{i === selectedMatch.opponentPokemonIndex && '*'}{opponentPokemon.name}</button>)}</div>
        </div>
    );
}
