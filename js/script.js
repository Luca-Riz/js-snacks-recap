// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



//*filter
// const numbers = [10,11,12,13,14,15,16,17,18,19];

// function newRange(array,numMin,numMax){

//   const range = array.filter((numero,index) => {
//     if(index >= numMin && index <= numMax){
//       // console.log(index,numero);
//       return numero;
//     }
//   });
//   // console.log(range);
//   return range;
// }

// const range = newRange(numbers,3,6);
// // console.log(range);


// //*forEach
const numbers = [10,11,12,13,14,15,16,17,18,19];
const range = [];

function newRange(array,numMin,numMax){
  array.forEach((item,index) => {
    if(index >= numMin && index <= numMax){
      range.push(item)
    }
  });
}

newRange (numbers,3,6)
console.log(range);

