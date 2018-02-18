import React from 'react';

import {CharacterInfo} from './base.js';

class TeamBuilder extends React.Component {
    constructor(props){
        super(props);
	this.state = props;
    }
    render(){
        return <div>
		this.state.teams.length!=0?<div>
			<ul>
				{this.state.teams.map((team,index)=>
					<li key={index}>{ team.name<button onClick={()=>this.remove(index)}) }</li>
				)}
			</ul>
			<ul>
				{Object.keys(this.state.teams[teamNumber].members).map(id => 
					<li key={id}> <CharacterInfo character={this.state.teams[teamNumber].members[id]}></li>
				)}
			</ul>
		</div> : null
		<ul>
			{this.state.characters.map(character=>
				<li key={character.id}>
					<button onClick={this.putcharacter.id}>&lt;</button>
					<CharacterInfo character={character}/>
				</li>
			) }
        </div>;
    }
}

export {TeamBuilder};
