import React from 'react';

import {CharacterBuilder}  from './characterBuilder.jsx';

class CharacterModifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

    };
    componentWillReceiveProps(prop){
        this.setState({character: prop.character});
    }

    handleChange(event) {
        var tempChar = this.state.character.name;
        tempChar = event.target.value;
        this.setState({name: tempChar, });
        console.log(this.state.character.name);
    }

    handleSubmmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value}
                    onChange={(e) =>this.handleChange(e)} />
                </label>
                <input type="submit" value="Submit" onChange={this.handleChange}/>
            </form>
        );
    }

}

export {CharacterModifier}