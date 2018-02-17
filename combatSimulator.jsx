import React from 'react';
function initiative(){
    let t1 = roll(6);
    let t2 = roll(6);
    if(t1 < t2)
        return -1;
    if (t2 > t1)
        return 1;
    return 0;
}

function roll(num){
    return Math.floor(Math.random() * num) + 1;
}

function attack(job, hitMod, dmgMod, ac){
    let hit = roll(20) + hitMod;
    if(ac < -3){
        if(hit < 20 + Math.abs(3 - ac))
            return 0;
        return chooseDmg(job) + dmgMod;
    }if(ac > -3 && ac <3){
        if(hit < 20)
            return 0;
        return chooseDmg(job) + dmgMod;
    }if(ac > 2){
        if(hit < 22-ac)
            return 0;
        return chooseDmg(job) + dmgMod;
    }
}

function combat(team1, team2){
    while(team1.length != 0 && team2.length != 0){
        let init = initiative();
        if(init == -1){
            assault(team1, team2);
            destroy(team2);
            assault(team2, team1);
            destroy(team1);
        } else if (init == 0){
            assault(team1, team2);
            assault(team2, team1);
            destroy(team1);
            destroy(team2);
        } else{
            assault(team2, team1);
            destroy(team1);
            assault(team1, team2);
            destroy(team2);
        }
    }
}

function destroy(team){
    let i = 0;
    while(i < team.length){
        if(team[i].hp < 0)
            team[i].remove();
        else
            i++;
    }
}

function assault(team1, team2){
    let i = 0;
    while(i < team1.length){
        let target = roll(team2.length)-1;
        dmg = attack(team1[i].job, team1[i].hitMod, team1[i].dmgMod, team2[target].ac);
        team2[target].hp -= dmg;
        i++;
    }
}

function chooseDmg(job) {
    if(job == "MU" || job == "fighter")
        return roll(4)+roll(4);
    if(job == "thief")
        return roll(4);
    if(job == "cleric")
        return roll(4)+1;
}

class CombatSimulator extends React.Component {
	constructor(props){
		super(props)
		this.state=props;
	}
	render(){
		return <div></div> ;
	}
}

export {CombatSimulator};
