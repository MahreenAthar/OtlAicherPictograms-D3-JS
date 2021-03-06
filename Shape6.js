// Mahreen Athar
// 19I-1712
// BS(DS-N)

var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

// Person 1
var Pbody1 = svg.append("rect")
                .attr("width",154).attr("height",76)
                .attr("transform", "matrix(0.719, -0.695, 0.695, 0.719, 121.08, 191.154)")
                .attr("stroke","#000")
                .attr("stroke-width",1)
var Phead1 = svg.append("ellipse")
                .attr("cx",36)
                .attr("cy",36.5)
                .attr("rx",36)
                .attr("ry",36.5)
                .attr("transform","translate(300.8)")
var ParmR1 = svg.append("rect")
                .attr("width",152).attr("height",33).attr('rx',16)
                .attr("transform", "translate(127.8 60)")
var ParmL1 = svg.append("rect")
                .attr("width",138).attr("height",33).attr('rx',16)
                .attr("transform", "translate(284.6 214.6) rotate(-92.4)")
var ParmLUp1 = svg.append("rect")
                  .attr("width",138).attr("height",33).attr('rx',16)
                  .attr("transform", "translate(395.4 121.7) rotate(131)")
var Pleg1 = svg.append("rect")
               .attr("width",228).attr("height",33).attr('rx',16)
               .attr("transform", "translate(234.3 413) rotate(-131)")
var PbodyUp1 = svg.append("ellipse")
                  .attr("cx",43)
                  .attr("cy",40.5)
                  .attr("rx",43)
                  .attr("ry",40.5)
                  .attr("transform","translate(227.8 60)")
var ParmRDown1 = svg.append("rect")
                    .attr("width",138).attr("height",33).attr('rx',16)
                    .attr("transform", "translate(48 154) rotate(-47)")
var PlegR1 = svg.append("rect")
                .attr("width",187).attr("height",33).attr('rx',16)
                .attr("transform", "translate(93 414) rotate(-91)")
var PlegDown1 = svg.append("rect")
                   .attr("width",150).attr("height",33).attr('rx',16)
                   .attr("transform", "translate(132.2 400.8) rotate(137)")
var PlegLDown1 = svg.append("rect")
          .attr("width",162).attr("height",33).attr('rx',16)
          .attr("transform", "translate(253.6 409.7) rotate(-180)")
// Person 2
var Pbody2 = svg.append("rect")
                .attr("width",62).attr("height",121)
                .attr("transform", "translate(426.8 283)")
var Pchair2 = svg.append("ellipse")
                 .attr("cx",64)
                 .attr("cy",64.5)
                 .attr("rx",64)
                 .attr("ry",64.5)
                 .attr("transform","translate(360.8 372)")
                 .attr("stroke","#000")
                 .attr("stroke-width",5)
                 .attr("fill","transparent")
var PbodyUp2 = svg.append("ellipse")
                  .attr("cx",31)
                  .attr("cy",29.5)
                  .attr("rx",31)
                  .attr("ry",29.5)
                  .attr("transform","translate(426.8 258)")
var Phead2 = svg.append("circle")
                .attr("cx",20.5)
                .attr("cy",20.5)
                .attr("r",20.5)
                .attr("transform","translate(437.8 206)")
var Pleg2 = svg.append("rect")
               .attr("width",123).attr("height",33).attr('rx',16)
               .attr("transform", "translate(524.3 497.3) rotate(-90)")
var Parm2 = svg.append("rect")
               .attr("width",112).attr("height",33).attr('rx',16)
               .attr("transform", "translate(539.7 336.5) rotate(-180)")
var PlegVert2 = svg.append("rect")
                   .attr("width",130).attr("height",33).attr('rx',16)
                   .attr("transform", "translate(557 404) rotate(-180)")