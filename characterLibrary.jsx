import React from 'react';

class CharacterLibrary extends React.Component {
	constructor(props){
		super(props)
		this.state=props;
	}

	handleClick = (buttonName) => {
		let i = 0;
		for (i=0; i < this.state.characters.length; i++) {

		}
	}

	render(){
		return <div></div>
            <button
				onclick={this.handleClick}>
					Click me
				</button>;
	}
}



export {CharacterLibrary};
