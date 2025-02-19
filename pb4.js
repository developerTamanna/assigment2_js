
function  validProposal( person1 , person2 ) {
    if(typeof person1 !== "object" || typeof person2 !== "object"){
        return "Invalid"
    }

    let difference = Math.abs(person1.age - person2.age)
    if(person1.gender !== person2.gender && difference <=7 ){
      return true;
    }
  else{
    return false;
  }
}



     const person1 = { name: "toya", gender: "female", age: 20 }


     const person2 = {   name: "bjoy", gender: "male", age: 32 } 


     const final = validProposal(person1, person2);
    console.log(final);