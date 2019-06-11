//jshint esversion:6
import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    render() {
        return (
            <div>
                <Die face='five' />
                <Die face='six' />
                <Die face='three' />
                <Die face='two' />
                <br /><br />
                <button>Roll Them Thangs!!</button>
            </div>
        )
    }
}

export default RollDice;