
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id:4,
    question:"How to write an IF statement in JavaScript?",
    answer:"if(i==5)",
    options:[
      "if i==5 ",
      "if(i==5)",
        "if i=5",
        "None Of These"


    ]

},
{
    id:5,
    question: "Where is the correct place to insert a JavaScript?",
    answer:"The body section",
    options:[
      "The head section",
      "Both A & B",
      "None Of These",
      "The body section",
    ]
},
// {
//     id:3,
//     Question: "How do you call a function named 'myFunction'?",
//     answer:"myFunction",
//     Options:[
//         "call function myFunction()",
//         "call myFunction()",
//         "myFunction",
//         "None Of These()",
//     ]
// },
{
    id:6,
    question:"How do you create a function in JavaScript?",
    answer:"function myFunction()",
    options:[
      "function=myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "None Of These"



    ]

},
{
    id:7,
    question:"How do you write'Hello World' in an alert box?",
    answer:"alert('Hello World')",
    options:[
      "alertBox('Hello World')",
      "alert('Hello World')",
        "msg('Hello World')",
        "msgBox('Hello World')",
    ]
}

];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
