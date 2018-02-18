import React from 'react';
import ReactDOM from 'react-dom';

import {CharacterBuilder}  from './characterBuilder.jsx';
import {CombatSimulator} from './combatSimulator.jsx';
import {CharacterLibrary} from './characterLibrary.jsx';


class Main extends React.Component {
	constructor(props) {
		super(props);
		let charData = JSON.parse(window.localStorage.getItem('characterData'));
		this.state = {
			characters: charData?charData.characters:[],
			teams: charData?charData.teams:['default'],
			mode: 'character builder'
		};
	}
	render() {
		let addCharacter = character => {
			let newCharacter = Object.assign(
				{id:(new Date()).getTime()},
				character
			);
			let characters = this.state.characters.slice();
			characters.push(newCharacter);
			this.setState({characters:characters});
			this.save();
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
                    addCharacter={(character)=>addCharacter(character)}
				/>)
			}[this.state.mode]}
		</div>);
	}
	save(){
		window.localStorage.setItem('characterData',JSON.stringify(Object.assign( {
			teams:this.state.teams,
			characters:this.state.characters
		} )));
	}
}

ReactDOM.render(
	<Main/>,
	document.getElementById('main')
);
