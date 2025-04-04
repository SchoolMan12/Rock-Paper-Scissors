function roll(choice) {
  //Created an array to hold the rock paper scissors choices
  var choices = ['🗿', '🧻', '✂️'];
  //This picks a random number 1-3
  var guessingnumber = Math.floor(Math.random() * 3);
  //This makes a variable, computer and sets it equal 
  var computer = choices[guessingnumber];
  //This gets the html element to write out what the person chose and computer chose
  let messagecenter = document.getElementById("messagecenter");
  messagecenter.innerHTML = "Your choice: " + choice + " Computers choice: " + computer;
  let results = document.getElementById("results");

  //A tie, if user choice matchs computer choice, they tie  
  if (choice === computer) {
    results.innerHTML = "You Tie! ";
  //If the choice is rock and the computer is scissors, the user wins
  } else if (choice === '🗿' && '✂️' === computer) {
    results.innerHTML = "You Win! ";
  //If the choice is paper and the computer is rock, the user wins
  } else if (choice === '🧻' && '🗿' === computer) {
    results.innerHTML = "You Win! ";
  //If the choice is scissors and the computer is paper, the user wins
  } else if (choice === '✂️' && '🧻' === computer) {
    results.innerHTML = "You Win! ";
  //All other cases, the user loses
  } else {
    results.innerHTML = "You Lose";
  }

}
