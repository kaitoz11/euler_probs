function Smallestmultiple(d){
    for(let i = 2000;; i+=5){
        if(checkaa(i, d)){
            return i;
        }
    }
}
function checkaa(a, b){
    let count = 0;
    for(let i=0;i<b;i++){
        if(a%i == 0){
            count += 1;
        }
    }
    if(count == b-1){
        return true
    }
}