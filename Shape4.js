var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

// Head Male
var headM = svg.append("circle")
               .attr("r", "40")
               .attr("cx", "160")
               .attr("cy", "60")
               .attr("fill", "black")

// Body Male
var bodyM = svg.append("rect")
               .attr("height", "200")
               .attr("width", "80")
               .attr("x", "120")
               .attr("y", "120")
               .attr("rx", "10")

// Legs Male
var legR1M = svg.append("rect")
               .attr("height", "100")
               .attr("width", "25")
               .attr("x", "120")
               .attr("y", "300")
               .attr("rx", "10")
               .attr("ry", "10")
var legBentR1M = svg.append("rect")
               .attr("height", "100")
               .attr("width", "25")
               .attr("x", "340")
               .attr("y", "207")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(40)")
var legL1M = svg.append("rect")
               .attr("height", "200")
               .attr("width", "25")
               .attr("x", "175")
               .attr("y", "300")
               .attr("rx", "10")
               .attr("ry", "10")
















