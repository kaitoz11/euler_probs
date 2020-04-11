
function check(n){
    for(let i = 2;i<=n;i++){
        if(i!=Math.sqrt(n)){
            if(n%i==0){
                n=n/i;
                console.log(i);
            }
        }else{
            console.log(n);
            break;
        }
    }
}