let user = {
	name: "Harkirat",
	age: 19
}


function greet(user) {
    console.log("Hello, " + user.name + ". You are " + user.age + " years old.");
}   

greet(user);  // "Hello, Harkirat. You are 19 years old."





let user1 = {
	name: "Harkirat",
	age: 19,
	gender: "male",
}	

function greet(user1){
	if(user1.age < 18){
		console.log("Hello, " + user1.name + ". You are " + user1.age + " years old and you are " + user1.gender + ". And You are a minor.");
	} else {
		console.log("Hello, " + user1.name + ". You are " + user1.age + " years old and you are " + user1.gender + ". And You are a minor.");
	}
	
}
greet(user1);  // "Hello, Harkirat. You are 19 years old and you