import React, { useCallback } from 'react';
import { MyParty, OpponentParty, BothParty } from './model';
import { MyPartyEditor } from './MyPartyEditor';
import { OpponentPartyEditor } from './OpponentPartyEditor';

export function PartyEditor(props: { party: BothParty, onChange: (party: BothParty) => void }) {
    const setMyParty = useCallback((newMyParty: MyParty) => {
        props.onChange({ ...props.party, myParty: newMyParty });
    }, [props.party, props.onChange]);
    const setOpponentParty = useCallback((newOpponentParty: OpponentParty) => {
        props.onChange({ ...props.party, opponentParty: newOpponentParty });
    }, [props.party, props.onChange]);

    return (
        <div className="PartyEditor">
            <OpponentPartyEditor value={props.party.opponentParty} onChange={setOpponentParty} />
            <MyPartyEditor value={props.party.myParty} onChange={setMyParty} />
        </div>
    );
}
