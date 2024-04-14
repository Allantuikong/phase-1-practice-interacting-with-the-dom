document.addEventListener("DOMContentLoaded", () => {
  let counterValue = parseInt(document.querySelector("#counter").innerText);
  const likeCounts = {};
  let intervalId;
  let isPaused = false; // Add a flag to track the paused state

  startCounter();
  plusMinus();

  // Function to increment the counter every second
  function ticking() {
    counterValue++;
    document.querySelector("#counter").innerText = counterValue;
  }

  function startCounter() {
    // Removed the condition here since we want to start the counter regardless
    intervalId = setInterval(ticking, 1000);
    isPaused = false; // Ensure the paused flag is set to false when starting
    togglePauseBtnLabel(); // Update the pause button label
  }

  // Function to Pause the Counter
  function pauseCounter() {
    clearInterval(intervalId);
    intervalId = null;
    isPaused = true; // Set the paused flag to true
    togglePauseBtnLabel();
    disableButtons();
  }

  // Function to Disable buttons except Pause
  function disableButtons() {
    const buttons = document.querySelectorAll("button:not(#pause)");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  // Enable Buttons
  function enableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  // Function to change Pause Label
  function togglePauseBtnLabel() {
    const pauseBtn = document.querySelector("#pause");
    if (isPaused) {
      // Use the paused flag to determine the button label
      pauseBtn.innerText = "resume";
    } else {
      pauseBtn.innerText = "pause";
    }
  }

  function displayLikes(number) {
    const likeCount = likeCounts[number] || 0;
    const likeDisplay = document.querySelector(`.likes${number}`);
    if (likeDisplay) {
      likeDisplay.innerText = `${number} has ${likeCount} likes`;
    } else {
      const newLikeDisplay = document.createElement("li");
      newLikeDisplay.id = `like${number}`;
      newLikeDisplay.innerText = `${number} has ${likeCount} likes`;
      document.querySelector(".likes").appendChild(newLikeDisplay);
    }
  }

  // Function to handle the plus and minus buttons
  function plusMinus() {
    const minusBtn = document.querySelector("#minus");
    const plusBtn = document.querySelector("#plus");

    minusBtn.addEventListener("click", () => {
      counterValue -= 1;
      document.querySelector("#counter").innerText = counterValue;
    });

    plusBtn.addEventListener("click", () => {
      counterValue += 1;
      document.querySelector("#counter").innerText = counterValue;
    });
  }
  // Call the plusMinus function to set up event listeners for plus and minus buttons

  const heartBeat = document.querySelector("#heart");
  heartBeat.addEventListener("click", () => {
    const currentCount = counterValue;
    likeCounts[currentCount] = (likeCounts[currentCount] || 0) + 1;
    displayLikes(currentCount);
  });

  const pauseBtn = document.querySelector("#pause");
  pauseBtn.addEventListener("click", () => {
    if (isPaused) {
      // Use the paused flag to determine the action
      startCounter();
      enableButtons();
      console.log("Resuming counter");
    } else {
      pauseCounter();
      console.log("Pausing counter");
    }
  });

let comment = document.querySelector("#comment-form");
let value = comment.value
console.log(value)





});
