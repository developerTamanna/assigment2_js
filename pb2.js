
function  validContact( contact ) {
    if(typeof contact !== 'string'){
        return 'invalid'
    }

    let check = '01'
    if(contact.length !== 11 || !contact.startsWith(check) || contact.includes(' ')){
        return false;
    }
    
    else{
        return true;
    }
}

const result = validContact(["01987654321"]);
console.log(result);