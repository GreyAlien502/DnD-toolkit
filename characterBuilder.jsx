import React from 'react';
import {CharacterInfo} from './base.jsx';

function Character(name, job, level){
    this.name = name;
    this.job = job;
    this.level = level;

    if(job == "fighter")
        this.str = roll4D6Min(9);
    else this.str = roll4d6();
    if(job == "MU")
        this.int = roll4D6Min(9);
    else this.int = roll4d6();
    if(job == "cleric")
        this.wis = roll4d6(9);
    else this.wis = roll4d6();
    if(job == "MU")
        this.dex = roll4D6Min(6);
    else if(job == "thief")
        this.dex = roll4D6Min(9);
    else this.dex = roll4d6();
    if(job == "fighter")
        this.con = roll4D6Min(7);
    else this.con = roll4d6();
    this.cha = roll4d6();

    this.dmgMod = setDmgMod(job, level);
    this.hitMod = hitMod(job, level);
    this.ac = setAC(job, level);
    this.hpMax = setHP(job, level);
}

function roll4D6Min(min){
    if(min > 17)
        return min;
    let temp = roll4d6();
    while(temp < min)
        temp=roll4d6();
    return temp;
}

function setDmgMod(job, level){
    if(job == "fighter")
        return level;
    if(job == "thief")
        return Math.floor(level/3)
    if(job == "cleric")
        return Math.floor(level/2)
    if(job == "MU")
        return level;
}

function setAC(job, level){
    if(job == "fighter")
        return Math.floor(3 - level);
    if(job == "MU")
        return Math.floor(10 - level / 2);
    if(job == "thief")
        return Math.floor(8 - level / 2);
    if(job == "cleric")
        return Math.floor(5 - level);
}

function setHP(job, level){
    let i = 0;
    let hdTemp = 0;
    let total = 0;
    if(job == "fighter"){
        hdTemp = 10;
        if(level == 0)
            return roll(7);
    }

    if(job == "MU")
        hdTemp = 4;
    if (job == "thief")
        hdTemp = 6;
    if(job == "cleric")
        hdTemp = 8;
    while(i < level){
        total += roll(hdTemp);
        i++;
    }
    return total;
}

function roll4d6(){
    let i = 0;
    let lowest = 10;
    let total = 0;
    let rolla = 0;
    while (i < 4) {
        rolla = roll(6);
        if (rolla < lowest)
            lowest = rolla;
        total += rolla;
        i++;
    }
    return total-lowest;
}

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

function hitMod (job, level){
    if(job == "fighter"){
        if(level == 0)
            return 0
        return level + 1;
    }
    if(job == "MU" && level == 0)
        return 0;
    if((job == "thief" && level < 3) || (job == "MU" && level < 4))
        return 1;
    if((job == "cleric" && level < 3) || (job == "thief" && level < 5) || (job == "MU" && level < 6))
        return 2;
    if((job == "cleric" && level < 4) || (job == "thief" && level < 6) || (job == "MU" && level < 8))
        return 3;
    if((job == "cleric" && level < 6) || (job == "thief" && level < 8) || (job == "MU" && level < 10))
        return 4;
    if((job == "cleric" && level < 7) || (job == "thief" && level < 9) || (job == "MU" && level < 11))
        return 5;
    if((job == "cleric" && level < 9) || (job == "thief" && level < 11) || (job == "MU" && level < 13))
        return 6;
    if((job == "cleric" && level < 10) || (job == "thief" && level < 13) || (job == "MU" && level < 14))
        return 7;
    if((job == "cleric" && level < 12) || (job == "thief" && level < 15) || (job == "MU" && level < 16))
        return 8;
    if((job == "cleric" && level < 13) || (job == "thief" && level < 17) || (job == "MU" && level < 18))
        return 9;
    if((job == "cleric" && level < 15) || (job == "thief" && level < 21) || (job == "MU"))
        return 10;
    if((job == "cleric" && level < 16) || (job == "thief" && level < 21))
        return 11;
    if((job == "cleric" && level < 18) || (job == "thief"))
        return 12;
    if(job == "cleric" && level < 19)
        return 13;
    if(job == "cleric")
        return 14;
}


function roll(num){
    return Math.floor(Math.random() * num) + 1;
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
