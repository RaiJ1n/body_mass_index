const btnCalcBmi = document.querySelector('.btnCalc');
const resultsModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
const weightInput = document.getElementById('inputweight'); 
const heightInput = document.getElementById('inputheight'); 
const bmiDescription = document.querySelector('.bmi-description');
const element = document.getElementsByTagName("p");


btnCalcBmi.addEventListener('click', function () {
    resultsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    const weight = weightInput.value; 
    const height = heightInput.value; 
    const bmiResult = weight / (height ** 2); 

    const finalResults = checkStatus(Math.round(bmiResult));
    bmiDescription.textContent = finalResults; 

    // let = backgroundColor
    //     if (finalResults.includes('Underweight')) {
    //         backgroundColor = 'red';
    //     }else if (finalResults.includes('Normal')) {
    //         backgroundColor = 'green';
    //     }else if (finalResults.includes('Overweight')) {
    //         backgroundColor = 'orange';
    //     }else if (finalResults.includes('OBESE')) {
    //     backgroundColor = 'black';
    //     }

    // resultsModal.style.backgroundColor = backgroundColor;

});


function checkStatus(valueOfBMI) {
    if (valueOfBMI <= 18.4) {
        return `Your BMI is ${valueOfBMI} and you are Underweight`;
    } else if (valueOfBMI >= 18.5 && valueOfBMI <= 24.9) {
        return `Your BMI is ${valueOfBMI} and you are Underweight`;
    } else if (valueOfBMI >= 25 && valueOfBMI <= 39.9) {
        return `Your BMI is ${valueOfBMI} and you are Underweight`;
    } else {
        return `Your BMI is ${valueOfBMI} and you are Underweight`;
    }
}


const btnReset = document.querySelector('.btnReset');
btnReset.addEventListener('click', function () {
    weightInput.value = '';
    heightInput.value = '';
    resultsModal.classList.add('hidden');
    overlay.classList.add('hidden');
    // resultsModal.style.backgroundColor = '';
});




// document.addEventListener('DOMContentLoaded', function () {
//     // Selecting elements
//     const secretNumber = Math.floor(Math.random() * 20) + 1;
//     let score = 20;
//     let highscore = 0;
  
//     const displayMessage = function (message) {
//       document.querySelector('.message').textContent = message;
//     };
  
//     const updateScore = function () {
//       document.querySelector('.score').textContent = score;
//     };
  
//     const updateHighscore = function () {
//       if (score > highscore) {
//         highscore = score;
//         document.querySelector('.highscore').textContent = highscore;
//       }
//     };
  
//     const resetGame = function () {
//       secretNumber = Math.floor(Math.random() * 20) + 1;
//       score = 20;
//       updateScore();
//       displayMessage('Start guessing...');
//       document.querySelector('.guess').value = '';
//       document.querySelector('.number').textContent = '?';
//       document.querySelector('body').style.backgroundColor = '#222';
//     };
  
//     // Event listener for Check button
//     document.querySelector('.check').addEventListener('click', function () {
//       const guess = Number(document.querySelector('.guess').value);
  
//       // Check if there is a valid input
//       if (!guess || guess < 1 || guess > 20) {
//         displayMessage('Please enter a number between 1 and 20!');
//       } else if (guess === secretNumber) {
//         // Correct guess
//         displayMessage('Correct Number!');
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         updateHighscore();
//       } else {
//         // Incorrect guess
//         displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
//         score--;
//         updateScore();
  
//         if (score === 0) {
//           // Game over
//           displayMessage('Game over! 😢 Try again!');
//           document.querySelector('body').style.backgroundColor = '#ff0000';
//         }
//       }
//     });
  
//     // Event listener for Again button
//     document.querySelector('.again').addEventListener('click', resetGame);
  
//     // Initial setup
//     resetGame();
//   });






// 2nd try =========================================================================================================

