enum GiorniString {
    LUN = 'lunedì',
    MAR = 'martedì',
    MER = 'mercoledì',
    GIO = 'giovedì',
    VEN = 'venerdì',
    SAB = 'sabato',
    DOM = 'domenica'
}

let day3 : string = GiorniString.DOM;
const p3 = document.querySelector('#enumstring') as HTMLElement;
let res3 = '';

if (day3 === GiorniString.LUN || day3 === GiorniString.MER || day3 === GiorniString.VEN) {
    console.log('tempo pieno');
    res3 = 'tempo pieno';
} else if(day3 === GiorniString.MAR|| day3 === GiorniString.GIO){
    console.log('mezza giornata');
    res3 = 'mezza giornata';
} else {
    console.log('giorno feriale');
    res3 = 'giorno feriale';
}

p3.innerHTML = `giorno <b>${day3}</b>: ${res3}`;