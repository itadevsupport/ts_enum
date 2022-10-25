enum Giorni {
    LUN = 1,
    MAR,
    MER,
    GIO,
    VEN,
    SAB,
    DOM
}

let day2 : number = Giorni.VEN;
const p2 = document.querySelector('#enumnumber') as HTMLElement;
let res2 = '';

if (day2 === Giorni.LUN || day2 === Giorni.MER || day2 === Giorni.VEN) {
    console.log('tempo pieno');
    res2 = 'tempo pieno';
} else if(day2 === Giorni.MAR|| day2 === Giorni.GIO){
    console.log('mezza giornata');
    res2 = 'mezza giornata';
} else {
    console.log('giorno feriale');
    res2 = 'giorno feriale';
}

p2.innerHTML = `giorno <b>${day2}</b>: ${res2}`;