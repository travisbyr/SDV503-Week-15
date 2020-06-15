// function slowHash(key) {
// 	for(var i = 0; i < 10000; i++) {
// 	console.log("everyday im hashing");
//     }
//     return key[0].charCodeAt(0);
// }

// function slowHash(key){
//     for(let i = 0; i < 1000; i++){
//         console.log("Everyday im hashing")
//     }
//     return key[0].charCodeAt(0)
// }

// function randomHash(key){
//     return Math.floor(Math.random()*1000)
// }

// function hashExample(key){
//     return 0
// }

// function hash(ley, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         // map "a" to 1, "b" to 2, "c" to 3, etc.
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }
// hash("pink", 10); //0
// hash("orangered", 10); // 7
// hash("cyan", 10); //3

//Hash Table Example
// class HashTable {
//   constructor(size = 53) {
//     this.keyMap = new Array(size);
//   }
//   _hash(key) {
//     let total = 0;
//     let _PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96;
//       total = (total * _PRIME + value) % this.keyMap.length;
//     }
//     return total;
//   }
// }

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return Math.abs(total);
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
let hashTable = new HashTable();
hashTable.set("Beans", 0);
console.log(hashTable.keyMap);
hashTable.set("Jelly", 1);
hashTable.set("Potatoes", 2);
console.log(hashTable.keyMap);
console.log(hashTable.keys())
console.log(hashTable.values())

//--------------------------------------------------------------------------------------------
 
let a = 3 // global variable decleared
function addTwo(x) {
  let ret = x + 2 // x is local variable, use limited to the function
  return ret
}
console.log(addTwo(a))