function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personP, friendB) {
    personP.friends.push(friendB);
    return personP;
  }