document.addEventListener('DOMContentLoaded', () => {

    // game
    const all = document.querySelectorAll('*');

    function doWhiteColor() {
        all.forEach(el => {
            el.style.color = '#fff';
        })
    }

    function doBlackColor() {
        all.forEach(el => {
            el.style.color = '#000';
        })
    }

    let body = document.body,
        nums = document.getElementById('nums'),
        first = document.getElementById('first_num'),
        second = document.getElementById('second_num'),
        equal_value = document.getElementById('equal_value'),
        inp = document.getElementById('input'),
        inp_wrap = document.getElementById('inp-wrap'),
        false_text = document.getElementById('false_text'),
        true_text = document.getElementById('true_text'),
        restart = document.getElementById('restart'),
        counter = document.getElementById('counter'),
        bestCounter = document.querySelector('#bestCounter');

    const rank = document.querySelector('#rank');
    const btn = document.querySelector('.submit');
    const loseScoreWrapper = document.querySelector('.loseScore-wrapper');
    const loseScore = document.querySelector('#loseScore');
    // randomize simbol

    const simbol = document.querySelector('#sign'),
        simbols = ['+', '-', '*'];

    function callupSign() {
        function getRandomSign(max) {
            i = Math.floor(Math.random() * max);
            return i;
        }

        getRandomSign(3);

        simbols.forEach(el => {
            simbol.innerHTML = simbols[i];
        })
        
        console.log(`знак: ${i}`);
    }

    callupSign();

    function generateNumbers() {
        console.log(`числа: ${i}`);

        function getRandomIntFirst(max) {
            a = Math.floor(Math.random() * max);
            return a;
        }
        if (i != 2){
            first.innerHTML = getRandomIntFirst(60);
        } else {
            first.innerHTML = getRandomIntFirst(9);
        }

        function getRandomIntSecond(max) {
            b = Math.floor(Math.random() * max);
            return b;
        }

        if (i != 2) {
            second.innerHTML = getRandomIntSecond(60);
        } else {
            second.innerHTML = getRandomIntSecond(9);
        }
    }   

    generateNumbers();


    let score = 0;
    let best = localStorage.getItem('best');
    bestCounter.innerHTML = best;

    function lose() {
        false_text.classList.add('active');
        body.style.background = 'rgb(220, 25, 36)';
        loseScore.innerHTML = score;
        score = 0;
        counter.innerHTML = score;
        loseScoreWrapper.classList.remove('hide');
        doWhiteColor();
    }

    function win() {
        true_text.classList.add('active');
        body.style.background = 'rgb(93, 146, 41)';
        score++;
        counter.innerHTML = score;
        loseScoreWrapper.classList.add('hide');
        if (score > best) {
            best++;
            localStorage.setItem('best', best);
            bestCounter.innerHTML = best;
        }
        doWhiteColor();
    }

    function hideControls() {
        nums.style.color = "#fff";
        inp_wrap.style.display = 'none';
        restart.style.display = 'block';
    }

    function calculate() {
        let value = parseInt(inp.value);
        equal_value.innerHTML = ` ${value}`;
        if (i == 0) {
            if (a + b != value) {
                lose();

            } else if (a + b == value) {
                win();
            }
        } else if (i == 1) {
            if (a - b != value) {
                lose();

            } else if (a - b == value) {
                win();
            }
        } else if (i == 2) {
            if (a * b != value) {
                lose();

            } else if (a * b == value) {
                win();
            }
        }

        hideControls();
    }

    inp.addEventListener('keyup', e => {
        if (e.key == "Enter") {
            calculate();
        }
    });

    btn.addEventListener('click', () => {
        calculate();
    })

    restart.onclick = e => {
        false_text.classList.remove('active');
        true_text.classList.remove('active');
        body.style.background = 'rgb(255, 255, 255)';
        inp_wrap.style.display = 'block';
        inp.value = '';
        equal_value.innerHTML = ` ?`;
        restart.style.display = 'none';
        callupSign();
        generateNumbers();
        doBlackColor();
        btn.style.color = '#fff';
        loseScore.innerHTML = 0;
        loseScoreWrapper.classList.add('hide');
    }

    //rank

    const rankImg = document.querySelector('#rank-img');


    if (localStorage.getItem('best') >= 0 && localStorage.getItem('best') <= 10) {
        rank.innerHTML = 'нубик';
        rank.style.color = 'brown';
        rankImg.src = 'img/noobik.svg';
    } else if (localStorage.getItem('best') > 10 && localStorage.getItem('best') <= 20) {
        rank.innerHTML = 'любитель';
        rank.style.color = 'blue';
        rankImg.src = 'img/lubitel.svg'

    } else if (localStorage.getItem('best') > 20 && localStorage.getItem('best') <= 30) {
        rank.innerHTML = 'хипстер';
        rank.style.color = 'red';
        rankImg.src = 'img/hipster.svg'
    } else if (localStorage.getItem('best') > 30 && localStorage.getItem('best') <= 40) {
        rank.innerHTML = 'блатной';
        rank.style.color = 'black';
        rankImg.src = 'img/the-blatnoi.svg'

    } else if (localStorage.getItem('best') > 40 && localStorage.getItem('best') <= 50) {
        rank.innerHTML = 'авторитет';
        rank.style.color = 'black';
        rank.style.fontWeight = '700';
        rankImg.src = 'img/avtoritet.svg'
    } else if (localStorage.getItem('best') > 50 && localStorage.getItem('best') <= 60) {
        rank.innerHTML = 'старожил';
        rank.style.color = 'rgb(16, 6, 71)';
        rank.style.fontWeight = '700';
        rankImg.src = 'img/ded-dead.jpg'
        rankImg.style.width = '100px';

    } else if (localStorage.getItem('best') > 60 && localStorage.getItem('best') >= 70) {
        rank.innerHTML = 'анонимус';
        rank.style.color = 'rgb(100, 223, 0)';
        rank.style.fontWeight = '700';
        rankImg.src = 'img/anonimuos.jpg'
        rankImg.style.width = '100px';
    }
})
