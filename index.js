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

  function fn(...numbers) {
    if (!numbers.every((num) => typeof num === 'number')) {
      console.error("All arguments must be numbers.");
    }

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.