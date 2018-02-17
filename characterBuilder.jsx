import React from 'react';

class CharacterBuilder extends React.Component {
	constructor(props){
		super(props)
		this.state=props;
	}
	render(){
		return <h1>Character bulider.</h1>;
	}
}

export CharacterBuilder;
