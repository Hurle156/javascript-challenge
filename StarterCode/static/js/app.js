// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// console.log(tableData);
// YOUR CODE HERE!
var filter = d3.select("#filter-btn");
tableData.forEach(function(table){
    var row = tbody.append("tr")
    Object.entries(table).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    })
})
filter.on("click", function(){
    tbody.html("");
    // console.log("we have a click")
    var inputDate = d3.select("#datetime");
    var inputState = d3.select("#state");
    var inputCity = d3.select("#city");
    var inputCountry = d3.select("#country");
    // console.log("we have input");
    var date = inputDate.property("value");
    var state = inputState.property("value");
    var city = inputCity.property("value");
    var country = inputCountry.property("value");
    // console.log(date);
    var filteredData = tableData.filter(d => d.datetime == date || 
        d.state == state|| d.city == city || d.country == country);
    // console.log(filteredData);
    filteredData.forEach(function(table){
        var row = tbody.append("tr")
        Object.entries(table).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        })
    })
})