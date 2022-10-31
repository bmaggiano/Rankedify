const userInput = document.getElementById('userInput')
const loginFormHandler = async (event) => {event.preventDefault();
}


const userInputOne = document.getElementById("input-one");

userInputOne.addEventListener("input", () => {
});

userInputOne.addEventListener("invalid", () => {
  userInputOne.setCustomValidity("Please fill in your First Game.");
});

const userInputTwo = document.getElementById("input-two");

userInputTwo.addEventListener("input", () => {
});

userInputTwo.addEventListener("invalid", () => {
  userInputTwo.setCustomValidity("Please fill in your Second Game.");
});

const userInputThree = document.getElementById("input-three");

userInputThree.addEventListener("input", () => {
});

userInputThree.addEventListener("invalid", () => {
  userInputThree.setCustomValidity("Please fill in your Third Game.");
});

const userInputFour = document.getElementById("input-four");

userInputFour.addEventListener("input", () => {
});

userInputFour.addEventListener("invalid", () => {
  userInputFour.setCustomValidity("Please fill in your Fourth Game.");
});

const userInputFive = document.getElementById("input-five");

userInputFive.addEventListener("input", () => {
});

userInputFive.addEventListener("invalid", () => {
  userInputFive.setCustomValidity("Please fill in your Fifth Game.");
});


const userSumbit = document.getElementById("submitBtn") 
  


  const handleSumbit = async () => {
    const game_input_one = userInputOne.value.trim();
    const game_input_two = userInputTwo.value.trim();
    const game_input_three = userInputThree.value.trim();
    const game_input_four = userInputFour.value.trim();
    const game_input_five = userInputFive.value.trim();
    alert(game_input_one)
    if (game_input_one && game_input_two && game_input_three && game_input_four && game_input_five) {
      const response = await fetch('/api/userInput', {
          method: 'POST',
          body: JSON.stringify({ game_input_one, game_input_two, game_input_three, game_input_four, game_input_five }),
          headers: { 'Content-Type': 'application/json' },
      });
  }
  
  }
  userSumbit.addEventListener('click', handleSumbit)
