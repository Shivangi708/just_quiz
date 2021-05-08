// var ul = document.getElementById('ul')
// var nextButton = document.getElementById('btnNext');
// var quizbox = document.getElementById('questionBox')
// var opt1 = document.getElementById('opt1')
// var opt2 = document.getElementById('opt2')
// var opt3 = document.getElementById('opt3')
// var opt4 = document.getElementById('opt4')

// var app={
//         questions:[
//             {
//                 q: 'Which one of the following waves are used by the common TV remote control? ',
//                 options: ['.Radio waves','Lasers','Infrared waves','Ultrasonic waves'],
//                 answer:3
//             },
//             {
//                 q: 'Which gas is safe and an effective extinguisher for all confined fires?',
//                 options: ['Nitrogen dioxide','Carbon dioxide','Sulphur dioxide','Nitrous Oxide'],
//                 answer:2
//             },
//             {
//                 q: 'Which one of the following elements the drum of a Photostat machine is made up of:',
//                 options: ['Aluminium','Selenium','Barium','Caesium'],
//                 answer:2
//             },
//             {
//                 q: 'Which bacteria is responsible for the formation of curd?',
//                 options: ['Lactic acid bacteria','Lactobacillus Acidophillus','Lactobacillus aureus','Bacillus radicicola'],
//                 answer:2
//             },
//             {
//                 q: 'In poorly ventilated buildings which one of the following inert gases can be accumulated?',
//                 options: ['Helium','Neon','Argon','Radon'],
//                 answer:4
//             }      
//         ],
//         index:0,
//         load:function(){
//             if(this.index<=this.questions.length-1){
//                 quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
//                 opt1.innerHTML=this.questions[this.index].options[0];
//                 opt2.innerHTML=this.questions[this.index].options[1];
//                 opt3.innerHTML=this.questions[this.index].options[2];
//                 opt4.innerHTML=this.questions[this.index].options[3];
//             }
//             else {
//                 quizbox.innerHTML="Quiz Completed!";
//                 ul.style.display="none";
//                 nextButton.style.display="none";
//             }
//         },
//         next: function(){
//             this.index++;
//             this.load();
//         },
//         check: function(ele){
//             var id=ele.id.split('');
//             if(id[id.length-1]==this.questions[this.index].answer){
//                 this.score++;
//                 ele.className="correct";
//                 this.scoreCard();
//             }
//             else{
//                 ele.className="wrong";
//             }
//         },
//         preventClick:function(){
//             for(let i=0; i<ul.children.length; i++){
//                 ul.children[i].style.pointerEvents="none";
//             }
//         },
//         allowClick:function(){
//             for(let i=0; i<ul.children.length; i++){
//                 ul.children[i].style.pointerEvents="auto";
//                 ul.children[i].className=''
//             }
//         },
//         score:0,
//         scoreCard:function(){
//             scoreCard.innerHTML= this.score + "/" +this.questions.length ;
//         }
// }

// window.load=app.load();

// function button(ele){
//     app.check(ele);
//     app.preventClick();
// }

// function next(){
//     app.next();
//     app.allowClick();
// }


const answersTrackerContainer = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumberSpan = document.querySelector(".question-num-value")
const question=document.querySelector(".question")
const totalQuestionsSpan =document.querySelector(".total-questions")
const correctAnswersSpan =document.querySelector(".correct-answers")
const totalQuestionsSpan2 =document.querySelector(".total-questions2")
const percentageSpan =document.querySelector(".percentage")
let timeremain;


let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;

const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")


      const questions=[

        {
                            q: 'Which one of the following waves are used by the common TV remote control? ',
                            options: ['.Radio waves','Lasers','Infrared waves','Ultrasonic waves'],
                            answer:2
                        },
                        {
                            q: 'Which gas is safe and an effective extinguisher for all confined fires?',
                            options: ['Nitrogen dioxide','Carbon dioxide','Sulphur dioxide','Nitrous Oxide'],
                            answer:1
                        },
                        {
                            q: 'Which one of the following elements the drum of a Photostat machine is made up of:',
                            options: ['Aluminium','Selenium','Barium','Caesium'],
                            answer:1
                        },
                        {
                            q: 'Which bacteria is responsible for the formation of curd?',
                            options: ['Lactic acid bacteria','Lactobacillus Acidophillus','Lactobacillus aureus','Bacillus radicicola'],
                            answer:1
                        },
                        {
                            q: 'In poorly ventilated buildings which one of the following inert gases can be accumulated?',
                            options: ['Helium','Neon','Argon','Radon'],
                            answer:3
                        }      
                   ]

totalQuestionsSpan.innerHTML = questions.length;

function load(){
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]    
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
    document.getElementById('time').style.display="block";
                timeremain=20;
                startCount();   
}

//Check if selected answer is correct or wrong
function check(element){
    if(element.id == questions[currentIndex].answer){
        element.className="correct"
        updateAnswersTracker("correct")
        score++
        
    }
    else {
        element.className="wrong"
        updateAnswersTracker("wrong")
       
    }
    disableClick();
}

//Make sure the user selected an item before clicking on the Next button
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option")
    }
    else{
        randomQuestion();
        enableClick();
    }
}

//Listener function for click event on Next button
function next(){
    validate();
}

//Function to disable click for the options
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled")

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }setTimeout(function(){
        hide('correct');
    },1000);
}

//Function to reanable click in the options
function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong")
        setTimeout(function(){
            hide('correct');
        },1000);

    }
}

//Function to select a random question
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    if(index == questions.length){
        quizOver();
    }
    else{
        if(answeredQuestions.length > 0){
            if(answeredQuestions.includes(randomNumber)){
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if(answeredQuestions.length == 0){
            currentIndex = randomNumber
            load()
        }
        //add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

//Restart the quiz
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
}

//Set up answers tracker elements
function answersTracker(){
    for(let i=0; i< questions.length; i++){
        const div =document.createElement("div")
        answersTrackerContainer.appendChild(div);
    }
}

//Update the answers tracker elements
function updateAnswersTracker(newClass){
    answersTrackerContainer.children[index -1].classList.add(newClass)
}

//Displays the quiz-over page if quiz is over
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = questions.length
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%"
}

function tryAgain(){
    window.location.reload();
}
// scripts.js;
// Displaying scripts.js.
function startCount()
{
    
   action = setInterval(function(){
       timeremain -=1;
       document.getElementById('timeremain').innerHTML = timeremain;
       if(timeremain===0)
           {
               document.getElementById('time').style.display="none";
               quizOver(); 
           }
   },1000);
}