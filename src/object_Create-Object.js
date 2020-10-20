function UserCreate(name, score) {
  // Creating a object and passing all the methods to it,
  // So all the method is stored under its prototype
  const newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunction = {
  increment: () => {
    this.score++;
  },
  name: () => {
    console.log("Metgod");
  }
};
// const a = UserCreate("Wahid", 17);
// console.log(a);

function paidUserCreator(paidName, paidScore, accountBalance) {
  // We are creating a instance of UserCreate
  const newPaidUser = UserCreate(paidName, paidScore);
  /* 
    setPrototypeOf(Parent, Child) -> Parent.__proto__ = child
    Here, Child => paidUserFunctions => paidUserFunctions.__proto__ = userFunction(Only Methods)
  */
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);

  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: () => {
    this.accountBalance++;
  }
};

// paidUserFunctions.__proto__ = userFunction Object
Object.setPrototypeOf(paidUserFunctions, userFunction);
console.log(paidUserFunctions);
const paidWahid = paidUserCreator("Suvashini", 8, 25);
console.log(paidWahid);
