let i=1;result=0;temp1=0;temp0=1;T=0;fib=1;test=0;
for(;i<=100;i++){
    test = fibonacci(i);
    if(test<=4000000){   
        if(test%2 == 0){
            result += test;    
        }
    }else{
        break;
    }
    
}
console.log(result)
function fibonacci(a){
    for(;T<a;T++){
        if(T%2 == 0){
            fib +=temp1;
            temp1 = fib;
        }else{           
            fib +=temp0;
            temp0 = fib;
        }
    }
    return fib;
}




























/*


A direct translation of the problem statement would be a program like this:


                let lim=4000000;sum=0;a=1;b=1;h=0;

                While(b<lim){
                    if(b%2 == 0){
                        sum += b;
                    }
                    h=a+b;
                    a=b;
                    b=h;
                }
                console.log(sum);



        1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144...
        a | b | c | a | b | c | a  | b  | c  | a  | b  |  c

It is easy to prove that every third Fibonacci number is even.
It  is not so difficult to change the program somewhat so that only every third number is added:


                let lim=4000000;sum=0;a=1;b=1;c=0;

                c=a+b;
                while(c<lim){
                    sum += c;
                    a = b+c;
                    b = a+c;
                    c = a+b;
                }
                console.log(sum);
*/