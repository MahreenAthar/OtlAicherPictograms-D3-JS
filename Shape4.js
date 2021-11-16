var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

// Head Male
var headM = svg.append("circle")
               .attr("r", "40")
               .attr("cx", "210")
               .attr("cy", "60")
               .attr("fill", "black")

// Body Male
var bodyM = svg.append("rect")
               .attr("height", "200")
               .attr("width", "80")
               .attr("x", "180")
               .attr("y", "120")
               .attr("rx", "10")

// Legs Male
var legR1M = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "180")
               .attr("y", "300")
               .attr("rx", "10")
               .attr("ry", "10")
var legBentR1M = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "391")
               .attr("y", "170")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(40)")
var legL1M = svg.append("rect")
               .attr("height", "200")
               .attr("width", "25")
               .attr("x", "235")
               .attr("y", "300")
               .attr("rx", "10")
               .attr("ry", "10")

// Arms Male
var armR1 = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "120")
               .attr("y", "-194")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(90)")
               .attr("fill", "black")
var armRUp1 = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "55")
               .attr("y", "-154")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(120)")
               .attr("fill", "black")
var legBentDownL = svg.append("rect")
               .attr("height", "130")
               .attr("width", "25")
               .attr("x", "-120")
               .attr("y", "-383")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(140)")
               .attr("fill", "black")
var armR1 = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "205")
               .attr("y", "-423")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(90)")
               .attr("fill", "black")














