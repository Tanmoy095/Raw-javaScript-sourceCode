const account = {
  owner: "tanmoy",
  movements: [200, 100, 50, 49, 44],
  get latest() {
    return this.movements.splice(-1).pop();
  },
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
