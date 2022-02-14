
var cities = [];
var xMain = [];
var yMain = [];
var totalCities = prompt("Enter no. of cities:");
// let input, button;
var recordDistance;
var bestEver;
var labels = ["a" , "b" ,"c" , "d" ,"e"];

function setup() {
  createCanvas(400,400);
//   input = createInput();
//   input.position(20, 65);
//  button = createButton('submit');
//   button.position(input.x + input.width, 65);
//   button.mousePressed();
//   totalCities = input.value();


// var x = [1,13,56,256,25,390];
// var y = [1,20,50,200,250,399];
// 
var XX = prompt("inputs(x-axis):");
var YY= prompt("inputs(y-axis):");
var xindex = 0;
var yindex = 0;
var temp = "";
var temp2 = "";

var i = 0;

// for x input
while(XX[i] != undefined){
  if(XX[i] != " "){
    temp = temp + XX[i];

  }
  else{
    xMain[xindex] = parseInt(temp);
    xindex++;
    temp = "";
  }
  i++;
}
xMain[xindex] = parseInt(temp);
    xindex++;
    temp = "";

// for y input
i=0;
while(YY[i] != undefined){
  if(YY[i] != " "){
    temp2 = temp2 + YY[i];

  }
  else{
    yMain[yindex] = parseInt(temp2);
    yindex++;
    temp2 = "";
  }
  i++;
}
yMain[yindex] = parseInt(temp2);
    yindex++;
    temp2 = "";
    



console.log(xMain)
console.log(yMain)






// totalCities = document.getElementById("nodes").value;
  // console.log(totalCities);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(xMain[i],yMain[i]);
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}


function draw() {
  background(200);
  fill('blue');
  noStroke();
 

  fill('black');
  //for drawing nodes
  for (var i = 0; i < cities.length; i++) {
    circle(cities[i].x, cities[i].y, 10,10);
  }
  
  for(var q = 0 ; q < totalCities; q++){
    fill(255,255,255)
    text(labels[q],xMain[q]+5,yMain[q]+5);
  }
   
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}
textSize(12);
text(`Best: ${floor(recordDistance)}`, 340, 10);


function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}