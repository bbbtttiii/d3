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

// //

// const makeFruit = type => ({ type })

// const fruits = d3.range(5)
//   .map(() => makeFruit('apple'))

// console.log(fruits)

// svg.selectAll('circle').data(fruits)
//   .enter().append('circle')
//     .attr('cx', (d,i) => i * 100)
//     .attr('cy', (height / 2))
//     .attr('r', 50)

let data = [2,14,4,16,8,6,13]

let svg = d3.select('svg').attr('height', 800).attr('width', '100%')
svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
  .attr('height', function(d,i){return d*10})
  .attr('width', 70)
  .attr('fill', 'red')
  .attr('x', function(d,i) {return 80*i})
  .attr('y', function(d,i) {return 350-(d*10)})
  svg.selectAll('rect')
    .data(data)
    .enter().append('rect')

let fixedX = 100

svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('fill', 'blue')
    .attr('stroke', 'black')
    .attr('stroke-width', '3')
    .attr('cx', function(d,i){fixedX +=(d*10)+(i*30); return fixedX})
    .attr('cy', 500)
    .attr('r', function(d,i){return d*7})