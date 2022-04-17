let little = document.getElementById('little');
let ball = '<div class="circle"></div>';
let ball1 = '<div class="circle change"></div>';
let balls = ''
for (let index = 1; index <= 45; index++) {
    balls += index <= 12? ball:ball1;
    
}
little.innerHTML = balls;
function changeColor(params) {
    let change_balls = document.getElementsByClassName('change');
    let len = change_balls.length-1;
    let i = len;
    let interval = setInterval(() => {
        change_balls[i].setAttribute('style', 'background: #D8D8D8;');
        if (i == 0) {
            clearInterval(interval);
        }
        i--;
    }, 70);

}