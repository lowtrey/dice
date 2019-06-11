//jshint esversion:6
import React from 'react';
import './Die.css';

class Die extends React.Component {
    render() {
        return <i className={`Die fas fa-dice-${this.props.face}`} />;
    }
}

export default Die;

//"fas fa-dice-five"