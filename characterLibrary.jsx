import React from 'react';
import ReactList from 'react-list';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
//custom-made characterModifier
import {CharacterModifier} from './characterModifier.jsx'


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
		function charaSelect() {

		}

		var teamDiv, charDiv;
		if(this.state.isCharToggleOn){
			charDiv = <div class="column">{this.state.characters.map(function(d, idx){
                return (<button key={idx}>{d.name}</button>)
            })}
                <img src={'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/plainDoge-700x525.jpg'} width="300" /></div>;
		}
		else{
			charDiv = <div class="column"/>;
		}

		if(this.state.isTeamToggleOn){
			teamDiv = <div class="column">{this.state.teams.map(function(d, idx){
				return (<button key={idx}>{d.name}</button>)})}
                 <img src={'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/plainDoge-700x525.jpg'} width="300" /></div>;
		}
		else {
			teamDiv = <div class="column" />;
		}

		return <div>
			<br />
			<button onClick={()=>this.handleCharToggle()}>
				character
			</button>

        	<button onClick={()=>this.handleTeamToggle()}>
            	teams
        	</button>
			<div class="row">
            {charDiv}{teamDiv}
			</div>
			</div>;

	}
}



export {CharacterLibrary};
