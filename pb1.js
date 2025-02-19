
function calculateVAT( price ) {
    if(typeof price !=='number' || price<0){
        return "Invalid" 
    }
    
    const totalVat = price * 7.5 /100
    return totalVat;
}


const amount = calculateVAT(999)
console.log(amount)