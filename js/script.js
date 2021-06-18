// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



//*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

//filter
const numbers = [10,11,12,13,14,15,16,17,18,19];

function newRange(array,numMin,numMax){

  const range = array.filter((numero,index) => {
    if(index > numMin && index < numMax){
      return numero;
    }
  });
  return range;
}

const range = newRange(numbers,3,6);
console.log(range);
