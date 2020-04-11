function sumsquaredifference(acc){
    return SquaerOSum(acc)-SumOSquare(acc);
    function SumOSquare(n){
        let temp=0;
        for(let i=1;i<=n;i++){
            temp += Math.pow(i,2)
        }
        return temp
    }
    function SquaerOSum(n){
        let temp=0;
        for(let i=1;i<=n;i++){
            temp += i;
        }
        return Math.pow(temp,2)
    }
}
