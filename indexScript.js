/* Project: WHAT'S THE CORRECT SHADING? 
   @author sweta sharma
*/
  function createShadings() {
    return Math.round(Math.random() * 255);
  }
  
  function setShadings (shadeButton, red, green, blue) {
    shadeButton.setAttribute('style', 'background-color: rgb(' + red + ',' + green + ',' + blue + ');');
  }
  
  var shadeButtons = document.getElementsByClassName('shade');
  var title = document.getElementById('shadeValue');
  var outputMessage = document.getElementById('output');
  
  function guessAgain() {
    outputMessage.innerHTML = "Better To Overguess Than Underguess";
    var outputButton = Math.round(Math.random() * (shadeButtons.length - 1));
    
    for (var i = 0; i < shadeButtons.length; i++) {
  
      var red = createShadings();
      var green = createShadings();
      var blue = createShadings();
  
      setShadings(shadeButtons[i], red, green, blue);
  
      if (i === outputButton) {
        title.innerHTML =`r: ${red}, g: ${green}, b: ${blue}`;
      }
  
      shadeButtons[i].addEventListener('click', function(){
          if (this === shadeButtons[outputButton]) {
              outputMessage.innerHTML = "That's Right! You Guessed It.";
          } else {
              outputMessage.innerHTML = "Opps! Try Again!";
          }
      });
    }
  }
  
  document.getElementById('guessAgainButton').addEventListener('click', guessAgain);
  guessAgain();