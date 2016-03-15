function ex1 () {
  const f = () => "Imma returning!"
  const ret = f()
  console.log(ret) // "Imma returning!"
}

function ex2 () {
  const greeter = name => `Hello, ${name}`
  const greeting = greeter("Bob")
  console.log(greeting) // "Hello, Bob"
}

function ex3 () {
  const o1 = {
    prop: "this is it",
    whatsThis: function () { return console.log(this.prop) }
  }

  const o2 = {
    prop: "this is also it",
    whatsThis: () => console.log(this.prop)
  }

  o1.whatsThis()
  o2.whatsThis()

  //hmm
}

function ex4 () {
  const o1 = {
    prop: "this is it",
    whatsThis: function () { return function () { return this.prop } }
  }

  const o2 = {
    prop: "this is also it",
    whatsThis: function () { return () => this.prop }
  }

  const this1 = o1.whatsThis()()
  const this2 = o2.whatsThis()()

  console.log(this1);
  console.log(this2);

  //hmm
}

function ex5 () {
  const o1 = {
    prop: "this is it",
    whatsThis: function () {
      return function () {
        return this.prop
      }.bind(this)
    }
  }

  const o2 = {
    prop: "this is also it",
    whatsThis: function () { return () => this.prop }
  }

  const this1 = o1.whatsThis()()
  const this1_2  = o1.whatsThis.bind({prop: "aha! I have you nao"})()()
  const this2 = o2.whatsThis().bind({prop: "you too, pesky arrow function"})()

  console.log(this1);
  console.log(this1_2);
  console.log(this2);

}

ex4()
