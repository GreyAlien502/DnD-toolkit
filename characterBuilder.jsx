import React from 'react';

class CharacterBuilder extends React.Component {
	constructor(props){
		super(props)
		this.state=props;
	}
	render(){
		return <h1>Character builder.</h1>;
	}

	roll(num){
		return Math.random()*num + 1;
	}

	hp(job, level){
		i = 0;
		total = 0;
		if(job = fighter){
			hd = 10;
		}if(job = MU){
			hd = 4;
		}if(job = thief){
			hd = 6;
		}if(job = cleric){
			hd = 8;
		}
        while(i < level){
            total += roll(hd);
        }
        return total;
	}

	roll4d6(){
		i = 0;
		lowest = 10;
		total = 0;
		roll = 0;
		while(i < 4){
			roll = roll(6);
			if(roll < lowest)
				lowest = roll;
			total += roll;
			i++;
		}
		return roll;
	}

	pickJob(){
		chance = Math.random()*100 + 1;
		if(chance < 41)
			return fighter;
		if(chance < 61)
			return thief;
		if(chance < 86)
			return cleric;
		return MU;
	}

	hitMod (job, level){
		if(job = fighter){
			if(level = 0)
				return 0
			return level + 1;
		}
		if(job == MU && level == 0)
			return 0;
		if((job == thief && level < 3) || (job == MU && level < 4))
			return 1;
		if((job == cleric && level < 3) || (job == thief && level < 5) || (job == MU && level < 6))
			return 2;
        if((job == cleric && level < 4) || (job == thief && level < 6) || (job == MU && level < 8))
            return 3;
        if((job == cleric && level < 6) || (job == thief && level < 8) || (job == MU && level < 10))
            return 4;
        if((job == cleric && level < 7) || (job == thief && level < 9) || (job == MU && level < 11))
            return 5;
        if((job == cleric && level < 9) || (job == thief && level < 11) || (job == MU && level < 13))
            return 6;
        if((job == cleric && level < 10) || (job == thief && level < 13) || (job == MU && level < 14))
            return 7;
        if((job == cleric && level < 12) || (job == thief && level < 15) || (job == MU && level < 16))
            return 8;
        if((job == cleric && level < 13) || (job == thief && level < 17) || (job == MU && level < 18))
            return 9;
        if((job == cleric && level < 15) || (job == thief && level < 21) || (job == MU))
            return 10;
        if((job == cleric && level < 16) || (job == thief && level < 21))
            return 11;
        if((job == cleric && level < 18) || (job == thief))
            return 12;
        if(job == cleric && level < 19)
        	return 13;
        if(job == cleric)
        	return 14;
	}
}

export {CharacterBuilder};
