// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let addedFriends = [];

const inputName = document.querySelector(".input-name");
const buttonAdd = document.querySelector(".button-add");
const friendsList = document.querySelector(".name-list");

const addFriend = () => {
  let value = inputName.value;
  if (value) {
    addedFriends.push(value);
  } else {
    alert("Por favor, inserte un nombre");
  }
  inputName.value = "";
  updateFriendsList(addedFriends);
  console.log(addedFriends);
};

const updateFriendsList = (friends) => {
  friendsList.innerHTML = "";
  for (const name of friends) {
    friendsList.innerHTML = friendsList.innerHTML + `<li>${name}</li>`;
  }
};

const sortFriend = (friends) => {
  console.log(friends);
  if (addedFriends) {
    const sortedFriendPosition = Math.floor(Math.random() * friends.length);
    document.querySelector(
      ".button-draw"
    ).innerHTML = `El amigo secreto es ${friends[sortedFriendPosition]}`;
  }
};

// const test = inputName.addEventListener("change", () =>
//   console.log(inputName.value)
// );
