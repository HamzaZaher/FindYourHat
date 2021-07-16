const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
class Field {
  constructor(arr) {
    this._arr = arr;
    this._result = false;
  }

  print() {
    for (let i = 0; i < this._arr.length; i++) {
      let row = "";
      for (let j = 0; j < this._arr[0].length; j++) {
        row = this._arr[i].join("");
      }
      console.log(row);
    }
  }
  firstPosition(arr) {
    for (let i = 0; i < this._arr.length; i++) {
      for (let j = 0; j < this._arr[0].length; j++) {
        if (this._arr[i][j] === "*") {
          arr.push(i, j);
        }
      }
    }
  }
  play() {

    const pos = [];
    this.firstPosition(pos);
    this.print();
    while (!this._result) {
      const move = prompt("which way do u want to move?");
      /*index [0](row) in pos array will change by +1 when we
              go down (d/D)
            */
      if (move === "d" || move === "D") {
        pos[0] = pos[0] + 1;
        if (pos[0] >= this._arr.length || pos[0] < 0) {
          console.log("GAME OVER!");
          console.log(Error("out of bound instructions"));
          this._result = true;
          break;
        }

        if (this._arr[pos[0]][pos[1]] === hole) {
          console.log("GAME OVER!");
          this._result = true;
        }
        if (this._arr[pos[0]][pos[1]] === hat) {
          console.log("YOU WON!");
          this._result = true;
        }

        this._arr[pos[0]][pos[1]] = pathCharacter;
      } else if (move === "u" || move === "U") {
        /*
                index [0](row) in pos array will change by -1 when we
                 go up (u/U)
            */
        pos[0] = pos[0] - 1;
        if (pos[0] >= this._arr.length || pos[0] < 0) {
          console.log("GAME OVER!");
          console.log(Error("out of bound instructions"));
          this._result = true;
          break;
        } else if (this._arr[pos[0]][pos[1]] === hole) {
          console.log("GAME OVER!");
          this._result = true;
        } else if (this._arr[pos[0]][pos[1]] === hat) {
          console.log("YOU WON!");
          this._result = true;
        }

        this._arr[pos[0]][pos[1]] = pathCharacter;
      } else if (move === "r" || move === "R") {
        /*
                index [1](column) in pos array will change by +1 when we
                 go right (r/R)
            */
        pos[1] = pos[1] + 1;
        if (pos[1] >= this._arr.length[0] || pos[1] < 0) {
          console.log("GAME OVER!");
          console.log(Error("out of bound instructions"));
          this._result = true;
          break;
        } else if (this._arr[pos[0]][pos[1]] === hole) {
          console.log("GAME OVER!");
          this._result = true;
        } else if (this._arr[pos[0]][pos[1]] === hat) {
          console.log("YOU WON!");
          this._result = true;
        }

        this._arr[pos[0]][pos[1]] = pathCharacter;
      } else if (move === "l" || move === "L") {
        /*
                index [1](column) in pos array will change by -1 when we
                 go left (l/L)
            */
        pos[1] = pos[1] - 1;
        if (pos[1] >= this._arr.length[0] || pos[1] < 0) {
          console.log("GAME OVER!");
          console.log(Error("out of bound instructions"));
          this._result = true;
          break;
        } else if (this._arr[pos[0]][pos[1]] === hole) {
          console.log("GAME OVER!");
          this._result = true;
        } else if (this._arr[pos[0]][pos[1]] === hat) {
          console.log("YOU WON!");
          this._result = true;
        }

        this._arr[pos[0]][pos[1]] = pathCharacter;
      }

      this.print();
    }
  }
  static generateField(height, width, percentOfHoles) {
    let randomizedField = [];

    
    let percentOfHat = Math.random() * 100;

    function fillHole() {
      if (percentOfHoles >= 0 && percentOfHoles <= 100) {
        let chanceOfFieldCharacter = Math.floor(Math.random() * 100);
        if (chanceOfFieldCharacter < percentOfHoles) {
          return hole;
        } 
        else {
          return fieldCharacter;
        }
      }
    }

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push(fillHole());
      }
      randomizedField.push(row);
    }
    randomizedField[0][0] = pathCharacter;
    
      let tempR = Math.floor(Math.random() * height);
      let tempC = Math.floor(Math.random() * width);
      while (tempC === 0 && tempR === 0) {
        tempR = Math.floor(Math.random() * height);
        tempC = Math.floor(Math.random() * width);
      }
      randomizedField[tempR][tempC] = hat;
    
    return randomizedField;
  }
}
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

let game = Field.generateField(5, 3, 1);
myField._arr=game;

myField.play();
