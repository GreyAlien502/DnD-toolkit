import React from 'react';

//custom-made characterModifier
import {CharacterModifier} from './characterModifier.jsx';


class CharacterLibrary extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	characters: props.characters,
			teams: props.teams,
            isCharToggleOn: false,
            isTeamToggleOn: false,
            isCharModifying: false,
			character: ''
        }
    }

    componentWillReceiveProps(nextProp){
        this.setState({character: nextProp.character})
    }

    handleCharToggle () {
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
	    let charSelecting = '';
	    let chara;
		let charaSelect=(d)=> {
		    this.setState({
            	isCharModifying: true,
				character : d
            })
		}
		var teamDiv, charDiv;
		if(this.state.isCharToggleOn){
			charDiv = <div>{this.state.characters.map(function(d, idx){
                return (<li key={idx}><button onClick={()=>charaSelect(d)} key={idx}>Name: {d.name} Job: {d.job} Level: {d.level} </button></li>)
            })}
                {this.state.isCharModifying?<CharacterModifier character={this.state.character}/>: null}</div>;
		}
		else{
			charDiv = <div />;
		}


		if(this.state.isTeamToggleOn){
			teamDiv = <div class="column">{this.state.teams.map(function(d, idx){
                return (<li key={idx}><button key={idx}>{d.name}{d.hp}</button></li>)})}
                 <img src={'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/plainDoge-700x525.jpg'} width="300" /></div>;
		}
		else {
			teamDiv = <div  />;
		}

		return <div>
			<br />
			<button onClick={()=>this.handleCharToggle()}>
				character
			</button>

        	<button onClick={()=>this.handleTeamToggle()}>
            	teams
        	</button>
			<div >
            {charDiv}{teamDiv}
			</div>

			</div>;

	}
}



export {CharacterLibrary};
