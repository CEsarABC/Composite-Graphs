
//////////////////////////////////////////////////////////////////////////////////
////////////////////Creates my Json Data and randomise all values/////////////////
//////////////////////////////////////////////////////////////////////////////////

var gNames = ['Alejandra','Martina','Josefa','Renata','Francis','Mariana','Flora','Tatiana','Marisol','Kim',
    'Alexa','Isabel','Cecilia','Aquila','Augusta','Aurelia','Flavia','Horatia'];
var ages = [18,19,20,21,50,45,23,64,23,34,65,78,55,33,22,20,24,29];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer','receptionist',
    'lawyer','chef','secretary','athlete','tutor','driver','pilot','technician','governor'];
var salaries = [300,250,289,600,420,670,290,357,800,450,200,150,600,730,509,445,345,200];
var cities = ['London', 'Liverpool','Manchester','London', 'London','Liverpool','Manchester','London','London','Liverpool','Manchester',
'London','London','London','London','Liverpool','Manchester','Manchester'];
var date = [
    '01/04/1994',
  '06/09/1997',
  '12/12/1968',
  '13/09/1973',
  '22/05/1995',
  '05/03/2000',
  '08/10/1999',
  '21/07/1996',
  '12/07/1998',
  '13/04/1963',
  '19/09/1989',
  '28/02/1953',
  '12/07/1985',
  '03/12/1940',
  '13/09/1998',
  '14/01/1995',
  '02/09/1954',
  '10/06/1984'];

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

function my_cities() {
    cities.sort(function(a, b){return 0.5 - Math.random()});
}

my_gNames();
my_ages();
my_Career();
my_salary();
my_cities();

var birthYear = [];
var thisYear = 2018;
function makeBirthYear() {
    var j;
    for(j = 0; j < ages.length ; j++)
        birthYear.push(thisYear - ages[j]);
        console.log(birthYear);
}

makeBirthYear();


function Person(first, prof, age, salary, city, birth, date1) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
    this.town_p = city;
    this.birth_p  = birth;
    this.date_p = date1;

}
//console.log(Object.values(woman)+'\n');

///////////////////creating my array o objects to replace json files////////////////
var woman = [];
function objectsInArray() {
    var j;
    for(j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j],Career[j],ages[j],salaries[j],cities[j],birthYear[j],date[j]));
        console.log(woman + '\n');
        console.log(woman[3]);
}

objectsInArray();

console.log(Object.values(woman[0]));

////////creating variables to use in bigGraph function/////////////
    var h = 300;
    var w = 550;
    var barPadding = 2;
    var lenghtWoman = woman.length;
    //console.log(lenghtWoman);
    var colWidth = w / woman.length; //gives the size the space divided by the number of objects
    var barwidth = colWidth - barPadding; //gives the total width for each bar
    var salaryValues = [];


///////////// Making a new array for salary values to show in the graph /////////////
    function salaryArray() {
        for(u = 0; u < lenghtWoman; u++)
            salaryValues[u] = woman[u].salary_p;
        //console.log(salaryValues);
    }

    salaryArray();



function bigGraph() {
    var scale = d3.scale.linear()//we need to apply this function to some of the values
        /*.domain([0,600])*/
        .domain([0, d3.max(salaryValues)])//we can use a function to give the max value in the array
        .range([0,300]);



    var svg = d3.select('#draw-chart')
        .append('svg')
        .attr('height', h)
        .attr('width', w);

    var svgDefs = svg.append('defs');
        var mainGradient = svgDefs.append('linearGradient')
                .attr('id', 'mainGradient');
        mainGradient.append('stop')
                .attr('class', 'stop-left')
                .attr('offset', '0');

        mainGradient.append('stop')
                .attr('class', 'stop-right')
                .attr('offset', '1');

    svg.selectAll('rect')
        .data(salaryValues)
        .enter()
        .append('rect')
        .classed('filled',true)
        .attr('x', function (d ,i) {
            return i*( w / lenghtWoman); //gives position the every element by multiplying the index
        })
        .attr('y', function (d) {
            return h- scale(d);
        })
        .attr('height', function (d) {
            return scale(d);
        })
        .attr('width', barwidth)


    svg.selectAll('text')
        .data(salaryValues)
        .enter()
        .append('text')
        .text(function (d) {
            return  d;
        })
        .attr('text-anchor','middle')
        .attr('x', function (d,i) {
            return (i * colWidth) + barwidth / 2;
            //this function finds the exact middle point between position and width of the bar
            //multiplies the index by the total space of the column and sums the barwidth to find the exact middle point by dividing by 2
        })
        .attr('y', function (d) {
            return h - scale(d) + 14;
        })
        .attr('font-family','sans-serif')
        .attr('font-size', '11px')
        .attr('fill','white')

}

