document.querySelector('.get-jokes').addEventListener('click',loadJokes);

function loadJokes(e){

const xhr = new XMLHttpRequest();

const number = document.getElementById('number').value;

console.log(number);

//true value is Asynchronous js

//when ever your using the ${variable} use string literals i.e ` not '
xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

	xhr.onload = function(){
	let output = "";
	if(xhr.status===200){
	const response = JSON.parse(xhr.responseText);
//response value is a array
		response.value.forEach(function(item){
		output+= `<ul><li>${item.joke}</li></ul>`
		});
	}
		document.getElementById('output').innerHTML = output;
	}

xhr.send();
e.preventDefault();
}