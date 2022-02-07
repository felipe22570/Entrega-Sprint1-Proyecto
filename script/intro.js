const imgOne = document.getElementById("imgOne");
const intro1 = document.getElementById("intro-one");
const intro2 = document.getElementById("intro-two");
const intro3 = document.getElementById("intro-three");
const btnOne = document.getElementById("seguir-one");
const btnTwo = document.getElementById("seguir-two");

imgOne.addEventListener("click", () => {
   intro1.style.display = "none";
   intro2.style.display = "flex";
   intro3.style.display = "none";
});

btnOne.addEventListener("click", () => {
   intro1.style.display = "none";
   intro2.style.display = "none";
   intro3.style.display = "flex";
});

btnTwo.addEventListener("click", () => {
   window.location.href = "main.html";
});
