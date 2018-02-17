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
