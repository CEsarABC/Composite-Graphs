/*var gNames = ['alejandra','martina','josefa','renata','francis','mariana','flora','tatiana'];
var ages = [18,19,20,21,50,45,23,64];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer'];
var salaries = [300,250,289,600,420,670,290,357];

function my_salary() {
    salaries.sort(function(a, b){return 0.5 - Math.random()});
}

my_salary();

function Person(first, prof, age, salary) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
}
var woman = [];
function objectsInArray() {
    var j;
    for (j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j], Career[j], ages[j], salaries[j]));
    console.log(woman + '\n');
}
objectsInArray();

function writeToDocumentTest() {
     var el = document.getElementById('test');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test').innerHTML += '<p>' + item.salary_p + '</p>';
        });
}*/