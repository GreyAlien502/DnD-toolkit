import React from 'react';

import {CharacterInfo} from './base.jsx';

class Fight extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
	}
	render(){
	}
}

class TeamViewer extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
		"team, characters"
	}
	render(){
		let getCharacter=(id)=>this.state.characters.filter(character=>character.id==id)[0];
		return this.state.team?
			<div>
				<h1>{this.state.team.name}</h1>
				<ul>
					{Object.keys(this.state.team.members).map(character=>
						<li key={character.id}>
							<CharacterInfo character={getCharacter(character.id)}/>
						</li>
					)}
				</ul>
			</div>:
			"none.";

	}
}
class TeamSelect extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
	}
	render(){
		return <div>
			<TeamViewer
				team={this.state.team1}
				characters={this.state.characters}
			/>
			<ul>
				{this.state.teams.map((team,index)=>
					<li key={index}>
						{team.name}
						<button onClick={()=>this.setState({team1:team})}>&lt;-</button>
						<button onClick={()=>this.setState({team1:team})}>-&gt;</button>
					</li>
				)}
			</ul>
			<TeamViewer
				team={this.state.team1}
				characters={this.state.characters}
			/>
			<button onClick={()=>this.state.fight()}>Go</button>
		</div>;
	}
}


class CombatSimulator extends React.Component {
	constructor(props){
		super(props);
		this.state=Object.assign(
			{
				stage:'teamselect',
				team1:null,
				team2:null
			},
			props
		);
	}
	render(){
		return (<div>
			{
				{
					'teamselect': <TeamSelect
						team1={this.state.team1}
						team2={this.state.team2}
						teams={this.state.teams}
						characters={this.state.characters}
					/>,
					'fite': <Fight
						teams={this.state.teams}
						characters={this.state.characters}
					/>
				}[this.state.stage]
			}
		</div>);
	}
}

export {CombatSimulator};
