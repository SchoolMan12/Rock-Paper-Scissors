function roll(choice) {
  //var guessingnumber=Math.floor(Math.random() * 10) + 1;
  //let myinput=document.getElementById("fname");
  let messagecenter=document.getElementById("messagecenter");
  //if (myinput.value==guessingnumber) {
    messagecenter.innerHTML="Congratulations! You guessed the correct number." + choice; 
  //} else {
    //messagecenter.innerHTML="Sorry, the correct number was " + guessingnumber +". Better luck next time!";
  //}
}
