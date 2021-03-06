// Mahreen Athar
// 19I-1712
// BS(DS-N)

var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

// Head Male
var headM = svg.append("circle")
               .attr("r", "38")
               .attr("cx", "210")
               .attr("cy", "65")
               .attr("fill", "black")
// Head Female
var headM = svg.append("circle")
               .attr("r", "38")
               .attr("cx", "310")
               .attr("cy", "70")
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

// Frock Female
var Frock1 = svg.append("rect")
               .attr("height", "140")
               .attr("width", "5")
               .attr("x", "315")
               .attr("y", "-390")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(90)")
               .attr("fill", "black")
var Frock2 = svg.append("rect")
               .attr("height", "210")
               .attr("width", "5")
               .attr("x", "-96")
               .attr("y", "-494")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(140)")
               .attr("fill", "black")

// Legs Female
var legF = svg.append("rect")
               .attr("height", "185")
               .attr("width", "25")
               .attr("x", "307")
               .attr("y", "315")
               .attr("rx", "10")
               .attr("ry", "10")
var legBentF = svg.append("rect")
               .attr("height", "110")
               .attr("width", "25")
               .attr("x", "-123")
               .attr("y", "510")
               .attr("rx", "10")
               .attr("ry", "10")
               .attr("transform", "rotate(-50)")













