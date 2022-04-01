// Return true if mSquare[][] is a Magic Square, else returns false
let isMagicSquare = ( mSquare ) => {
  let N = mSquare.length;

  // sumDiag1 and sumDiag2 are the sum of the 2 diagonals
  let sumDiag1 = 0, sumDiag2 = 0;

  for ( let i = 0; i < N; i++ ) {
    // (i, 1) is the diagonal from top-left -> bottom-right
    // (i, N - i - 1) is the diagonal from top-right -> bottom-left
    sumDiag1 = sumDiag1 + mSquare[ i ][ i ]
    sumDiag2 = sumDiag2 + mSquare[ i ][ N - 1 - i ]
  }

  // If the 2 diagonal sums are !equal, then it is not a Magic Square
  if ( sumDiag1 != sumDiag2 ) {
    return false;
  }

  // Check row / column sums
  for ( let i = 0; i < N; i++ ) {
    let colSum = 0;
    let rowSum = 0;
    for ( let j = 0; j < N; j++ ) {
      rowSum += mSquare[ i ][ j ]
      colSum += mSquare[ j ][ i ]
    }

    if ( rowSum != colSum || colSum != sumDiag1 ) {
      return false;
    }
  }

  // If the code reaches this point, then it is a Magic Square
  return true;
}

let check = () => {
  // Grab the values from the HTML and force them into Integers
  let a = parseInt(document.getElementById('a').value)
  let b = parseInt(document.getElementById('b').value)
  let c = parseInt(document.getElementById('c').value)
  let d = parseInt(document.getElementById('d').value)
  let e = parseInt(document.getElementById('e').value)
  let f = parseInt(document.getElementById('f').value)
  let g = parseInt(document.getElementById('g').value)
  let h = parseInt(document.getElementById('h').value)
  let i = parseInt(document.getElementById('i').value)

  // Declare the Magic Square
  let mSquare = [
    [ a, b, c ],
    [ d, e, f ],
    [ g, h, i ]
  ]

  // Test if it is Magic Square or not
  if ( isMagicSquare( mSquare ) ) {
    document.getElementById( 'magic-square' ).innerHTML = 'This is a Magic Square!'
  } else {
    document.getElementById( 'magic-square' ).innerHTML = 'This is not a Magic Square. :('
  }
}