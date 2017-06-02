//var Promise = require('promise')

function getData(val,err){
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)
		}
		resolve(val);
	})
}


getData("hello","im the error").then(function(data){
	console.log(data)
})
.catch(function(err){
	console.log("this is error block")
	console.log(err)
})