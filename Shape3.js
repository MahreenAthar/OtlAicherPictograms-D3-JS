// Mahreen Athar
// 19I-1712
// BS(DS-N)

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

// Body
svg.append('circle')
    .attr('cx', 255)
    .attr('cy', 205)
    .attr('r', 35)
    .attr('fill', 'black')  
    .attr('stroke', 'black')

  
    svg.append("rect")
    .attr("x",255)
    .attr("y",170)
    .attr('width',180)
    .attr('height',71)
    
  
// Arm
svg.append("rect")
    .attr('width',140)
    .attr('height',35)
    .attr('rx',15)
    .attr('ry',15)
    .attr('transform', 'translate(250, 200) rotate(49)')
   
svg.append("rect")
    .attr('width',35)
    .attr('height',140)
    .attr('rx',15)
    .attr('ry',15)
    .attr('transform', 'translate(305, 290) rotate(43)')
  
// Leg
svg.append("rect")
    .attr("x",448)
    .attr("y",190)
    .attr('width',35)
    .attr('height',270)
    
    
svg.append('circle')
    .attr('cx', 465)
    .attr('cy', 465)
    .attr('r', 18)
    .attr('fill', 'black')  
    .attr('stroke', 'black')
    
svg.append("rect")
    .attr('width',25)
    .attr('height',190)
    .attr('rx',15)
    .attr('ry',15)
    .attr('transform', 'translate(3550, 60) rotate(43)')
    
svg.append("rect")
    .attr('width',30)
    .attr('height',200)
    .attr('transform', 'translate(470, 190) rotate(43)')
    
svg.append("rect")
    .attr('width',55)
    .attr('height',187)
     .attr('fill', 'white')  
    .attr('stroke', 'white')
    .attr('transform', 'translate(480, 110) rotate(46)')
    
svg.append("rect")
    .attr('width',200)
    .attr('height',30)
    .attr('rx',15)
    .attr('ry',15)
    .attr('transform', 'translate(345, 325) rotate(46)')
        
svg.append("rect")
    .attr("x",448)
    .attr("y",360)
    .attr('rx',15)
    .attr('ry',15)
    .attr('width',35)
    .attr('height',170)
    
svg.append("rect")
    .attr("x",484)
    .attr("y",200)
    .attr('width',15)
    .attr('height',30)
     .attr('fill', 'white')  
    .attr('stroke', 'white')

// Back cycle wheel  
svg.append('circle')
    .attr('cx', 650)
    .attr('cy', 460)
    .attr('r',140)
    .attr('fill', 'white')  
    .attr('stroke', 'black')
    .attr('stroke-width',6)
    
svg.append("rect")
    .attr("x",644)
    .attr("y",300)
    .attr('width',250)
    .attr('height',330)
     .attr('fill', 'white')  
    .attr('stroke', 'white')