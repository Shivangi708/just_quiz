var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q: 'In an absolute loading scheme, which loader function is accomplished by programmer?',
                options: ['Linking','Allocation','Both (a) and (b)',' Reallocation'],
                answer:3
            },
            {
                q: 'Specialized program that allows user to utilize in specific application is classified as',
                options: [' relative programs','application programs','relative programs',' replicate programs'],
                answer:2
               
            },
            {
                q: ' Examples of system programs includes',
                options: ['operating system of computer','trace program','compiler',' all of above'],
                answer:4
            },
            {
                q: 'The translator which perform macro expansion is called a',
                options: ['Macro processor','Macro pre-processor','Micro pre-processor','Assembler'],
                answer:2
            },
            {
                q: 'A program in execution is called',
                options: ['Process','Instruction',' Procedure',' Function'],
                answer:1
            } ,    
            {
                q: ' Which is the place of worship for Judoists?',
                options: ['Synagogue','First temple','No church or temple','Monastery'],
                answer:0
            },
            {
                q: 'Which is the associated sport of Bombay Gold Cup?',
                options: ['Basketball','Weightlifting','Hockey','Football'],
                answer:2
               
            },
            {
                q: 'Union Minister Shri Ram Vilas Paswan hails from The Indian state of --',
                options: ['Odisha','Jharkhand','Uttar Pradesh',' Bihar'],
                answer:3
            },
            {
                q: ' Google launched which app to help people maintain social distancing?',
                options: ['Dodar','Kedar','Sodar','Cedar'],
                answer:2
            },
            {
                q: 'At present, how many high courts are there in India?',
                options: ['25','21','28','29'],
                answer:1
          
            }],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
            // if(this.index<=4){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/" +this.questions.length ;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}
