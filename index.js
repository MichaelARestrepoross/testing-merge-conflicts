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

  function sum(...nums) {
    if (!nums.every((num) => Number.isInteger(num)))
      throw "All arguments must be numbers.";
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3)); //> 6
  // sum(10, "B", 20); //> error All arguments must be numbers.