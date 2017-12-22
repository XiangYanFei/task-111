// JavaScript Document
"use strict"
var beersong = require('../main/test');
var expect = require('chai').expect;

describe('print out the entire beer song', function() {
	it("returns the lyrics of number 0",function(){
		let number=0;
		let result=beersong(number);
		expect(result).to.eql("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
	});
	
	it("returns the lyrics of number 1",function(){
		let number=1;
		let result=beersong(number);
		expect(result).to.eql("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
	});
	
	it("returns the lyrics of the number 2",function(){
	   	let number=2;
		let result=beersong(number);
		expect(result).to.eql("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.");
	 });
	
	it("returns the lyrics of number between 3 and 99",function(){
		let number=parseInt(Math.random()*(99-3+1)+3);//产生3-99的随机整数
		let result=beersong(number);
		let str="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.";
		for(let i=3;i<=number;i++)
			{
				str+=i+" bottles of beer on the wall, "+i+" bottles of beer.Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.";
			}
		expect(result).to.eql(str);
	});
	
	it("returns the lyrics of number between 0 and 99",function(){
		let number=5;
		//let number=parseInt(Math.random()*(100));//产生0-99的随机整数
		let result=beersong(number);
		let str='';
		for(let i=0;i<=number;i++)
			{
				if(i==0){
					str+="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";
				}else if(i==1){
					str+="1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.";
				}else if(i==2){
					str+="2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.";
				}else{
					str+=i+" bottles of beer on the wall, "+i+" bottles of beer.Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.";
				}
			}
		expect(result).to.eql(str);
	});
	
	
});