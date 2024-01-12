function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personB, friend) {
    personB.friends.push(friend);
    return personB;
  }