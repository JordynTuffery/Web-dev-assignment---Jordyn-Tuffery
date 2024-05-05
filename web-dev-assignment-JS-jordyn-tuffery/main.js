function changeHeadingStyling() {
  var h1 = document.querySelector("h1");
  h1.style.color = "#f33";
  h1.style.textAlign = "center";
}

//document.querySelector("button").addEventListener("click", changeHeadingStyling);

function changeTheme() {
  console.log("this is working");
}

function addToList() {
  var input = document.querySelector("#input");
  var myValue = input.value;

  var ListItem = document.createElement("Li");
  ListItem.textContent = myValue;

  document.querySelector("ul").appendChild(ListItem);
}
