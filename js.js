var form = document.getElementById("form");
var input = document.getElementById("input");
var td1 = document.getElementById("td1");
var td1_score = document.getElementById("td1_score");
var number;
var answer;

function makeanswer(){
    number = [1,2,3,4,5,6,7,8,9];
    answer = [];
    for(var i = 0; i < 4; i++){
    var choice = number.splice(Math.floor(Math.random() * (9-i)),1);
    answer.push(choice[0])
    }
};

makeanswer();
console.log(number);
console.log(answer);

form.addEventListener('submit',function(e){
    e.preventDefault();
    answer = answer.join('');
    td1.innerHTML = input.value
    console.log(input.value);
    console.log(answer);
    if (input.value === answer) {
        td1_score.textContent = "홈런!"
    } 
})