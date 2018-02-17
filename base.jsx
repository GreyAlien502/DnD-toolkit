import React from 'react';

class CharacterInfo extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
	}
	render(){
		return (<div>
			{"{name} Level:{level} {job} AC:{ac} HP:{hp} STR:{str} INT:{int} WIS:{wis} DEX:{dex} CON:{con} CHA:{cha}".format(this.state)}
		</div>);
	}

	renderHP(){
		return "HP: "+this.state.hpMax;
	}
}

export {CharacterInfo};
