var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
          .attr("width", w)
          .attr("height", h);
 

// Ball  
var ball = svg.append("circle")
                .attr("r", 30)
                .attr("cx", 70)
                .attr("cy", 190)
                .attr("fill","white")
                .attr("stroke","black")
                .attr("stroke-width","3");

// First wheel of cycle
var wheelFront = svg.append("circle")
                    .attr("r", 110)
                    .attr("cx", 230)
                    .attr("cy", 300)
                    .attr("fill", "white")
                    .attr("stroke", "black")
                    .attr("stroke-width","3");

// Cycle Handle
var handle = svg.append("rect")
                 .attr("height",180)
                 .attr("width",2)
                 .attr("x", 360)
                 .attr("y", -70)
                 .attr("transform", "rotate(35)")
                 .attr("fill", "black");
var handle = svg.append("rect")
                 .attr("height",120)
                 .attr("width",2)
                 .attr("x", 335)
                 .attr("y", 30)
                 .attr("fill", "black");