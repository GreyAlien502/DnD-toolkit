import React from 'react';
import {CharacterInfo} from './base.jsx';

function Character(name, job, level){
    this.name = name;
    this.job = job;
    this.level = level;

    if(job = "fighter")
        this.str = roll4D6Min(9);
    else this.str = roll4d6();
    if(job = "MU")
        this.int = roll4D6Min(9);
    else this.int = roll4d6();
    if(job = "cleric")
        this.wis = roll4d6(9);
    else this.wis = roll4d6();
    if(job = "MU")
        this.dex = roll4D6Min(6);
    else if(job = "thief")
        this.dex = roll4D6Min(9);
    else this.dex = roll4d6();
    if(job = "fighter")
        this.con = roll4D6Min(7);
    else this.con = roll4d6();
    this.cha = roll4d6();

    this.ac = setAC(job, level);
    this.hpMax = setHP();
}

function roll4D6Min(min){
    if(min > 17)
        return min;
    let temp = roll4d6();
    while(temp < min)
        temp=roll4d6();
    return temp;
}

function setMinDamage(job, level){
    if(job = "fighter")
        return 2 + level;
    if(job = "thief")
        return Math.floor(1+ level/3)
    if(job = "cleric")
        return Math.floor(2 + level/2)
    if(job = "MU")
        return 2 + level;
}

function setMaxDamage(job, level){
    if(job = "fighter")
        return 8 + level;
    if(job = "thief")
        return Math.floor(4+ level/3)
    if(job = "cleric")
        return Math.floor(5 + level/2)
    if(job = "MU")
        return 8 + level;
}

function setAC(job, level){
    if(job = "fighter") return Math.floor(3 - level);
    if(job = "MU") return Math.floor(10 - level / 2);
    if(job = "thief") return Math.floor(8 - level / 2);
    if(job = "cleric") return Math.floor(5 - level);
}

function setHP(job, level){
    let i = 0;
    let hd;
    let total = 0;
    if(job = "fighter"){
        hd = 10;
        if(level = 0)
            return roll(7);
    }

    if(job = "MU") hd = 4;
    if (job = "thief") hd = 6;
    if(job = "cleric") hd = 8;
    while(i < level){
        total += roll(hd);
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
    let chance = Math.random()*100 + 1;
    if(chance < 41)
        return "fighter";
    if(chance < 61)
        return "thief";
    if(chance < 86)
        return "cleric";
    return "MU";
}

function hitMod (job, level){
    if(job = "fighter"){
        if(level = 0)
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
        this.state=Object.assign({isClicked:false},props);
    }

    render(){
        let char;
        function buildFighter(){
            char = new Character("Fighter", "fighter", 1);
        }
        function buildCleric(){
            char = new Character("Cleric", "cleric", 1);
        }
        function buildThief(){
            char = new Character("Thief", "thief", 1);
        }
        function buildMU(){
            char = new Character("Magic-User", "MU", 1);
            click();
        }


        function buildRandom(){
            let job = pickJob();
            if(job = "MU")
                buildMU();
            if(job = "cleric")
                buildCleric();
            if(job = "thief")
                buildThief();
            if(job = "fighter")
                buildFighter();
        }

        let click= ()=> {
            this.setState({isClicked:true});
        }

        let save = () =>{
            this.state.addCharacter(char);
        }

        return <div>

            <button onClick={buildFighter}> Create Fighter </button>

            <button onClick={buildCleric}> Create Cleric </button>

            <button onClick={buildThief}> Create Thief </button>

            <button onClick={buildMU}>Create Magic-User</button>

            <button onClick={buildRandom}>Create Random</button>

            {this.state.isClicked?<button onClick={save}>Save</button> : null}

        </div>;
    }
}

export {CharacterBuilder};