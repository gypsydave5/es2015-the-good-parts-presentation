'use strict';

function ex1 () {

  function *oneToFive () {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  }

  const numbers = oneToFive()

  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
}

function ex1_1 () {

  function *oneToFive () {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  }

  for (let num of oneToFive()) {
    console.log(num)
  }
}

function ex2 () {

  function *counter (n) {
    let x = n;
    while (x < 20) {
      x += yield x
    }
  }

  const myCounter = counter(10)

  console.log(myCounter.next(1));
  console.log(myCounter.next(1));
  console.log(myCounter.next(5));
  console.log(myCounter.next(6));
  console.log(myCounter.next(11));

}

function ex3 () {

  function *fibonacci () {
    let [x, y] = [0, 1]
    while (true) {
      [x, y] = [y, x + y]
      yield y
    }
  }

  function takeN(n, gen) {
    let ary = [];
    for (let i of gen) {
      if (ary.length > n) break
      ary.push(i)
    }
    return ary
  }

  console.log(takeN(20, fibonacci()))

}

ex3()


