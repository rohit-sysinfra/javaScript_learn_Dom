let mode = "light";
let curr = document.querySelector(".btn");
let body = document.querySelector("body");
curr.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.style.backgroundColor="blue";
  } else {
         body.style.backgroundColor="green";

    mode = "light";
   
  }
  console.log(mode);
});
