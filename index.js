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

  function sum(nums) {
    if (!nums.every((num) => Number.isNumber(num)))
      throw "All arguments must be numbers.";
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.