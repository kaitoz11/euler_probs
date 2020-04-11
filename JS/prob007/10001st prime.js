function chkprime(th){
    let prime = [2,3], temp = 5;

    for(let i=2;i<=th;i++){    
        while (!checkprime(temp)) {
            temp += 2;
        }
        prime.push(temp);
        temp += 2;
    }

    function checkprime(abc) {
        let a=1,p = prime[a];
        while (p <= Math.ceil(Math.sqrt(abc))){
            if (abc % p === 0) {
                return false;
            }
            a += 1;
            p = prime[a];
        }
        return true;
    }
    return prime[th - 1];
}
