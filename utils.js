function beautylog(matrix) {
    for (let i=0; i< matrix.length; i++) {
        console.log(matrix[i])

    }
}

function blankmatrix(matrix = []) {
    let newMat = [];
    for (let i = 0; i < matrix.length; i++) {
        newMat[i] = []
    }
    return newMat;
}


function matrixsum(M, H) {
    if(M.length !== H.length || M[0].length !== H[0].length) {
        console.log("cant be done");
        return;
    } else {
        let C = blankmatrix(M);
        for( let row = 0; row < M.length; row++) {
            for( let col = 0; col < M[0].length; col++) {
                C[row][col] = M[row][col] + H[row][col];
            }
        }
        return C;
    }
    
}

function matrixProduct(M1, M2) {
    let product = [] 
    if(M1[0].length !== M2.length){
        return("impossible")
    }
    for (let rowM1 = 0; rowM1 < M1.length; rowM1++) {
      let newRow = [] 
      for (let colM2 = 0; colM2 < M2[0].length; colM2++) { 
        let newPro= 0 
        for (let i = 0; i < M1[rowM1].length; i++) {
          newPro += M1[rowM1][i] * M2[i][colM2]
        }
         newRow.push(newPro) 
      }
      product.push(newRow) 
    }
    return product
  } 
  
function sumofarr(M) {
    let suma = 0;
    for(let i = 0; i< M.length; i++) {
        suma += M[i];
    }
    return suma;

}

function sumofrows(matrix) {
    let sum = [];
    for(let i = 0; i < matrix.length; i++) {
        sum.push(sumofarr(matrix[i]));
    }
    return sum;
}

module.exports = {
    beautylog,
    sumofrows,
    matrixProduct,
    matrixsum   
}