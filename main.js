const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class Field{
    constructor(arr){
        this._arr = arr;
        this._result = true;
         const position = function(){
            for(let i =0 ; i<this._arr.length;i++){
                for(let j =0 ; j<this._arr[0].length;j++){
                    if(this._arr==='*'){
                        this._position.pop(i);
                    }
                }
            }
           
        }
    }
    print(){
        for(let i =0; i<this._arr.length;i++){
            let row='';
            for(let j =0 ; j<this._arr[0].length;j++){
                row = this._arr[i].join('');
            }
            console.log(row);
        }
    }
    position(arr){
        for(let i =0 ; i<this._arr.length;i++){
            for(let j =0 ; j<this._arr[0].length;j++){
                if(this._arr[i][j]==='*'){
                    arr.push(i,j);
                    
                }
            }
        }
       
    }
    play(){
        let pos = [];
        this.position(pos);
        console.log(pos)
        while(!this._result==false){
            const move = prompt('which way do u want to move?');
            if(move==='d'|| move==='D'){
                break;
            }
        }
    }
}
const myField = new Field([
    ['*','░' , 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  myField.print();
  myField.play();