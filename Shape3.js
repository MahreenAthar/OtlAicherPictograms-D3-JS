var w = 680;
var h = 680;
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

// Head
svg.append('circle')
    .attr('cx', 165)
    .attr('cy', 165)
    .attr('r', 35)
    .attr('fill', 'black')  
    .attr('stroke', 'black')

// Front cycle wheel
svg.append('circle')
    .attr('cx', 190)
    .attr('cy', 460)
    .attr('r',140)
    .attr('fill', 'white')  
    .attr('stroke', 'black')
    .attr('stroke-width',6)