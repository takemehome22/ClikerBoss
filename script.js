const Score = document.querySelector("#score");
const Money = document.querySelector("#money");
const Vawes = document.querySelector("#vawes");
const Count1 = document.querySelector("#count1");
const Count2 = document.querySelector("#count2");
const Count3 = document.querySelector("#count3");

const audio_clown = document.querySelector('#audio');
const audio_money = document.querySelector('#audio_money');
const audio_done = document.querySelector('#audio_done');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let score = 0;
let click = 1;
let money = 0;
let vawes = 1;

function click_clown() {
    audio_clown.play();
    score += click;
    Score.innerHTML = score;
}

function copper_sword() {
    count1 += 1;
    Count1.innerHTML = count1;
    click += 1;
    console.log(click)

}

// if (localStorage.getItem('score') != null) {
//     score = +localStorage.getItem('score');
//     Score.innerHTML = score;
// }
// if (localStorage.getItem('speed') != null) {
//     speed = +localStorage.getItem('speed');
//     Speed.innerHTML = speed + "/сек";
// }
// if (localStorage.getItem('niggers') != null) {
//     niggers = +localStorage.getItem('niggers');
//     Niggers.innerHTML = 'У вас ' + niggers + ' niggers';
// }
// if (localStorage.getItem('jail') != null) {
//     jail = +localStorage.getItem('jail');
//     Jail.innerHTML = 'У вас ' + jail + ' тюрьм';
// }
// if (localStorage.getItem('buesness') != null) {
//     buesness = +localStorage.getItem('buesness');
//     Buesness.innerHTML = 'У вас ' + buesness + ' бизнесов';
// }
// if (localStorage.getItem('communications') != null) {
//     communications = +localStorage.getItem('communications');
//     Communications.innerHTML = 'У вас ' + communications + ' связей';
// }
// if (localStorage.getItem('click') != null) {
//     click = +localStorage.getItem('click');
//     Click.innerHTML = 'У вас ' + click + ' click';
// }

// window.onbeforeunload = function () {
//     localStorage.setItem('score', score);
//     localStorage.setItem('speed', speed);
//     localStorage.setItem('niggers', niggers);
//     localStorage.setItem('jail', jail);
//     localStorage.setItem('buesness', buesness);
//     localStorage.setItem('communications', communications);
//     localStorage.setItem('click', click);
// };