// // Get elements from the DOM
// const guessInput = document.querySelector('.guess');
// const checkBtn = document.querySelector('.check');
// const againBtn = document.querySelector('.again');
// const message = document.querySelector('.message');
// const numberDisplay = document.querySelector('.number');
// const scoreDisplay = document.querySelector('.score');
// const highscoreDisplay = document.querySelector('.highscore');

// // Initialize game variables
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// // Function to display a message
// const displayMessage = (msg) => {
//   message.textContent = msg;
// };

// // Event listener for the Check button
// checkBtn.addEventListener('click', () => {
//   const guess = Number(guessInput.value);

//   // Check if input is valid
//   if (!guess || guess < 1 || guess > 20) {
//     displayMessage('⚠️ Enter a valid number between 1 and 20!');
//   } else {
//     // Check if the guess is correct
//     if (guess === secretNumber) {
//       displayMessage('🎉 Correct Number! You guessed it!');
//       numberDisplay.textContent = secretNumber;

//       // Update highscore if current score is higher
//       if (score > highscore) {
//         highscore = score;
//         highscoreDisplay.textContent = highscore;
//       }

//       // Change background color on correct guess
//       document.body.style.backgroundColor = '#60b347';
//     } else {
//       // Update score and display appropriate message
//       if (score > 1) {
//         displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//         score--;
//         scoreDisplay.textContent = score;
//       } else {
//         displayMessage('💔 You lost the game! Try again.');
//         scoreDisplay.textContent = 0;
//       }
//     }
//   }
// });

// // Event listener for the Again button
// againBtn.addEventListener('click', () => {
//   // Reset game variables
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   score = 20;
//   displayMessage('Start guessing...');
//   scoreDisplay.textContent = score;
//   numberDisplay.textContent = '?';
//   guessInput.value = '';

//   // Reset background color
//   document.body.style.backgroundColor = '#222';
// });




// =================================================================================================================
// // Generate a random number between 1 and 20
// let secretNumber = Math.floor(Math.random() * 20) + 1;

// let score = 20;
// let highscore = 0;

// // Selecting elements
// const numberElement = document.querySelector(".number");
// const messageElement = document.querySelector(".message");
// const scoreElement = document.querySelector(".score");
// const highscoreElement = document.querySelector(".highscore");
// const guessInput = document.getElementById("inputguess");
// const checkButton = document.querySelector(".check");
// const againButton = document.querySelector(".again");

// // Function to update the message
// function displayMessage(message) {
//   messageElement.textContent = message;
// }

// // Event listener for the Check button
// checkButton.addEventListener("click", function () {
//   const guess = Number(guessInput.value);

//   // Check if there is a valid input
//   if (!guess || guess < 1 || guess > 20) {
//     displayMessage("⛔ Please enter a number between 1 and 20!");
//   } else {
//     // Check the guess
//     if (guess === secretNumber) {
//       displayMessage("🎉 Correct Number!");
//       numberElement.textContent = secretNumber;
//       document.body.style.backgroundColor = "#60b347";
      
//       // Update highscore if the current score is higher
//       if (score > highscore) {
//         highscore = score;
//         highscoreElement.textContent = highscore;
//       }
//     } else {
//       displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
//       score--;
//       scoreElement.textContent = score;
//     }

//     // Check if the game is over
//     if (score === 0) {
//       displayMessage("😢 Game Over! Try Again.");
//       document.body.style.backgroundColor = "#ff4646";
//     }
//   }
// });

// // Event listener for the Again button
// againButton.addEventListener("click", function () {
//   // Reset game state
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   score = 20;
//   displayMessage("Start guessing...");
//   scoreElement.textContent = score;
//   numberElement.textContent = "?";
//   guessInput.value = "";
//   document.body.style.backgroundColor = "#222";
// });




















// bmiDescription.addEventListener = function checkBMI(weight, height) {
//     const bmiResult = weight / 2**height;
  

//     const finalResults = checkStatus(Math.round(bmiResult));
//   }




// function checkStatus(valueOfBMI){
//     if(valueOfBMI <= 18.4) {
//         return `The value of your BMI is ${valueOfBMI} and your are Underweight`
        
