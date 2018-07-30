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
var ages = [18,19,20,21,50];
var Career = ['graphic design','nursing','reporter','police officer','politician'];


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


var i;
var mix='';

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
console.log(woman);
console.log('\n');


function objectsInArray() {
    var j;
    var man;

    for(j = 0; j < gNames.length; j++)
        man = new Person(gNames[j],Career[j],ages[j]);
        console.log(man + '\n');
}

objectsInArray();


// i need to print all objects, by now should be printing just the last one and not inside an array

//new idea ['name: '+ gNames[i] +', '+'prof: '+ prof[i] + ', '+ 'age: ' + ages[i]

var superArray = [];

function newInArray() {
    var k;

    for(k = 0; k < gNames.length; k++)

        superArray[k] = [('name: '+ gNames[k] +', '+'prof: '+ Career[k] + ', '+ 'age: ' + ages[k])]
    console.log(superArray);

}

newInArray();