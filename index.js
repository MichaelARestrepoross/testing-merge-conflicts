function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personC, other) {
    personC.friends.push(friend);
    return personC;
  }