function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personOne, friendB) {
    personOne.friends.push(friendB);
    return personOne;
  }

  function fn(...array) {
    if (!array.every((input) => Number.isNumber(input)))
      throw "All arguments must be numbers..";
    return array.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.