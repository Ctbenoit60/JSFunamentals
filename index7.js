// The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
//  1) new method 2) print the final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// 1) add new key value for fouls 2) add method ot increment it 3) add the fouls to the half time and fill time message
// d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
  score: 0,
  fouls:0,
  freeThrow() {
    this.score++;
    return this;
  },
  numFouls() {
    this.fouls++;
    return this;
  },
  basket() {
    this.score += 2;
    // console.log(this.score);
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score + " , number of fouls " + this.fouls);
    return this;
  },
  finalScore() {
    console.log("Final score is " + this.score + " , number of fouls " + this.fouls);
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .numFouls()
  .numFouls()
  .basket()
  .finalScore();
