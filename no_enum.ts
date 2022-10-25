const day : string = 'martedì';
const p = document.querySelector('#noenum') as HTMLElement;
let res = '';

if (day === 'lunedì' || day === 'mercoledì' || day === 'venerdì') {
    console.log('tempo pieno');
    res = 'tempo pieno';
} else if(day === 'martedì' || day === 'giovedì'){
    console.log('mezza giornata');
    res = 'mezza giornata';
} else {
    console.log('giorno feriale');
    res = 'giorno feriale';
}

p.innerHTML = `giorno <b>${day}</b>: ${res}`;