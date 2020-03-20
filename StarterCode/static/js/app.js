// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// console.log(tableData);
// YOUR CODE HERE!
var filter = d3.select("#filter-btn");

filter.on("click", function(){
    // console.log("we have a click")
    var input = d3.select(".form-control");
    // console.log("we have input");
    var date = input.property("value");
    // console.log(date);
    var filteredData = tableData.filter(d => d.datetime == date);
    // console.log(filteredData);
    filteredData.forEach(function(table){
        var row = tbody.append("tr")
        Object.entries(table).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        })
    })
})