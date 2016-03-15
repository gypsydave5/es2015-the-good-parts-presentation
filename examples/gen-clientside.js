'use strict';

function ex1() {
  var _marked = [oneToFive].map(regeneratorRuntime.mark);

  function oneToFive() {
    return regeneratorRuntime.wrap(function oneToFive$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 1;

          case 2:
            _context.next = 4;
            return 2;

          case 4:
            _context.next = 6;
            return 3;

          case 6:
            _context.next = 8;
            return 4;

          case 8:
            _context.next = 10;
            return 5;

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked[0], this);
  }

  var numbers = oneToFive();

  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
}

function ex1_1() {
  var _marked2 = [oneToFive].map(regeneratorRuntime.mark);

  function oneToFive() {
    return regeneratorRuntime.wrap(function oneToFive$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return 1;

          case 2:
            _context2.next = 4;
            return 2;

          case 4:
            _context2.next = 6;
            return 3;

          case 6:
            _context2.next = 8;
            return 4;

          case 8:
            _context2.next = 10;
            return 5;

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked2[0], this);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = oneToFive()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      console.log(num);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function ex2() {
  var _marked3 = [counter].map(regeneratorRuntime.mark);

  function counter(n) {
    var x;
    return regeneratorRuntime.wrap(function counter$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            x = n;

          case 1:
            if (!(x < 20)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return x;

          case 4:
            x += _context3.sent;
            _context3.next = 1;
            break;

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _marked3[0], this);
  }

  var myCounter = counter(10);

  console.log(myCounter.next(1));
  console.log(myCounter.next(1));
  console.log(myCounter.next(5));
  console.log(myCounter.next(6));
  console.log(myCounter.next(11));
}

function ex3() {
  var _marked4 = [fibonacci].map(regeneratorRuntime.mark);

  function fibonacci() {
    var x, y, _ref;

    return regeneratorRuntime.wrap(function fibonacci$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            x = 0;
            y = 1;

          case 2:
            if (!true) {
              _context4.next = 10;
              break;
            }

            _ref = [y, x + y];
            x = _ref[0];
            y = _ref[1];
            _context4.next = 8;
            return y;

          case 8:
            _context4.next = 2;
            break;

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _marked4[0], this);
  }

  function takeN(n, gen) {
    var ary = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = gen[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var i = _step2.value;

        if (ary.length > n) break;
        ary.push(i);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return ary;
  }

  console.log(takeN(20, fibonacci));
}

ex1();

