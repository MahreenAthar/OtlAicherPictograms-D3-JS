var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
          .attr("width", w)
          .attr("height", h);
 

// First wheel of cycle  
var circle = svg.append("circle")
                .attr("r", 110)
                .attr("cx", 130)
                .attr("cy", 400)
                .attr("fill","white")
                .attr("stroke","black")
                .attr("stroke-width","3");

// Second wheel of cycle
var circleSemi = svg.append("circle")
                    .attr("r", 110)
                    .attr("cx", 500)
                    .attr("cy", 400)
                    .attr("fill", "white")
                    .attr("stroke", "black")
                    .attr("stroke-width","3");

var cutRect = svg.append("rect")
                 .attr("height",239)
                 .attr("width",112)
                 .attr("x", 500)
                 .attr("y", 280)
                 .attr("rx", 90)
                 .attr("ry", 10)
                 .attr("fill", "white");

// Head
var head = svg.append("circle")
              .attr("r", 45)
              .attr("cx", 355)
              .attr("cy", 48)

// Body
var body = svg.append("rect")
              .attr("height",90)
              .attr("width",112)
              .attr("x", 300)
              .attr("y", 108)
              .attr("rx", 90)
              .attr("ry", 50)
              .attr("fill", "black");
var body2 = svg.append("rect")
              .attr("height",90)
              .attr("width",112)
              .attr("x", 300)
              .attr("y", 160)
              .attr("fill", "black");
var body3 = svg.append("rect")
              .attr("height",50)
              .attr("width",112)
              .attr("x", 300)
              .attr("y", 250)
              .attr("fill", "white");

// Left Arm
var leftArm = svg.append("rect")
                 .attr("x", "310")
                 .attr("y", "-131")
                 .attr("width", "25")
                 .attr("height", "200")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(45)")
                 .style("fill", "black");

// Right Arm
var rightArmDown = svg.append("rect")
                 .attr("x", "445")
                 .attr("y", "-186")
                 .attr("width", "25")
                 .attr("height", "75")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(45)")
                 .style("fill", "black");
var rightArmUp = svg.append("rect")
                 .attr("x", -208)
                 .attr("y", "-463")
                 .attr("width", "25")
                 .attr("height", "110")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(137)")
                 .style("fill", "black");

// Leg
var LegLongDown = svg.append("rect")
                 .attr("x", "300")
                 .attr("y", "320")
                 .attr("width", "25")
                 .attr("height", "160")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .style("fill", "black");
var LegBentDown = svg.append("rect")
                 .attr("x", "-119")
                 .attr("y", "430")
                 .attr("width", "25")
                 .attr("height", "97")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(-47)")
                 .style("fill", "black");
var LegBentUp = svg.append("rect")
                 .attr("x", "-445")
                 .attr("y", "-139")
                 .attr("width", "25")
                 .attr("height", "105")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(-140)")
                 .style("fill", "black");
var RestOfTheLegPart = svg.append("rect")
                          .attr("x", "300")
                          .attr("y", "300")
                          .attr("width", "112")
                          .attr("height", "50")








              