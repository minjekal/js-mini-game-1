var form = document.getElementById("form");
var input = document.getElementById("input");
var tdList = document.querySelectorAll("[id^='td']")
var tdScoreList = document.querySelectorAll("[id^='tscore']")
var result = document.getElementById("result");


var number;
var answer;

var submitCount = 0;

function makeAnswer(){
    number = [1,2,3,4,5,6,7,8,9];
    answer = [];
    for(var i = 0; i < 4; i++){
        var choice = number.splice(Math.floor(Math.random() * (9-i)),1);
        answer.push(choice[0])
    }
};

function start(td, td_score) {
    var strike = 0;
    var ball = 0;
    td.innerHTML = input.value;
    if (input.value === answer_st) {
        td_score.textContent = "Home Run!";
        result.textContent = "성공하였습니다!"
        input.disabled = true;
        
        } else {
            for (var i = 0; i < 4 ; i++){
                if (Number(input.value[i]) === answer[i] ){
                    strike += 1;
                }
                else if (answer_st.indexOf(input.value[i])>-1) {
                        ball += 1;
                    }
            }
            td_score.textContent = "strike : " + strike + " ball : " + ball;
        }
    input.value="";
}

makeAnswer();
console.log(number);
console.log(answer);

answer_st = answer.join('');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    start(tdList[submitCount],tdScoreList[submitCount])
    submitCount ++;
    if (submitCount === 9){
        input.disabled = true;
        result.textContent = "실패하였습니다. 정답은 " + answer_st + " 입니다"
    }
    });