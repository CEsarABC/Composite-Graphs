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

var gNames = ['alejandra','martina','josefa','renata','francis','mariana'];
var ages = [18,19,20,21,50,45];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator'];


//using random to mix all info in arrays

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

// -- not working mix is not an array
var i;
var mix='';

for( i= 0; i < gNames.length; i++)
    mix += (gNames[i]+ ' ' + ages[i]+ ' ' + Career[i]) + '\n';


//console.log(mix);


//var item = gNames[Math.floor(Math.random()*gNames.length)];

//console.log(item + '\n');

console.log(gNames + '\n');

console.log(ages[1]+'\n');

//sample of an object

const persona = {
  name: gNames[0],
  age: ages[0],
  prof: Career[0]
};

console.log(Object.values(persona)+'\n');
console.log(persona.age + '\n');
console.log(persona + '\n');

//constructor

function Person(first, last, age) {
    this.name_p = first;
    this.prof_p = last;
    this.age_p = age;
}

var me = new Person('cesar','bernal', 35);

console.log(me.name_p + '\n');

var womanTest = new Person(gNames[0],Career[0],ages[0]);
console.log(womanTest);
console.log('\n');


//the working instruction to create the objects array
var woman = [];
function objectsInArray() {
    var j;
    for(j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j],Career[j],ages[j]));
        console.log(woman + '\n');
}

//function to unpack the objects
//Course Working With External Resources Data & The DOM Unpacking Our Data Onto The DOM
//second video

function writeToDocumentNames() {
        woman.forEach(function (item) {
            document.getElementById('demo').innerHTML += '<p>' + item.name_p + '</p>';
        });
}

function writeToDocumentCareers() {
        woman.forEach(function (item) {
            document.getElementById('demo1').innerHTML += '<p>' + item.prof_p + '</p>';
        });
}

function writeToDocumentAges() {
        woman.forEach(function (item) {
            document.getElementById('demo2').innerHTML += '<p>' + item.age_p + '</p>';
        });
}

//document.getElementById("demo").innerHTML = man;

objectsInArray();


// i need to print all objects, by now should be printing just the last one and not inside an array

//new idea ['name: '+ gNames[i] +', '+'prof: '+ prof[i] + ', '+ 'age: ' + ages[i]

var superArray = [];

function newInArray() {
    var k;
    for(k = 0; k < gNames.length; k++)
        superArray[k] = [('name: '+ gNames[k] +', '+'prof: '+ Career[k] + ', '+ 'age: ' + ages[k])]
        console.log(superArray);
    //document.getElementById("demo1").innerHTML = superArray;

}

newInArray();