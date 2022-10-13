
import getQuestion from './catalog.js';

export class Millioner {

  constructor() {
    //this.name = name;
    this.wonMoney = '';
  }


  start() {
    this.currentQuestionNo = 1;
    this.currentQuestion = getQuestion(this.currentQuestionNo);
    this.showQuestion();

    document.querySelector('#phoneCall').onclick = (event) => this.callFriend();
    document.querySelector('#fiftyFifty').onclick = (event) => this.fiftyFifty();
  }

  checkAnswer(index) {
    let answer = document.querySelector('.answer' + index);
    if (this.currentQuestion.answers[index].right) {
      answer.classList.add('correct');
      if (this.currentQuestion.questionNo === 15) {
        this.congratulate();
      }
      this.currentQuestionNo++;
      this.currentQuestion = getQuestion(this.currentQuestionNo);
      setTimeout(() => this.showQuestion(), 1000);
    } else {
      let correctAnswer = this.currentQuestion.answers.find((elem) => elem.right);
      let indexOfCorrectAnswer = this.currentQuestion.answers.indexOf(correctAnswer);
      let correctAnswerDiv = document.querySelector('.answer' + indexOfCorrectAnswer);
      correctAnswerDiv.classList.add('correct');


      let modal = document.querySelector(".modal");
      let message = 'Ви програли!';
      if (this.wonMoney !== '') message += " Але можете забрати " + this.wonMoney.slice(3);
      document.querySelector(".text").textContent = message;

      let span = document.querySelector(".close");
      modal.style.display = "block";
      span.onclick = function () {
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


      console.log(correctAnswer);
      console.log('Ви програли');
    }
  }

  showQuestion() {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    if (document.querySelector('.correct') !== null) {
      document.querySelector('.correct').classList.remove('correct');
    }
    document.querySelectorAll('.answers>div').forEach(elem => elem.classList.add('hoverOn'));

    if (document.querySelectorAll('.wrong-answer').length !== 0) {
      document.querySelectorAll('.wrong-answer').forEach(elem => elem.classList.remove('wrong-answer'));
    }

    document.querySelector('.question span').textContent = this.currentQuestion.question;
    document.querySelector('.answer0 span').textContent = this.currentQuestion.answers[0].answer;

    let divAnswer0 = document.querySelector('.answer0');
    divAnswer0.onclick = (event) => {
      document.querySelectorAll('.hoverOn').forEach(elem => elem.classList.remove('hoverOn'));
      if (document.querySelector('.correct')) document.querySelector('.correct').classList.remove('correct');
      divAnswer0.classList.add('selected');

      setTimeout(() => {
        this.checkAnswer(0);
      }, 2000);
    }

    document.querySelector('.answer1 span').textContent = this.currentQuestion.answers[1].answer;
    let divAnswer1 = document.querySelector('.answer1');
    divAnswer1.onclick = (event) => {
      document.querySelectorAll('.hoverOn').forEach(elem => elem.classList.remove('hoverOn'));
      if (document.querySelector('.correct')) document.querySelector('.correct').classList.remove('correct');
      divAnswer1.classList.add('selected');

      setTimeout(() => {
        this.checkAnswer(1);
      }, 2000);
    }
    document.querySelector('.answer2 span').textContent = this.currentQuestion.answers[2].answer;
    let divAnswer2 = document.querySelector('.answer2');
    divAnswer2.onclick = (event) => {
      document.querySelectorAll('.hoverOn').forEach(elem => elem.classList.remove('hoverOn'));
      if (document.querySelector('.correct')) document.querySelector('.correct').classList.remove('correct');
      divAnswer2.classList.add('selected');

      setTimeout(() => {
        this.checkAnswer(2);
      }, 2000);
    }
    document.querySelector('.answer3 span').textContent = this.currentQuestion.answers[3].answer;
    let divAnswer3 = document.querySelector('.answer3');
    divAnswer3.onclick = (event) => {
      document.querySelectorAll('.hoverOn').forEach(elem => elem.classList.remove('hoverOn'));
      if (document.querySelector('.correct')) document.querySelector('.correct').classList.remove('correct');
      divAnswer3.classList.add('selected');

      setTimeout(() => {
        this.checkAnswer(3);
      }, 2000);
    }

    let currentPrice = document.querySelector('.current-price');
    currentPrice.classList.remove('current-price');
    document.querySelector('.level-' + (this.currentQuestionNo - 1)).classList.add('current-price');
    if (document.querySelector('.level-' + (this.currentQuestionNo - 1)).textContent === "10 32 000 грн" || document.querySelector('.level-' + (this.currentQuestionNo - 1)).textContent === " 5 1 000 грн") this.wonMoney = document.querySelector('.level-' + (this.currentQuestionNo - 1)).textContent;

  }

  callFriend() {
    let correctAnswer = this.currentQuestion.answers.find((elem) => elem.right);
    let indexOfCorrectAnswer = this.currentQuestion.answers.indexOf(correctAnswer);
    let correctAnswerDiv = document.querySelector('.answer' + indexOfCorrectAnswer);
    correctAnswerDiv.classList.add('correct');
    document.querySelector('#phoneCall').classList.add('used');
    document.querySelector('#phoneCall').onclick = null;
    document.querySelector('#phoneCall').classList.remove('hints-hover');
  }

  fiftyFifty() {
    let incorrectAnswers = this.currentQuestion.answers.filter((elem) => !elem.right);

    let arrayVariations = this.shuffle(incorrectAnswers);
    for (let i = 0; i < 2; i++) {
      let indexOfIncorrectAnswer = this.currentQuestion.answers.indexOf(arrayVariations[i]);
      let incorrectAnswerDiv = document.querySelector('.answer' + indexOfIncorrectAnswer);
      incorrectAnswerDiv.classList.add("wrong-answer");
      document.querySelector('#fiftyFifty').classList.add('used');
      document.querySelector('#fiftyFifty').onclick = null;
      document.querySelector('#fiftyFifty').classList.remove('hints-hover');
    }
  }

  congratulate() {
    let modal = document.querySelector(".modal");
    document.querySelector(".text").textContent = 'Вітаємо, ви виграли мільйон!';
    let span = document.querySelector(".close");
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}

// Использование:
let millioner = new Millioner();
millioner.start();