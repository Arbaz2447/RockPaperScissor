//Global Declarations
let user_name = prompt("Enter name", "Guest");
let user = document.getElementById("headings");
user.innerHTML = user_name;
let pc = "";
let Me = "";
let result;
let user1;
let score = document.getElementById("score");
score.innerHTML = "Play Now";
let computer = document.getElementById("computer");


// User input function
const user_input = () => {
  user1 = document.getElementById("User");
  Me = user1.value;
  Me = Me.toLowerCase();
  console.log(Me);
};

// Event Listener for Submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  user_input();
  computer_output();
  computer = document.getElementById("computer");
  computer.value = pc;
  console.log(pc);
  win();
  score = document.getElementById("score");
  score.innerHTML = result;
  play1("onck.wav");
  sleep1();
});

// Event Listener for reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  pc = "";
  Me = "";
  computer.value = pc;
  user1.value = Me;
  play1("onck.wav");
  sleep1();
});

// Computer Random Value Generating Function
const computer_output = () => {
  let a = 1,
    b = 90;
  a = (b - a) * Math.random();
  a = parseInt(a);
  if (a <= 30) {
    pc = "Rock";
  }
  if (a <= 60 && a > 30) {
    pc = "Paper";
  }
  if (a <= 90 && a > 60) {
    pc = "Scissor";
  }
};

// Win Function

const win = () => {
  //draw cases

  if (pc === "Rock" && Me === "rock") {
    console.log("Draw");
    result = "Draw";
    play1("Draw.mp3");
  } else if (pc === "Paper" && Me === "paper") {
    console.log("Draw");
    result = "Draw";
    play1("Draw.mp3");
  } else if (pc === "Scissor" && Me === "scissor") {
    console.log("Draw");
    result = "Draw";
    play1("Draw.mp3");
  }

  //win cases
  else if (pc === "Rock" && Me === "paper") {
    console.log("You Won");
    result = "You Won";
    play1("Victory.mp3");
  } else if (pc === "Paper" && Me === "scissor") {
    console.log("You Won");
    result = "You Won";
    play1("Victory.mp3");
  } else if (pc === "Scissor" && Me === "rock") {
    console.log("You Won");
    result = "You Won";
    play1("Victory.mp3");
  }

  //lose cases
  else if (pc === "Rock" && Me === "scissor") {
    console.log("You Lose");
    result = "You Lose";
    play1("Loseprimary.mp3");
  } else if (pc === "Paper" && Me === "rock") {
    console.log("You Lose");
    result = "You Lose";
    play1("Loseprimary.mp3");
  } else if (pc === "Scissor" && Me === "paper") {
    console.log("You Lose");
    result = "You Lose";
    play1("Loseprimary.mp3");
  }

  //default
  else {
    console.log("Enter any of 3 valid choices");
    result = `Use : 'Rock' , 'Paper' , 'Scissor'`;
    computer.value = "Invalid!";
     play1("invalid.mp3");
  }
};

function play1(src) {
  let audio = new Audio(src);
  audio.loop = true;
  audio.play();
  audio.loop = false;
}
let sleep1=async()=>{
  await sleep2();
}

let sleep2=async()=>{
    return new Promise((resolve,reject)=>{

        setInterval(() => {
          resolve();
        }, 500);
    })
}
