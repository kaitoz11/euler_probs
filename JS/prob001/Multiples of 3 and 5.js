let i=0;result=0;
for(;i<1000;i++){
    if(i%3 == 0 || i%5 == 0){
        result += i;
        console.log("checking: ",i)
    }
    console.log(result)
}
