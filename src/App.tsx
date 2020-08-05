import React from 'react';
import './App.css';
import { MyParty, EmptyMyParty } from './model';
import { MyPartyEditor } from './MyPartyEditor';

function App() {
  const [myParty, setMyParty] = React.useState<MyParty>(EmptyMyParty);
  return (
    <div className="App">
      <MyPartyEditor value={myParty} onChange={setMyParty}/>
    </div>
  );
}

export default App;
