let userName = prompt('Adınız');
let myName = document.querySelector('#myName');


let g = new Date();

let haftaGunleri = new Array(7);
haftaGunleri[0] = "Pazar";
haftaGunleri[1] = "Pazartesi";
haftaGunleri[2] = "Salı";
haftaGunleri[3] = "Çarşamba";
haftaGunleri[4] = "Perşembe";
haftaGunleri[5] = "Cuma";
haftaGunleri[6] = "Cumartesi";

let n = haftaGunleri[g.getDay()];


function zaman() {
    let bugun = new Date();
    let saat = bugun.getHours()
    let dakika = bugun.getMinutes()
    let saniye = bugun.getSeconds()
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    myClock.innerHTML = (`${saat}:${dakika}:${saniye}  ${n}`);
    var t = setTimeout(zaman, 1000);

}

function checkTime(i) {
    if (i < 10) { i = '0' + i };
    return i;
}



myName.innerHTML = `${userName}`;

