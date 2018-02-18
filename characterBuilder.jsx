import React from 'react';
import {Character, CharacterInfo} from './base.jsx';


function pickJob(){
    let chance = Math.floor(Math.random()*100) + 1;
    if(chance < 41)
        return "fighter";
    if(chance < 61)
        return "thief";
    if(chance < 86)
        return "cleric";
    return "MU";
}

class CharacterBuilder extends React.Component {
    constructor(props){
        super(props)
        this.state=Object.assign({char:null},props);
    }

    render(){
        let buildFighter = () =>{
            this.setState({char : new Character("Fighter", "fighter", 1)});
        }
        let buildCleric = () =>{
            this.setState({char : new Character("Cleric", "cleric", 1)});
        }
        let buildThief = () =>{
            this.setState({char : new Character("Thief", "thief", 1)});
        }
        let buildMU = () =>{
            this.setState({char : new Character("Magic-User", "MU", 1)});
        }


        function buildRandom(){
            let jobPicker = pickJob();
            if(jobPicker == "MU")
                buildMU();
            if(jobPicker == "cleric")
                buildCleric();
            if(jobPicker == "thief")
                buildThief();
            if(jobPicker == "fighter")
                buildFighter();
        }

        let save = () =>{
            this.state.char['name'] = document.getElementById("newName").value;
            this.state.addCharacter(this.state.char);
        }

        return <div><p>
		<button onClick={buildFighter}> Create Fighter </button>
		<button onClick={buildCleric}> Create Cleric </button> <br/>
		<button onClick={buildThief}> Create Thief </button> 
		<button onClick={buildMU}>Create Magic-User</button><br/>
        <button onClick={buildRandom}>Pick Randomly</button>
		{this.state.char?
			<div>
				<CharacterInfo character={this.state.char} />
				<div><button onClick={save}>Save</button>
				<input type="text" id="newName"/></div>
			</div>
		:
			null
		}
        </p>
        </div>;
    }
}

export {CharacterBuilder};
