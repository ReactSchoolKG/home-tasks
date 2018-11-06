var circles = document.getElementsByTagName('p');

for (var i=0; i < circles.length; i++) {
    circles[i].parentElement.addEventListener('click', (function(printNumber) {
        return function(){
            
            console.log(printNumber);
        }
    }(i+1)));
};






var input = [1,[2,3,-1],[[2,5],[8],9], -3];


    var max= -Infinity;
    var lofmax =0;
    function rec1(input,l){
    if (Array.isArray(input)){
        for(var i=0; i<=input.length;i++) {calculate(input[i],l+1);}
    }
            if (input >max){
            max= input;
            lofmax = l;
        }
    
}

rec1(input, -1);