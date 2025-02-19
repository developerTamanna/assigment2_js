
function  willSuccess( marks ) {
    if(!Array.isArray(marks)){
        return  "Invalid" ;
    }
    // console.log(marks);
    let passCount =0;
    let failCount = 0;
    for(let value of marks){
        // console.log(value);
        if(value >= 50){
            passCount ++
        }
        else{
            failCount ++;
        }
    }
   

    if(passCount > failCount){
        return true;
    }
    else{
        return false
    }
}



const result = willSuccess([48, 48, 50, 50, 100]);
console .log(result);