//Event Handling via JS;

let btn = document.querySelector("btn2");
btn2.onclick = () => {
  console.log("A button was clicked");
  let a = 1;
  a++;
  console.log(a);
};

let div = document.querySelector("div2");
div2.onmouseover = () => {
  console.log("You are inside div");
};
//Important Point
//JS event hadnling have more prioirty than the HTML inline event hadnling.
//In JS if you re write an event for an same element the lastet written event work not the old one.
