// sets an event listener for the button click that calls function changeColour
document.getElementById("changeButton").onclick = changeColour;

// Generates a random function when button pressed
function changeColour() {
  // Declares hexCode to a string with 16 possible hex characters
  const hexCode = "0123456789ABCDEF";

  // Declares variable to store the generated hex code in and affixes a hash
  let colour = "#";

  // Loop used to iterate through the characters stored in constant hexCode
  for (let i = 0; i < 6; i++) {
    // concatenate a random character stored in hexCode to colour variable
    colour += hexCode[Math.floor(Math.random() * 16)];
  }

  // Sets element with backgroundColour ID to the hex variable held in colour
  document.getElementById("backgroundColour").style.backgroundColor = colour;

  // Sets colourCode element equal to the hex variable stored in colour
  document.getElementById("colourCode").textContent = colour;
}
