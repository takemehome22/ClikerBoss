const Score = document.querySelector("#score");
const Money = document.querySelector("#money");
const Waves = document.querySelector("#waves");
const Count1 = document.querySelector("#count1");
const Count2 = document.querySelector("#count2");
const Count3 = document.querySelector("#count3");
const Img = document.querySelector(".img");
const Bar = document.querySelector("#bar");
const Con = document.querySelector("#con");

const audio_boss = document.querySelector('#boss');
const audio_money = document.querySelector('#audio_money');
const audio_atack = document.querySelector('#audio_atack');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let score = 100;
let click = 1;
let money = 0;
let waves = 1;
let maxhp = score;
let difference = 0;

let boss = {
    a: "./src/img v2/Король слизней.png",
    b: "./src/img v2/Глаз Ктулху.png",
    c: "./src/img v2/Скелетрон.png",
    d: "./src/img v2/Королева пчел.png",
    e: "./src/img v2/Мозг Ктулху.png",
    f: "./src/img v2/Пожиратель мирова.png",
    g: "./src/img v2/Стена плоти.png",
}


function con() {

    waves += 1;
    Waves.innerHTML = "Волна " + waves;

    if (waves == 1) {
        Img.src = boss.a;

    } else
        if (waves == 2) {
            Img.src = boss.b;
            money += 250;
            Money.innerHTML = money + "&nbsp;💰";
            maxhp += 300;
            score = maxhp;
            Score.innerHTML = score;
            Bar.style.width = 100 + '%';

        } else
            if (waves == 3) {
                Img.src = boss.c;
                money += 350;
                Money.innerHTML = money + "&nbsp;💰";
                maxhp += 300;
                score = maxhp;
                Score.innerHTML = score;
                Bar.style.width = 100 + '%';

            } else
                if (waves == 4) {
                    Img.src = boss.d;
                    money += 550;
                    Money.innerHTML = money + "&nbsp;💰";
                    maxhp += 300;
                    score = maxhp;
                    Score.innerHTML = score;
                    Bar.style.width = 100 + '%';

                } else
                    if (waves == 5) {
                        Img.src = boss.e;
                        money += 850;
                        Money.innerHTML = money + "&nbsp;💰";
                        maxhp += 300;
                        score = maxhp;
                        Score.innerHTML = score;
                        Bar.style.width = 100 + '%';

                    } else
                        if (waves == 6) {
                            Img.src = boss.f;
                            money += 1050;
                            Money.innerHTML = money + "&nbsp;💰";
                            maxhp += 300;
                            score = maxhp;
                            Score.innerHTML = score;
                            Bar.style.width = 100 + '%';

                        } else
                            if (waves == 7) {
                                Img.src = boss.g;
                                money += 3050;
                                Money.innerHTML = money + "&nbsp;💰";
                                maxhp += 300;
                                score = maxhp;
                                Score.innerHTML = score;
                                Bar.style.width = 100 + '%';

                            } else {
                                alert("Вы прошли игру харощ мужик");
                                location.reload();
                                return;
                            }
    audio_boss.play();
}

function click_clown() {
    if (score > 0) {

        audio_atack.play();
        score -= click;
        if (score < 0) {
            score = 0;
        }
        Score.innerHTML = score;
        difference = ((score / maxhp) * 100);
        Bar.style.width = difference + '%';

    }

}

// магазин
function copper_sword() {
    if (money >= 100) {
        audio_money.play();
        count1 += 1;
        Count1.innerHTML = "у вас " + count1 + " мечей";
        click += 1;
        money -= 100;

        Money.innerHTML = money + "&nbsp;💰";
    }


}

function mega_shark() {
    if (money >= 300) {
        audio_money.play();
        count2 += 1;
        Count2.innerHTML = "у вас " + count2 + " акул"
        click += 15;
        money -= 300;
        Money.innerHTML = money + "&nbsp;💰";
    }


}

function zenith() {
    if (money >= 800) {
        audio_money.play();
        count3 += 1;
        Count3.innerHTML = "у вас " + count3 + " меч";
        click += 50;
        money -= 800;
        Money.innerHTML = money + "&nbsp;💰";
    }


}