function crossFilter() {


    var ndx = crossfilter(woman);

    var name_dim = ndx.dimension(dc.pluck('name_p'));
    var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('salary_p'));

    dc.barChart('#per-person-chart')
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(name_dim)
        .group(total_spend_per_person)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Person')
        .yAxis().ticks(10);


    var store_dim = ndx.dimension(dc.pluck('age_p'));
    var total_spend_per_store = store_dim.group().reduceSum(dc.pluck('salary_p'));

    dc.barChart("#per-store-chart")
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(store_dim)
        .group(total_spend_per_store)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Age')
        .yAxis().ticks(10);

    var state_dim = ndx.dimension(dc.pluck('town_p'));
    var total_spend_per_state = state_dim.group().reduceSum(dc.pluck('salary_p'));

    dc.barChart('#per-state-chart')
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(state_dim)
        .group(total_spend_per_state)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('City')
        .yAxis().ticks(10);

    dc.renderAll();
}

function pieChartsWoman() {


        var ndx = crossfilter(woman);

        var name_dim = ndx.dimension(dc.pluck('name_p'));
        var total_salary_per_person = name_dim.group().reduceSum(dc.pluck('salary_p'));

        dc.pieChart('#draw-pies1')
            .height(250)
            .radius(100)
            .transitionDuration(1500)
            .dimension(name_dim)
            .group(total_salary_per_person);

        var store_dim = ndx.dimension(dc.pluck('town_p'));
        var total_spend_per_store = store_dim.group().reduceSum(dc.pluck('salary_p'));
        dc.pieChart('#draw-pies2')
            .height(250)
            .radius(100)
            .transitionDuration(1500)
            .dimension(store_dim)
            .group(total_spend_per_store);

        var age_dim = ndx.dimension(dc.pluck('age_p'));
        var total_age_per_state = age_dim.group().reduceSum(dc.pluck('salary_p'));

        dc.pieChart('#draw-pies3')
            .height(250)
            .radius(100)
            .transitionDuration(1500)
            .dimension(age_dim)
            .group(total_age_per_state);

        dc.renderAll();
    }

function stackedGraphs() {
        var ndx = crossfilter(woman);

        var name_dim = ndx.dimension(dc.pluck('name_p'));

        var spendByNameStoreA = name_dim.group().reduceSum(function (d) {
                if (d.town_p === 'London') {
                    return +d.salary_p;
                } else {
                    return 0;
                }
            });
        var spendByNameStoreB = name_dim.group().reduceSum(function (d) {
                if (d.town_p === 'Liverpool') {
                    return +d.salary_p;
                } else {
                    return 0;
                }
            });
        var spendByNameStoreC = name_dim.group().reduceSum(function (d) {
                if (d.town_p === 'Manchester') {
                    return +d.salary_p;
                } else {
                    return 0;
                }
            });

        var stackedChart = dc.barChart("#chart-here2");
        stackedChart
            .width(800)
            .height(400)
            .dimension(name_dim)
            .group(spendByNameStoreA, "London")
            .stack(spendByNameStoreB, "Liverpool")
            .stack(spendByNameStoreC, "Manchester")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(720).y(0).itemHeight(15).gap(5));

        stackedChart.margins().right = 100;

        dc.renderAll();
    }

function scatterPlotGraph() {

        var ndx = crossfilter(woman);

        var parseDate = d3.time.format("%d/%m/%Y").parse;
        woman.forEach(function(d){
            d.date_p = parseDate(d.date_p);
        });

        var date_dim = ndx.dimension(dc.pluck('date_p'));

        var min_date = date_dim.bottom(1)[0].date_p;
        var max_date = date_dim.top(1)[0].date_p;

        var salary_dim = ndx.dimension(function (d) {
            return [d.date_p, d.salary_p, d.name_p];
        });

        var tradeColors = d3.scale.ordinal()
            .domain(['Alejandra','Martina','Josefa','Renata','Francis','Mariana','Flora','Tatiana','Marisol','Kim',
    'Alexa','Isabel','Cecilia','Aquila','Augusta','Aurelia','Flavia','Horatia'])
            .range(["red", "green", "blue",'orange','black','yellow','brown','purple',
                '#2D2C34','#68941B','#CB4F2D','#9C4A1A','#1F779F','#4C4D4F','#0D3649','#64400B','#863B21','#5B5348']);


        var salary_group = salary_dim.group();

        var subChart = function (c) {
            return dc.scatterPlot(c)
                .symbolSize(8)
                .highlightedSize(10);
        };


        var chart = dc.seriesChart("#scatter-plot-graph");
        chart
            .width(900)
            .height(450)
            .chart(subChart)
            .x(d3.time.scale().domain([min_date, max_date]))
            .brushOn(false)
            .clipPadding(10)
            .yAxisLabel("Salary")
            .xAxisLabel("Birth")
            .elasticY(true)
            .dimension(salary_dim)
            .group(salary_group)
            .mouseZoomable(true)
            .shareTitle(false) // allow default scatter title to work
            .seriesAccessor(function (d) {
                return d.key[2];
            })
            .keyAccessor(function (d) {
                return d.key[0];
            })
            .valueAccessor(function (d) {
                return +d.key[1];
            })
            .colorAccessor(function (d) {
                return d.key[2].name_p;
            })
            .colors(tradeColors)

            .legend(dc.legend().x(770).y(50).itemHeight(13).gap(5).horizontal(1).legendWidth(70).itemWidth(70));

        chart.margins().left += 20;
        chart.margins().bottom += 20;
        chart.margins().right = 150;
        dc.renderAll();
    }