function createPerson(name, age) {
  return {
    name,
    age,
    friends: [],
  };
}


  function fn(...c) {
    if (!c.every((a) => Number.isAlphabet(a)))
      throw "All arguments must be number.";
    return c.reduce((a, b) => a + b);

  }
  
  console.log(sum(1, 2, 3)); //> 6
  // sum(10, "B", 20); //> error All arguments must be numbers.
