const Score = document.querySelector("#score");
const Speed = document.querySelector("#speed");
const Niggers = document.querySelector('#niggers');
const Jail = document.querySelector('#jail');
const Buesness = document.querySelector('#buesness');
const Communications = document.querySelector("#communications");
const Click = document.querySelector('#click');

const audio_clown = document.querySelector('#audio');
const audio_money = document.querySelector('#audio_money');
const audio_done = document.querySelector('#audio_done');
let score = 0;
let speed = 0;
let niggers = 0;
let jail = 0;
let buesness = 0;
let communications = 0;
let click = 1;


if (localStorage.getItem('score') != null) {
    score = +localStorage.getItem('score');
    Score.innerHTML = score;
}
if (localStorage.getItem('speed') != null) {
    speed = +localStorage.getItem('speed');
    Speed.innerHTML = speed + "/сек";
}
if (localStorage.getItem('niggers') != null) {
    niggers = +localStorage.getItem('niggers');
    Niggers.innerHTML = 'У вас ' + niggers + ' niggers';
}
if (localStorage.getItem('jail') != null) {
    jail = +localStorage.getItem('jail');
    Jail.innerHTML = 'У вас ' + jail + ' тюрьм';
}
if (localStorage.getItem('buesness') != null) {
    buesness = +localStorage.getItem('buesness');
    Buesness.innerHTML = 'У вас ' + buesness + ' бизнесов';
}
if (localStorage.getItem('communications') != null) {
    communications = +localStorage.getItem('communications');
    Communications.innerHTML = 'У вас ' + communications + ' связей';
}
if (localStorage.getItem('click') != null) {
    click = +localStorage.getItem('click');
    Click.innerHTML = 'У вас ' + click + ' click';
}

setInterval(function Timer() {
    score += speed;
    Score.innerHTML = score;
}, 1000);

function click_clown() {
    audio_clown.play();
    score += click;
    Score.innerHTML = score;
}
function click_niggers() {

    if (score - 10 < 0) {
        audio_money.play();
    } else {
        audio_done.play();
        speed += 1;
        Speed.innerHTML = speed + "/сек";
        niggers += 1;
        Niggers.innerHTML = 'У вас ' + niggers + ' niggers';
        score -= 10;
        Score.innerHTML = score;
    }

}
function click_jail() {

    if (score - 100 < 0) {
        audio_money.play();
    } else {
        audio_done.play();
        speed += 12;
        Speed.innerHTML = speed + "/сек";
        jail += 1;
        Jail.innerHTML = 'У вас ' + jail + ' тюрьм';
        score -= 100;
        Score.innerHTML = score;
    }

}
function click_buesness() {

    if (score - 1000 < 0) {
        audio_money.play();
    } else {
        audio_done.play();
        speed += 130;
        Speed.innerHTML = speed + "/сек";
        buesness += 1;
        Buesness.innerHTML = 'У вас ' + buesness + ' бизнесов';
        score -= 1000;
        Score.innerHTML = score;
    }

}
function click_communications() {

    if (score - 10000 < 0) {
        audio_money.play();
    } else {
        audio_done.play();
        speed += 1400;
        Speed.innerHTML = speed + "/сек";
        communications += 1;
        Communications.innerHTML = 'У вас ' + communications + ' связей';
        score -= 10000;
        Score.innerHTML = score;
    }

}
function click_click() {

    if (score - 500 < 0) {
        audio_money.play();
    } else {
        audio_done.play();
        click += 1;
        Click.innerHTML = 'У вас ' + click + ' click';
        score -= 500;
        Score.innerHTML = score;
    }

}
window.onbeforeunload = function () {
    localStorage.setItem('score', score);
    localStorage.setItem('speed', speed);
    localStorage.setItem('niggers', niggers);
    localStorage.setItem('jail', jail);
    localStorage.setItem('buesness', buesness);
    localStorage.setItem('communications', communications);
    localStorage.setItem('click', click);
};
function OpenCloseShop(){
    let shop = document.getElementById("shop");
    shop.classList.toggle("visible");  
}
