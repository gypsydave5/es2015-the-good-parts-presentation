const bob; // SyntaxError in a linter!

function ex1 () {
  const bob = 'bob';
  bob = 'joe';
  console.log(bob) //=> 'bob'
}

function ex2 () {
  var bob = 'bob'
  if (1 === 1) {
    bob = 'joe'
    console.log(bob) // => 'joe'
  }
  console.log(bob) // => 'bob'
}

function ex3 () {
  var bob = 'bob'
  if (1 === 1) {
    bob = 'joe'
    console.log(bob) // => 'joe'
  }
  console.log(bob) // => 'joe'
  // curse you joe...
}
