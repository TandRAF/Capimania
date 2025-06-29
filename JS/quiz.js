const allQuizBlocks = document.querySelector(".all-quiz-blocks");

let renderQuestion = () => {
    return(allQuizBlocks.innerHTML = quizData.map((x) =>{
        return `
        <div class="quiz-block">
        <div class="quiz-question">${x.question}?</div><div class="orizontal-line"></div><div class="quiz-variant">
        <p class="quiz-variant-text">${x.answers[0].value}</p>
        <span class="quiz-variant-circel"></span>
        </div><div class="quiz-variant">
        <p class="quiz-variant-text"> ${x.answers[1].value}</p>
        <span class="quiz-variant-circel"></span>
        </div><div class="quiz-variant">
        <p class="quiz-variant-text">${x.answers[2].value}</p>
        <span class="quiz-variant-circel"></span>
        </div><div class="quiz-variant">
        <p class="quiz-variant-text"> ${x.answers[3].value}</p>
        <span class="quiz-variant-circel"></span>
        </div>
        </div>`;
    }).join(""))
};
renderQuestion();

const questions = document.querySelectorAll(".quiz-question");
const quizVariants = document.querySelectorAll(".quiz-variant");
const passedQuestionLevel = document.querySelector(".pass-question-level"),
       passedQuestionNumber = document.querySelector(".pass-question-number"),
       remainQuestionLevel = document.querySelector(".remain-question-level"),
       figure = document.querySelector(".figure-images"),
       remainQuestionNumber = document.querySelector(".remain-question-number");

let activeIndex = 0;
let questionNumber = 0;
let allHights = 0; 
let passedIndex = 0;
let remainIndex = quizData.length;
let scoreArray = [];
let varinatActiveArray = [];

const quizBlocks = document.querySelectorAll(".quiz-block");

const activeQuestion = (active) =>{
    for(let quizBlock of quizBlocks){
        quizBlock.classList.remove("active");
    }
    quizBlocks[active].classList.add("active");
}
const activeVariant = (m,n) =>{
    varinatActiveArray[m] = n;
    for(let quizVariant of quizVariants){
        quizVariant.classList.remove("active");
    }
    varinatActiveArray.map((x)=>{
        if(x != "empty"){
            quizVariants[x].classList.add("active");
        }
    })
}

quizVariants.forEach((item, index) =>{
    item.addEventListener('click',() =>{
        let answerIndex = 0;
        if(index >= 4){
            answerIndex = index-(4*questionNumber);
        }
        quizVariants[answerIndex].classList.add("active");
        scoreArray[questionNumber] = (+quizData[questionNumber].answers[answerIndex].ponits);
        activeVariant(questionNumber, index);
        quizVariants[index].classList.add("active");
        nextQuestion(questionNumber);
        questionUserStatus(passedIndex, remainIndex);
        if((questionNumber+1) < quizData.length){
            questionNumber++;
        }
    })
});
activeQuestion(activeIndex);

const questionUserStatus = (n,m) =>{
    passedQuestionNumber.innerHTML = n;
    remainQuestionNumber.innerHTML = m;
    passedQuestionLevel.style.width = n*10 + "px";
    remainQuestionLevel.style.width = m*10 + "px";
}
window.addEventListener("load", ()=>{
    questionUserStatus(passedIndex, remainIndex);
});

const prevBtn = document.getElementById("preBtn");
prevBtn.addEventListener("click", () =>{
    PrevQuestion(questionNumber);
    questionNumber--;
    if(questionNumber <=0 ){
        questionNumber = 0;
    }
    questionUserStatus(passedIndex, remainIndex);
})
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", ()=>{
    if(varinatActiveArray[questionNumber] == "empty"){
        varinatActiveArray[questionNumber] = "empty";
    }
    nextQuestion(questionNumber);
    questionUserStatus(passedIndex, remainIndex);
    if((questionNumber+1) < quizData.length){
        questionNumber++;
    }
})

const nextQuestion = (n) =>{
    if((passedIndex+1) == quizData.length){
        activeModal();
    }else if((n+1) == quizData.length){
        activeQuestion(n);
    }
    else{ 
        passedIndex = 0;
        let height = quizBlocks[n].clientHeight;
        activeIndex++;
        activeQuestion(activeIndex);
        allHights+= height;
        allQuizBlocks.style.transform = "translateY(" + -(allHights) + "px)";
        figure.style.transform = "rotate(" + (n+1)*60 +"deg)";
        varinatActiveArray.map((x)=>{
            if(x === "empty"){
                passedIndex+=0;
            }else{
                passedIndex++;
            }
        })
        remainIndex = quizBlocks.length - passedIndex;
    }
}

const PrevQuestion = (n) =>{
    if(n == 0 ){
        allQuizBlocks.style.transform = "translateY(" + 0 + "px)";
        activeQuestion(0);
    }
    else{
        passedIndex = 0;
        let height = quizBlocks[(n-1)].clientHeight;
        activeIndex--;
        activeQuestion(activeIndex);
        allHights-=height;
        allQuizBlocks.style.transform = "translateY(" + -(allHights) + "px)";
        figure.style.transform = "rotate(" + (n-1)*60 +"deg)";
        varinatActiveArray.map((x)=>{
            if(x === "empty"){
                passedIndex+=0;
            }else{
                passedIndex++;
            }
        });
        remainIndex = quizBlocks.length - passedIndex;
    }
}
const score = scoreArray.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

//Modal
const modal = document.querySelector(".modal-block");

const activeModal = () =>{
    modal.style.display = "flex";
}