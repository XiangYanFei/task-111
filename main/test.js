// JavaScript Document
module.exports=function beersong(number){
	let result='';
		for(let i=0;i<=number;i++)
			{
				if(i==0){
						result+="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";
				}
				else if(i==1){
					result+="1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.";
				}
				else if(i==2){
					result+=i+" bottles of beer on the wall, "+i+" bottles of beer.Take one down and pass it around, "+(i-1)+" bottle of beer on the wall.";
				}
				else{
					result+=i+" bottles of beer on the wall, "+i+" bottles of beer.Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.";
				}
					
			}
	return result;
				
};