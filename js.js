var form = document.getElementById("form");
var input = document.getElementById("input");
var td1 = document.getElementById("td1");
var td1_score = document.getElementById("td1_score");
var number;
var answer;
var strike = 0;
var ball = 0;

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
    td1.innerHTML = input.value;
    answer_st = answer.join('');

    if (input.value === answer_st) {
            td1_score.textContent = "홈런!"
        } else {
            for (var i = 0; i < 4 ; i++){
                if (answer_st.indexOf(input.value[i])>-1){
                    if( i === answer_st.indexOf(input.value[i])){
                        strike += 1;
                } else {
                        ball += 1;
                    }
            }
        
    }
}      
td1_score.textContent = "strike :" + strike + " ball :" + ball;

} )
