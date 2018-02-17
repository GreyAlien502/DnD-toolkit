import React from 'react';

import {CharacterBuilder}  from './characterBuilder.jsx';

class CharacterModifier extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    };
    componentWillReceiveProps(prop){
        this.setState({character: prop.character})
    }
    render() {
        return <div>"hello" {this.state.character.name} </div>;
    }

}

export {CharacterModifier}