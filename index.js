let svg = d3.select('svg') //set canvas properties
  .attr('height', '100%')
  .attr('width', '100%')

// using functions to transform

// let data = [4,10,5,19,3,1,6,23,2,10]

// svg.selectAll('rect')
//   .data(data)
//   .enter().append('rect')
//   .attr('height', function(d,i){return d*10})
//   .attr('width', 70)
//   .attr('fill', 'salmon')
//   .attr('x', function(d,i) {return 80*i})
//   .attr('y', function(d,i) {return 350-(d*10)})
//   svg.selectAll('rect')
//     .data(data)
//     .enter().append('rect')

// let fixedX = 10
// svg.selectAll('circle')
//   .data(data)
//   .enter().append('circle')
//     .attr('fill', 'cornflowerblue')
//     .attr('stroke', 'black')
//     .attr('stroke-width', '3')
//     .attr('cx', function(d,i){fixedX +=(d*5)+(i*10); return fixedX})
//     .attr('cy', 500)
//     .attr('r', function(d,i){return d*5})


// using generators

// given as [x, y]
const points = [
  [0, 80],
  [100, 120],
  [200, 50],
  [300, 20],
  [400, 50],
  [500, 10],
  [600, 50],
  [700, 20],
  [800, 90]
]

let lineGenerator = d3.line() // line generator
  .curve(d3.curveCardinal) // curve interpolation
  
let pathData = lineGenerator(points)

d3.select('path')
  .attr('d', pathData)
  .attr('stroke', 'black')
  .attr('stroke-width', '5')
  .attr('fill', 'none')


/////////////


// let svg = d3.select('svg') //select svg element from DOM
//   .attr('width', 600)  //define width
//   .attr('height', 600)  //define height
//   .attr('class', 'svg-container') //declare class for css

// // let line = svg.append('line')
// //   .attr('x1', 100) //start x position
// //   .attr('x2', 500) //end x position
// //   .attr('y1', 50)  //start y position
// //   .attr('y2', 80)  //end y position
// //   .attr('stroke', 'red')  //stroke color
// //   .attr('stroke-width', 5)  //stroke width

// // let rect = svg.append('rect')
// //   .attr('x', 100) //starting x posiiton
// //   .attr('y', 100) //starting y position
// //   .attr('width', 200) //width
// //   .attr('height', 100)  //height
// //   .attr('fill', 'blue')  //fill color
  
// // let circle = svg.append('circle')
// //   .attr('cx', 50)  //starting x position
// //   .attr('cy', 200) //starting y position
// //   .attr('r', 20) //radius
// //   .attr('fill', 'green')  //fill color

// // let line2 = svg.append('line2')
// //   .attr('x1', 300) //start x position
// //   .attr('x2', 300) //end x position
// //   .attr('y1', 10)  //start y position
// //   .attr('y2', 100)  //end y position
// //   .attr('stroke', 'purple')  //stroke color
// //   .attr('stroke-width', 5)  //stroke width