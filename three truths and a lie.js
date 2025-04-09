function do (something)
function roll(choice) {
  //var guessingnumber=Math.flo
  // or(Math.random() * 10) + 1;
  //let myinput=document.getElementById("fname");
  let messagecenter=document.getElementById("messagecenter");
  if (myinput.value==guessingnumber) {
    messagecenter.innerHTML="Nice, you guessed the lie." + choice; 
  } else {
    messagecenter.innerHTML="Sorry that was a truth! " + guessingnumber +". Better luck next time!";
 
}
