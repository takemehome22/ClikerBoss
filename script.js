const Score = document.querySelector("#score");
const Money = document.querySelector("#money");
const Waves = document.querySelector("#waves");
const Count1 = document.querySelector("#count1");
const Count2 = document.querySelector("#count2");
const Count3 = document.querySelector("#count3");
const Img = document.querySelector(".img");
const Bar = document.querySelector("#bar");
const Con = document.querySelector("#continue");

const audio_boss = document.querySelector('#boss');
const audio_money = document.querySelector('#audio_money');
const audio_atack = document.querySelector('#audio_atack');

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let score = 100;
// let click = 1;
// let money = 0;
// let waves = 1;
// let maxhp = score;
// let difference=0;
// let boss = {
//     a: "./src/img v2/Король слизней.png",
//     b: "./src/img v2/Глаз Ктулху.png",
//     c: "./src/img v2/Скелетрон.png",
//     d: "./src/img v2/Королева пчел.png",
//     e: "./src/img v2/Мозг Ктулху.png",
//     f: "./src/img v2/Пожиратель мирова.png",
//     g: "./src/img v2/Стена плоти.png",
// }
 
let arrBoss=[
0,
1,
2,
3,
4,
5,
6,]
let arrHpBoss=
[100,
300,
]
function con(){
    waves+=1;
    Waves.innerHTML = "Волна "+waves;

    if (waves == 1) {
        Img.src = boss.a;

    }else
    if (waves == 2) {
        Img.src = boss.b;
        money+=250;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
        Score.innerHTML = score;
        Bar.style.width=100+'%';
    
    }else
    if (waves == 3) {
        Img.src = boss.c;
        money+=350;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
    
    }else
    if (waves == 4) {
        Img.src = boss.d;
        money+=550;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
    
    }else
    if (waves ==5) {
        Img.src = boss.e;
        money+=850;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
    
    }else
    if (waves== 6) {
        Img.src = boss.f;
        money+=1050;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
    
    }else
    if (waves == 7) {
        Img.src = boss.g;
        money+=3050;
        Money.innerHTML=money+" 💰";
        maxhp += 300;
        score=maxhp;
    
    }else{
        alert("Игра окончена");
        location.reload();
        return;
    }
    audio_boss.play();
}

function click_clown() {
    if(score>0){

        audio_atack.play();
        score -= click;
        if(score<0){
            score=0;
        }
        Score.innerHTML = score;
        difference=((score/maxhp)*100);
        Bar.style.width=difference+'%';
    }
    
}

// магазин
function copper_sword() {
    if (money >= 100) {
        audio_money.play();
        count1 += 1;
        Count1.innerHTML = "у вас " + count1+ " мечей";
        click += 1;
        money -= 100;
        
        Money.innerHTML = money + " 💰";
    }


}
function mega_shark() {
    if (money >= 300) {
        audio_money.play();
        count2 += 1;
        Count2.innerHTML = "у вас " + count2 + " акул"
        click += 15;
        money -= 300;
        Money.innerHTML = money + " 💰";
    }


}
function zenith() {
    if (money >= 800) {
        audio_money.play();
        count3 += 1;
        Count3.innerHTML = "у вас " + count3 + " меч";
        click += 50;
        money -= 800;
        Money.innerHTML = money + " 💰";
    }


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
