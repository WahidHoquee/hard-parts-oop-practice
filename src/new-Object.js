function UserCreator(name, score) {
  this.name = name;
  this.score = score;
  console.log(this);
}

UserCreator.prototype.increment = function() {
  this.score++;
};

UserCreator.prototype.login = function() {
  console.log("Login");
};

const user1 = new UserCreator("Wahid", 22);

// user1.increment()
console.log(user1);
console.log(UserCreator.prototype);

function PaidUserCreator(name, score, accountBalance) {
  /*
    - Passing empty "this" object created by new keyword of PaidUserCreator
    - We are passing "this" as a reference not by value as We are not calling UserCreator with new Keyword
    - The value of PaidUserCreator's "this" will be manipulated under the UserCreator's "this" Execution context
    - Calling UserCreator will not return any object this time, As we are not using new
    - As we are passing "this" to the UserCreator, It will be mutating the PaidUserCreator's "this"
    Behind the Scene: This "this" is of PaidUserCreator
      this.name = name
      this.score = score
  */
  UserCreator.call(this, name, score);

  //The following one is geanral "this" manipulation
  this.accountBalance = accountBalance;

  //The this object got the prototype object of PaidUserCreator
  //PaidUserCreator's prototype is connected to UserCreator's Prototype through the Object.create() method
  //As its __proto__ property
  //Auto return "this" genarated by new Keyword
}

//We are replacing the default prototype Object
//Deafult prototype object got the UserCreators protoype
//As __proto__ we passed it in the Object.create()
PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.increaseBalance = () => {
  this.accountBalance++;
};

const paidUser = new PaidUserCreator("Himel", 29, 5000);
console.log(paidUser);
