// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

const secretWordGenerator = (string) => {
	let newString = ""
	for(let i = 0; i < string.length; i++){
		if(string[i] == "a") newString += ("4")
		else if(string[i] == "e") newString +=("3")
		else if(string[i] == "i") newString += ("1")
		else if(string[i] == "o") newString += ("0")
		else newString += (string[i])
	}
	return newString
}

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

console.log(secretWordGenerator(secretCodeWord1))
console.log(secretWordGenerator(secretCodeWord2))
// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

const wordsWithA = (arr) => {
	let newArr = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i].includes("A") || arr[i].includes("a")) newArr.push(arr[i])
	}
  return newArr
}

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

console.log(wordsWithA(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.



const fullHouse = (arr) => {
	var hand = new Object();
	for(let i = 0; i < arr.length; i++){
		if(hand[arr[i]] == null) hand[arr[i]] = 1
		else hand[arr[i]] +=1
	}
	let onePair = false;
	let oneTriple = false;
	for(var card in hand){
		if(hand[card] == 2) onePair = true;
		else if(hand[card] == 3) oneTriple = true;
	}

	if(onePair == true && oneTriple == true) return true
	else return false
}

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))