//Global Declarations 
let user_name = prompt("Enter name", "Guest");
let user = document.getElementById("user_name");
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
  Me=Me.toLowerCase();
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
});


// Event Listener for reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  pc = "";
  Me = "";
  computer.value = pc;
  user1.value = Me;
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
  } else if (pc === "Paper" && Me === "paper") {
    console.log("Draw");
    result = "Draw";
  } else if (pc === "Scissor" && Me === "scissor") {
    console.log("Draw");
    result = "Draw";
  }

  //win cases
  else if (pc === "Rock" && Me === "paper") {
    console.log("You Won");
    result = "You Won";
  } else if (pc === "Paper" && Me === "scissor") {
    console.log("You Won");
    result = "You Won";
  } else if (pc === "Scissor" && Me === "rock") {
    console.log("You Won");
    result = "You Won";
  }

  //lose cases
  else if (pc === "Rock" && Me === "scissor") {
    console.log("You Lose");
    result = "You Lose";
  } else if (pc === "Paper" && Me === "rock") {
    console.log("You Lose");
    result = "You Lose";
  } else if (pc === "Scissor" && Me === "paper") {
    console.log("You Lose");
    result = "You Lose";
  }

  //default
  else {
    console.log("Enter any of 3 valid choices");
    result = `Use : 'Rock' , 'Paper' , 'Scissor'`;
    computer.value="Invalid!"
  }
};
