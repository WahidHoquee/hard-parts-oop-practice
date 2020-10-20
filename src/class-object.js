class UserCreate {
  constructor(name, score) {
    console.log(this);

    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
}

const wahid = new UserCreate("Wahid", 9);
// console.log(wahid);

class PaidUserCreate extends UserCreate {
  constructor(name, score, balance) {
    super(name, score);
    // console.log(this);
    this.balance = balance;
  }
  decrement() {
    this.score--;
  }
}

console.log(PaidUserCreate.__proto__);
const wakil = new PaidUserCreate("Wakil", 28, 2700);
// console.log(wakil);
