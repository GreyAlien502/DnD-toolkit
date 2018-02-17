import React from 'react';

class CharacterInfo extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
	}
	render(){
		return (<div>
			{`${this.state.character.name} Level:${this.state.character.level} ${this.state.character.job} AC:${this.state.character.ac} HP:${this.state.character.hpMax} STR:${this.state.character.str} INT:${this.state.character.int} WIS:${this.state.character.wis} DEX:${this.state.character.dex} CON:${this.state.character.con} CHA:${this.state.character.cha}`}
		</div>);
	}
	componentWillReceiveProps(props){
		this.state = props;
	}

	renderHP(){
		return "HP: "+ this.state.hpMax;
	}
}

export {CharacterInfo};
