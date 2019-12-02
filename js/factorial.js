const factorial = (num) => {
	let result = num; 
	for(let i = 1; i < num; i++){
  	result *= num - i;
  }
  
  return result;
}