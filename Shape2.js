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

// Head
var head = svg.append("circle")
              .attr("r", 30)
              .attr("cx", 550)
              .attr("cy", 150)

// Body
var body = svg.append("rect")
              .attr("height",90)
              .attr("width",80)
              .attr("x", 506)
              .attr("y", 190)
              .attr("rx", 90)
              .attr("ry", 50)
              .attr("fill", "black");
var body2 = svg.append("rect")
              .attr("height",150)
              .attr("width",80)
              .attr("x", 506)
              .attr("y", 240)
              .attr("fill", "black");
var body3 = svg.append("rect")
              .attr("height",40)
              .attr("width",120)
              .attr("x", 580)
              .attr("y", -90)
              .attr("transform", "rotate(40)")
              .attr("fill", "white");
var body3 = svg.append("rect")
              .attr("height",40)
              .attr("width",120)
              .attr("x", 580)
              .attr("y", -67)
              .attr("transform", "rotate(40)")
              .attr("fill", "white");