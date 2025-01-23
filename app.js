// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let addedFriends = [];

const inputName = document.querySelector(".input-name");
const buttonAdd = document.querySelector(".button-add");

const addFriend = () => {
  let value = inputName.value;
  if (value) {
    addedFriends.push(value);
  } else {
    alert("Por favor, inserte un nombre");
  }
  inputName.value = "";
  console.log(addedFriends);
};

// const test = inputName.addEventListener("change", () =>
//   console.log(inputName.value)
// );

console.log(inputName);
