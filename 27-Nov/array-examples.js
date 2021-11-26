const countries = ['India']; // array

console.log(countries, 'initial values');

// push -> add an element into the array
// pop -> its removed the last element from an array
// sort -> it will based on the order that is provied -> incremental or decremental

countries.push("US");
countries.push("Canada");
console.log(countries, 'updated values');

const sortedCountries = countries.sort();
console.log(sortedCountries, 'sortedCountries');

sortedCountries.pop(); // removed US from the list
console.log(sortedCountries.length, 'length sortedCountries');

// Filter function is used to find the value exists in the array or not
const filteredCountry = sortedCountries.filter(
   function(country) {
      console.log(country, 'each country')
      return country == 'India'
  }
);

console.log(filteredCountry, 'FC')

if (filteredCountry.length == 0) {
	sortedCountries.push("US");
} else {
	console.log("Country already exists")
}

console.log(sortedCountries, 'sortedCountries');

// map function is used to iterated over each value and applied the logic and returns the new array with updated values
const newArray = sortedCountries.map(function(country) {
  return country + '1'
});

console.log(newArray, 'sortedCountries');

// Object with function
const person = {
firstName: 'Srikanth',
lastName: "P",
getFullName: function () {
	return `${this.firstName} ${this.lastName}`;
 }
}

alert(person.getFullName());

