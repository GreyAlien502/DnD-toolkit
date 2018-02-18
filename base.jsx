import React from 'react';

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

class CharacterInfo extends React.Component {
	constructor(props){
		super(props);
		this.state=props;
	}
	render(){
		return (<div>
			{`${this.state.character.name} Level:${this.state.character.level} ${this.state.character.job} AC:${this.state.character.ac} HP:${this.state.character.hpMax} STR:${this.state.character.str} INT:${this.state.character.int} WIS:${this.state.character.wis} DEX:${this.state.character.dex} CON:${this.state.character.con} CHA:${this.state.character.cha}`}
		</div>);
	}
	componentWillReceiveProps(props){
		this.state = props;
	}

	renderHP(){
		return "HP: "+ this.state.hpMax;
	}
}

export {Character, CharacterInfo};
