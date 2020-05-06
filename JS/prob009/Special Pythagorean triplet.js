function SpecialPythagoreantriplet(p){
    let a=0,b=0,c=0;
    for(c=parseInt(p/3);c<p;c++){
        for(a=0;a<(p-c)/2;a++){
            b = p - a - c;
            if(a+b+c==p && Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)){
                return a*b*c
            }
        }
    }
    return false
}