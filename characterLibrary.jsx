import React from 'react';

class CharacterLibrary extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	characters: props.characters,
			teams: props.teams,
            isCharToggleOn: false,
            isTeamToggleOn: false
        };
    }
    handleCharToggle () {
		console.log("say hi");
        this.setState({
            isCharToggleOn: !this.state.isCharToggleOn
		});
    }

    handleTeamToggle () {
		this.setState({
			isTeamToggleOn: !this.state.isTeamToggleOn
		})
	}

	render(){
		var teamDiv, charDiv;
		if(this.state.isCharToggleOn){
			charDiv = <div>{this.state.characters.map(function(d, idx){
                return (<button key={idx}>{d.name}</button>)
            })}
                <br /></div>;
		}
		else{
			charDiv = <div />;
		}

		if(this.state.isTeamToggleOn){
			teamDiv = <div>{this.state.teams.map(function(d, idx){
				return (<button key={idx}>{d.name}</button>)})}
                <br /></div>;
		}
		else {
			teamDiv = <div />;
		}

		return <div>
			<br />
			<button onClick={()=>this.handleCharToggle()}>
				character
			</button>
				{charDiv}
        	<button onClick={()=>this.handleTeamToggle()}>
            	teams
        	</button>
				{teamDiv}
			</div>;

	}
}



export {CharacterLibrary};
