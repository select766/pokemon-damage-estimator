import React from 'react';
import './App.css';
import { MyParty, EmptyMyParty, OpponentParty, EmptyOpponentParty } from './model';
import { MyPartyEditor } from './MyPartyEditor';
import { OpponentPartyEditor } from './OpponentPartyEditor';
import { useLocation, useHistory } from 'react-router-dom';

function App() {
  const location = useLocation();
  const history = useHistory();

  const urlSearchParams = new URLSearchParams(location.search);
  const partyJSON = urlSearchParams.get('party');
  const party: { myParty: MyParty, opponentParty: OpponentParty } = partyJSON ? JSON.parse(partyJSON) : { myParty: EmptyMyParty, opponentParty: EmptyOpponentParty };
  const setMyParty = (newMyParty: MyParty) => {
    history.push(`/?party=${JSON.stringify({ ...party, myParty: newMyParty })}`);
  }
  const setOpponentParty = (newOpponentParty: OpponentParty) => {
    history.push(`/?party=${JSON.stringify({ ...party, opponentParty: newOpponentParty })}`);
  }

  return (
    <div className="App">
      <MyPartyEditor value={party.myParty} onChange={setMyParty} />
      <OpponentPartyEditor value={party.opponentParty} onChange={setOpponentParty} />
    </div>
  );
}

export default App;
