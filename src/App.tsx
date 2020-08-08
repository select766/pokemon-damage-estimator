import React, { useMemo, useState, useCallback } from 'react';
import './App.css';
import { BothParty, EmptyBothParty } from './model';
import { useLocation, useHistory } from 'react-router-dom';
import { DamageView } from './DamageView';
import { ExternalSiteView } from './ExternalSiteView';
import { PartyEditor } from './PartyEditor';
import { MatchSelector, SelectedMatch, SelectedMatchPokemon } from './MatchSelector';

function App() {
  const location = useLocation();
  const history = useHistory();

  const urlSearchParams = new URLSearchParams(location.search);
  const partyJSON = urlSearchParams.get('party');
  const party = useMemo(() => partyJSON ? JSON.parse(partyJSON) : EmptyBothParty, [partyJSON]);
  const setParty = (party: BothParty) => {
    history.push(`/?party=${JSON.stringify(party)}`);
  }
  const [displayPartyEditor, setDisplayPartyEditor] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<SelectedMatch>({ myPokemonIndex: 0, opponentPokemonIndex: 0 });
  const [selectedMatchPokemon, setSelectedMatchPokemon] = useState<SelectedMatchPokemon>({});
  const onMatchSelectorChange = useCallback((selectedMatch: SelectedMatch, selectedMatchPokemon: SelectedMatchPokemon) => {
    setSelectedMatch(selectedMatch);
    setSelectedMatchPokemon(selectedMatchPokemon);
  }, []);

  return (
    <div className="App">
      <div>
        <input type="checkbox" checked={displayPartyEditor} onChange={(e) => setDisplayPartyEditor(e.target.checked)} />
        <div style={{ display: displayPartyEditor ? "block" : "none" }}>
          <PartyEditor party={party} onChange={setParty} />
          <div className="about">ポケモンバトルのダメージ予測ツール <a href="https://github.com/select766/pokemon-damage-estimator">https://github.com/select766/pokemon-damage-estimator</a></div>
        </div>
      </div>
      <div>
        <MatchSelector party={party} selectedMatch={selectedMatch} onChange={onMatchSelectorChange} />
        <DamageView party={party} selectedMatchPokemon={selectedMatchPokemon} />
      </div>
      <ExternalSiteView pokemonName={selectedMatchPokemon.opponentPokemon?.name || ''} />
    </div>
  );
}

export default App;
