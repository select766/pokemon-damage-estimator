import React from 'react';
import './App.css';
import { MyParty, EmptyMyParty, OpponentParty, EmptyOpponentParty } from './model';
import { MyPartyEditor } from './MyPartyEditor';
import { OpponentPartyEditor } from './OpponentPartyEditor';

function App() {
  const [myParty, setMyParty] = React.useState<MyParty>(EmptyMyParty);
  const [opponentParty, setOpponentParty] = React.useState<OpponentParty>(EmptyOpponentParty);
  return (
    <div className="App">
      <MyPartyEditor value={myParty} onChange={setMyParty} />
      <OpponentPartyEditor value={opponentParty} onChange={setOpponentParty} />
    </div>
  );
}

export default App;
