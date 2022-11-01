const userInput = document.getElementById('userInput')
const loginFormHandler = async (event) => {
  event.preventDefault();
}

const userInputOne = document.getElementById("input-one");
const userInputTwo = document.getElementById("input-two");
const userInputThree = document.getElementById("input-three");
const userInputFour = document.getElementById("input-four");
const userInputFive = document.getElementById("input-five");


const userSumbit = document.getElementById("userInpSubmitBtn")



const handleSumbit = async () => {
  const game_input_one = userInputOne.value.trim();
  const game_input_two = userInputTwo.value.trim();
  const game_input_three = userInputThree.value.trim();
  const game_input_four = userInputFour.value.trim();
  const game_input_five = userInputFive.value.trim();
  if (game_input_one && game_input_two && game_input_three && game_input_four && game_input_five) {
    const response = await fetch('/api/userInput', {
      method: 'POST',
      body: JSON.stringify({ game_input_one, game_input_two, game_input_three, game_input_four, game_input_five }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const { user_id } = await response.json()
      document.location.replace(`/list/${user_id}`);
    } else {
      alert('Failed to sign up.');
    }
  }

}
userSumbit.addEventListener('click', handleSumbit)
