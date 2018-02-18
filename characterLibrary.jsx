import React from 'react';
import {Character} from './base.jsx';
import {TeamBuilder} from './teamBuilder.jsx';

//custom-made characterModifierA
import {CharacterModifier} from './characterModifier.jsx';


class CharacterLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: props.characters,
            teams: props.teams,
            addCharacter: props.addCharacter,
            removeCharacter: props.removeCharacter,
            isCharToggleOn: false,
            isTeamToggleOn: false,
            isCharModifying: false,
            character: null,
            addPressed: false
        }
    }

    componentWillReceiveProps(nextProp){
        this.setState(nextProp);
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

    handleAddNew(){
        this.setState({addPressed : !this.state.addPressed})
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
        let charEdit=(d)=> {

        }
        let charDel=(d)=> {
            this.state.removeCharacter(d.id);
        }
        var teamDiv, charDiv;
        if(this.state.isCharToggleOn){
            charDiv = <div>{this.state.characters.map(function(d, idx){
                return (<li key={idx}><button onClick={()=>charaSelect(d)} >Name: {d.name} Job: {d.job} Level: {d.level} </button>
                    <button onClick={()=>charEdit(d)}>edit</button>
                    <button onClick={()=>charDel(d)}>remove</button>
                </li>)
            })}
                </div>;
        }
        else{
            charDiv = <div />;
        }

        let addNew = () =>{
            this.state.addCharacter(new Character(document.getElementById("newName").value, document.getElementById("newJob").value, document.getElementById("newLevel").value))
        }

        if(this.state.isTeamToggleOn){
            teamDiv = <TeamBuilder
	    	teams={this.state.teams}
		characters={this.state.characters}
		updateLibrary={()=>0}
	    />;
        }
        else {
            teamDiv = <div  />;
        }

        return <div>
            <br />
            <button onClick={()=>this.handleCharToggle()}> character </button>
            <button onClick={()=>this.handleTeamToggle()}> teams</button><br/>
            <button onClick={()=>this.handleAddNew()}>Add a Character</button>
            <div >
                {charDiv}{teamDiv}
            </div>
            {this.state.addPressed? <div>
                <li>Name</li><input type="text" id="newName"/><br/>
                <li>Job</li><input type="text" id="newJob"/><br/>
                <li>Level</li><input type="text" id="newLevel"/><br/>
                <button onClick={addNew}>Save</button>
            </div> : null}
        </div>;

    }
}



export {CharacterLibrary};
