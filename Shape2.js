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
var handleUp = svg.append("rect")
                 .attr("height",100)
                 .attr("width",2)
                 .attr("x", 335)
                 .attr("y", 50)
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
              .attr("x", 490)
              .attr("y", 190)
              .attr("rx", 90)
              .attr("ry", 50)
              .attr("fill", "black");
var body2 = svg.append("rect")
              .attr("height",150)
              .attr("width",80)
              .attr("x", 490)
              .attr("y", 240)
              .attr("fill", "black");
var body3 = svg.append("rect")
              .attr("height",40)
              .attr("width",120)
              .attr("x", 570)
              .attr("y", -80)
              .attr("transform", "rotate(40)")
              .attr("fill", "white");
var body3 = svg.append("rect")
              .attr("height",40)
              .attr("width",120)
              .attr("x", 570)
              .attr("y", -56)
              .attr("transform", "rotate(40)")
              .attr("fill", "white");

// Left Arm
var Arm = svg.append("rect")
                 .attr("x", "191")
                 .attr("y", "-540")
                 .attr("width", "25")
                 .attr("height", "160")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(90)")
                 .style("fill", "black");
var ArmUp = svg.append("rect")
                 .attr("x", -160)
                 .attr("y", "-427")
                 .attr("width", "25")
                 .attr("height", "115")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(137)")
                 .style("fill", "black");


// Leg
var LegLongHor1 = svg.append("rect")
                 .attr("x", "330")
                 .attr("y", "-510")
                 .attr("width", "25")
                 .attr("height", "160")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(90)")
                 .style("fill", "black");
var LegLongHor2 = svg.append("rect")
                 .attr("x", "370")
                 .attr("y", "-558")
                 .attr("width", "25")
                 .attr("height", "158")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(90)")
                 .style("fill", "black");
var LegLongDown1 = svg.append("rect")
                 .attr("x", "545")
                 .attr("y", "-75")
                 .attr("width", "25")
                 .attr("height", "120")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .attr("transform", "rotate(50)")
                 .style("fill", "black");
var LegLongDown2 = svg.append("rect")
                 .attr("x", "349")
                 .attr("y", "330")
                 .attr("width", "25")
                 .attr("height", "100")
                 .attr("rx", 10)
                 .attr("ry", 10)
                 .style("fill", "black");
var HideEdge = svg.append("rect")
              .attr("height",30)
              .attr("width",110)
              .attr("x", 570)
              .attr("y", -60)
              .attr("transform", "rotate(38)")
              .attr("fill", "white");

// Second wheel of cycle
var wheelBack = svg.append("circle")
                    .attr("r", 110)
                    .attr("cx", 480)
                    .attr("cy", 510)
                    .attr("fill", "white")
                    .attr("stroke", "black")
                    .attr("stroke-width","3");
var Arc = svg.append("rect")
              .attr("height",120)
              .attr("width",235)
              .attr("x", 363)
              .attr("y", 510)
              .attr("fill", "white");









              