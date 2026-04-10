const quiz = [
{q:"Capital of India?", options:["Delhi","Mumbai","Chennai","Kolkata"], answer:"Delhi"},
{q:"5 × 2 = ?", options:["5","10","15","20"], answer:"10"},
{q:"HTML stands for?", options:["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Marketing Language","Hyper Text Markup Leveler"], answer:"Hyper Text Markup Language"}
];

let index = 0;
let score = 0;
let selected = null;

function startQuiz(){
document.getElementById("startScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");
showQuestion();
}

function showQuestion(){
selected=null;
let q=quiz[index];
document.getElementById("question").innerText=q.q;

let html="";
q.options.forEach(opt=>{
html+=`<button class="option" onclick="selectOption(this,'${opt}')">${opt}</button>`;
});
document.getElementById("options").innerHTML=html;
}

function selectOption(btn,value){
let buttons=document.querySelectorAll(".option");
buttons.forEach(b=>b.classList.remove("selected"));
btn.classList.add("selected");
selected=value;
}

function nextQuestion(){
if(selected===quiz[index].answer){
score++;
}

index++;

if(index<quiz.length){
showQuestion();
}else{
document.getElementById("quizScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");
document.getElementById("score").innerText=`Your Score: ${score}/${quiz.length}`;
}
}