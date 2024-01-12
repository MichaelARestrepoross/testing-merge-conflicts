function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personP, goodFriend) {
    personP.friends.push(goodFriend);
    return personP;
  }