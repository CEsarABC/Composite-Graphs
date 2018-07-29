/*



var item = items[Math.floor(Math.random()*items.length)];



var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i]+'\n';
}

console.log(text);

function myFunction() {
    var x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
}

*/

var gNames = ['alejandra','martina','josefa','renata','francis'];
var ages = [18,54,34,23,22];
var Career = ['graphic design','nursing','reporter','police officer','politician'];

var i;
var mix='';

function my_gNames() {
    gNames.sort(function(a, b){return 0.5 - Math.random()});
}

function my_ages() {
    ages.sort(function(a, b){return 0.5 - Math.random()});
}

function my_Career() {
    Career.sort(function(a, b){return 0.5 - Math.random()});
}

my_gNames();
my_ages();
my_Career();

for( i= 0; i < gNames.length; i++)
    mix += (gNames[i]+ ' ' + ages[i]+ ' ' + Career[i]) + '\n';


console.log(mix);


var item = gNames[Math.floor(Math.random()*gNames.length)];
console.log(item + '\n');

console.log(gNames + '\n');

console.log(ages[1]+'\n');

const object1 = {
  name: gNames[0],
  age: ages[0],
  prof: Career[0]
};

console.log(Object.values(object1)+'\n');
console.log(object1.a + '\n');
console.log(object1);

//constructor

function Person(first, last, age) {
    this.name_p = first;
    this.prof_p = last;
    this.age_p = age;
}

var me = new Person('cesar','bernal', 35);

console.log(me.name_p + '\n');

var woman = new Person(gNames[0],Career[0],ages[0]);
console.log(woman + '\n');

var j;
var mix1 = [];
for(j = 0; j < gNames.length; j++)
    mix1[j] += new Person(gNames[i],Career[i],ages[i]);

console.log(mix1);