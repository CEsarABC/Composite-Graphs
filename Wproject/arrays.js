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

var gNames = ['alejandra','martina','josefa','renata','francis','mariana','flora','tatiana'];
var ages = [18,19,20,21,50,45,23,64];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer'];
var salaries = [300,250,289,600,420,670,290,357];

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

function my_salary() {
    salaries.sort(function(a, b){return 0.5 - Math.random()});
}

my_gNames();
my_ages();
my_Career();
my_salary();

console.log(salaries);

// -- not working mix is not an array
var i;
var mix=[];
function createMixArray() {
    for( i= 0; i < gNames.length; i++)
    mix[i] = (gNames[i]+ ' ' + ages[i]+ ' ' + Career[i]);
    console.log(mix);
}

//createMixArray();


//console.log(mix);


//var item = gNames[Math.floor(Math.random()*gNames.length)];

//console.log(item + '\n');

//console.log(gNames + '\n');

//console.log(ages[1]+'\n');

//sample of an object

const persona = {
  name: gNames[0],
  age: ages[0],
  prof: Career[0],
  salary: salaries[0]
};

console.log(Object.values(persona)+'\n');
//console.log(persona.age + '\n');
//console.log(persona + '\n');

//*******************constructor for people******************

function Person(first, prof, age, salary) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
}

var me = new Person('cesar','bernal', 35,500);

//console.log(me + '\n');

// **************converting the object to JSON**************** //

var womanTest = new Person(gNames[0],Career[0],ages[0],salaries[0]);
console.log(womanTest);
console.log('\n');
//var myJSON = JSON.stringify(womanTest);
//console.log(myJSON + '\n');

//the working instruction to create the objects array
var woman = [];
function objectsInArray() {
    var j;
    for(j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j],Career[j],ages[j],salaries[j]));
        console.log(woman + '\n');
}

//document.getElementById("demo").innerHTML = woman;

objectsInArray();
console.log(woman[1].salary_p + ' this is the test');
console.log(woman[1].age_p + ' this is the test');
console.log(Object.values(woman[1])+'\n');

//function to unpack the objects
//Course Working With External Resources Data & The DOM Unpacking Our Data Onto The DOM
//second video

function writeToDocumentNames() {
        var el = document.getElementById('demo');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo').innerHTML += '<p>' + item.name_p + '</p>';
        });
}

function writeToDocumentCareers() {
     var el = document.getElementById('demo1');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo1').innerHTML += '<p>' + item.prof_p + '</p>';
        });
}

function writeToDocumentAges() {
     var el = document.getElementById('demo2');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo2').innerHTML += '<p>' + item.age_p + '</p>';
        });
}

function writeToDocumentSalaries() {
     var el = document.getElementById('demo3');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo3').innerHTML += '<p>' + item.salary_p + '</p>';
        });
}

// i need to print all objects, by now should be printing just the last one and not inside an array

//new idea ['name: '+ gNames[i] +', '+'prof: '+ prof[i] + ', '+ 'age: ' + ages[i]
//crates an array of strings
var superArray = [];

function newInArray() {
    var k;
    for(k = 0; k < gNames.length; k++)
        superArray[k] = [('name: '+ gNames[k] +', '+'prof: '+ Career[k] + ', '+ 'age: ' + ages[k] +', '+'salary: '+ salaries[k])]
        console.log(superArray);
    //document.getElementById("demo3").innerHTML = superArray[];
}

newInArray();

