var start = new Date();

function getTime(){
	return new Date() - start;
}

console.info('Current time - line 7: %dms', getTime());

setTimeout(function callback(){
	console.info('Current time - line 10: %dms', getTime());
}, 3000);
	
console.info('Current time - line 13: %dms', getTime());