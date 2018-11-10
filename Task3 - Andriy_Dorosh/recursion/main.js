let arr = [2,9,[77,[[32,[6,[65,45,[6,[[34,[100]]]]],99],8],45]]];
let max = -Infinity;
let level = -1;

function findMax(data){
	Array.isArray(data) 
		? 	
			(function(){
				data.forEach((item)=>{
					findMax(item);
				});
				level += 1;
			}())
			
		:
			max < data ? max = data : max = max		
}

findMax(arr);
console.log(max);
console.log(level);