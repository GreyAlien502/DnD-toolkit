console.log('aeua');
import React from 'react';
import ReactDOM from 'react-dom';

import { CharacterBuilder } from './characterBuilder.jsx';
import { CombatSimulator } from './combatSimulator.jsx';
import { CharacterLibrary } from './characterLibrary.jsx';


class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('aeuaeu');
		this.state = {
			characters: [],
			teams: [],
			mode: 'character builder'
		};
	}
	render() {
		switch (this.state.mode){
			case 'character builder':
				return (<CharacterBuilder addCharacter={()=>0} />);
			case 'combat simulator':
				return (<CombatSimulator
					characters={this.state.characters}
					teams={this.state.teams}
				/>);
			case 'character library':
				return (<CharacterLibrary
						characters={this.state.characters}
						teams={this.state.teams}
						update={()=>0}
					/>);
		}
	}
}

ReactDOM.render(
	<Main/>,
	document.getElementById('main')
);
