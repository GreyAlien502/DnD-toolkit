import React from 'react';
import ReactDOM from 'react-dom';

import {CharacterBuilder}  from './characterBuilder.jsx';
import {CombatSimulator} from './combatSimulator.jsx';
import {CharacterLibrary} from './characterLibrary.jsx';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: [],
			teams: [],
			mode: 'character builder'
		};
		window.localStorage.setItem('characterData',JSON.stringify(this.state))
	}
	render() {
		let addCharacter = character => {
			console.log(character);
			let newCharacter = Object.assign(
				{id:(new Date()).getTime()},
				character
			);
			let characters = this.state.characters.slice();
			characters.push(newCharacter);
			window.localStorage.setItem('characterData',JSON.stringify(Object.assign( {
				teams:this.state,
				characters
			} )));
			this.update();
		};
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
				'character builder': <CharacterBuilder addCharacter={(character)=>addCharacter(character)}/>,
				'combat simulator': (<CombatSimulator
					characters={this.state.characters}
					teams={this.state.teams}
				/>),
				'character library': (<CharacterLibrary
					characters={this.state.characters}
					teams={this.state.teams}
					update={(newState)=>this.setState(newState)}
				/>)
			}[this.state.mode]}
		</div>);
	}
	update(CharData){
		let characterData = JSON.parse(window.localStorage.getItem('characterData'));
		this.setState({
			characters:characterData.characters,
			teams:characterData.teams
		});
	}
}

ReactDOM.render(
	<Main/>,
	document.getElementById('main')
);