//     } else if(valueOfBMI >= 18.5 && valueOfBMI <= 24.9){
//         return `The value of your BMI is ${valueOfBMI} and your are Normal` 
//     } else if(valueOfBMI >= 25 && valueOfBMI <= 39.9){
//         return `The value of your BMI is ${valueOfBMI} and your are Overweight` 
//     } else {
//         return `The value of your BMI is ${valueOfBMI} and your are OBESE`
//     }
//   }

 











// const legalAge = false;

// const results = legalAge ? 'legal' : 'illegal Age'

// console.log('====================================');
// console.log(results);
// console.log('====================================');

// if(legalAge){
//     console.log('====================================');
//     console.log('illegal age');
//     console.log('====================================');
// } else {
//     console.log('====================================');
//     console.log('legal');
//     console.log('====================================');
// }


// // Declare function for checkingvalue of bmi
// function checkBMI(weight, height) {
//     const bmiResult = weight / 2**height;

//     // Call the fucntion Check Status of your BMI
//     const finalResults = checkStatus(Math.round(bmiResult));

//     // Log the results
//     return console.log(finalResults);
// }


// // Declare function to check the status of your bmi
// function checkStatus(valueOfBMI){
//     if(valueOfBMI <= 18.4) {
//         return `The value of your BMI is ${valueOfBMI} and your are Underweight `
//         // return console.log('The value of your BMI is ' + valueOfBMI + 'and your are Underweight')
//     } else if(valueOfBMI >= 18.5 && valueOfBMI <= 24.9){
//         return `The value of your BMI is ${valueOfBMI} and your are Normal `
//     } else if(valueOfBMI >= 25 && valueOfBMI <= 39.9){
//         return `The value of your BMI is ${valueOfBMI} and your are Overweight `
//     } else {
//         return `The value of your BMI is ${valueOfBMI} and your are OBESE `
//     }
// }

// // // Calling the Main function to execute 
// checkBMI(93,1.9);

// function calcAverage(a, b, c) {
//     return (a + b + c) / 3
// }

// const dummyScore = calcAverage(44,23,71)
// console.log(dummyScore);

// Test data 1
// const scoreDolphins = calcAverage(44,23,71)
// const scoreKoalas = calcAverage(65,54,49)

// Test data 2
// const scoreDolphins = calcAverage(85,54,41)
// const scoreKoalas = calcAverage(23,34,27)

// Test Data 3
// const scoreDolphins = calcAverage(5,5,5)
// const scoreKoalas = calcAverage(5,5,5)


// function checkWinner(avgDolphin,avgKoala) {

//     if(avgDolphin > avgKoala ){
//         return `Dolphin wins (${avgDolphin} vs ${avgKoala})`
//     }
//     else if(avgDolphin < avgKoala ){
//         return `Koala wins (${avgKoala} vs ${avgDolphin})`
//     }else {
//         return `No team wins! ❌`
//     }
// }

// const finalResults = checkWinner(scoreDolphins,scoreKoalas);
// console.log(finalResults);

// TEST DATA: Test with different bill values: 275, 40, and 430


// 15% tip



// function calcTip(bill) {

//     if(bill >= 50 && bill <=300){
//         const tip = bill * 0.15
//         const final_bill = tip + bill;
//         return `The bill was ${bill} , the was ${tip}, and the total value is ${final_bill}.`
//     }else {
//         const tip = bill * 0.20
//         const final_bill = tip + bill;
//         return `The bill was ${bill} , the was ${tip}, and the total value is ${final_bill}.`
//     }
//   }

//   const result = calcTip(430);
//   console.log(result);
  

// // Another Machine
// const cutPieces = function (fruit){
//     return fruit * 4;
// }
// // Main Machine
// const fruitProcessor = function (apples , oranges){
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// const numberOfApples = Number(prompt('Enter number of apples: '))
// const numberOfOranges = Number(prompt('Enter number of oranges: '))

// console.log(fruitProcessor(numberOfApples,numberOfOranges));
  