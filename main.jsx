console.log('aeua');
import React from 'react';
import ReactDOM from 'react-dom';

import {CharacterBuilder}  from './characterBuilder.jsx';
import {CombatSimulator} from './combatSimulator.jsx';
import {CharacterLibrary} from './characterLibrary.jsx';


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
		return (<div>
			<button onClick={()=>this.setState({'mode':'character builder'})}>
				Character Builder
			</button>
			<button onClick={()=>this.setState({'mode':'combat simulator'})}>
				Combat Simulator
			</button>
			<button onClick={()=>this.setState({'mode':'character library'})}>
				Character Library
			</button>
			{{
				'character builder': <CharacterBuilder addCharacter={()=>0}/>,
				'combat simulator': (<CombatSimulator
					characters={this.state.characters}
					teams={this.state.teams}
				/>),
				'character library': (<CharacterLibrary
					characters={this.state.characters}
					teams={this.state.teams}
					update={()=>0}
				/>)
			}[this.state.mode]}
		</div>);
	}
}

ReactDOM.render(
	<Main/>,
	document.getElementById('main')
);
