function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;
}

function draw() {
  // put drawing code here
  background(	255,255,0);
  strokeWeight(1)
  line(200,0,200,400);

  fill(44, 44, 43)
  ellipse(100,100,150,150)
  fill(255,255,255)
  ellipse(110,80,80,80)
  fill(44, 44, 43)
  ellipse(110,90,40,40)
  fill(44, 44, 43)
  ellipse(110,65,40,40)
  fill(255,255,255)
  ellipse(110,90,27.5,27.5)
  fill(255,255,255)
  ellipse(110,62,23.5,23.5)

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 100 + 10*Math.sin(PI*j/20)
  var r = 150 + 10*Math.sin(PI*j/20)
  j += 1
  fill(44, 44, 43)
  ellipse(300, y, r, r)

  for (var i=0; i<=400; i++){
    x = i
    y = 310 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 80 + 10*Math.sin(PI*j/20)
  var r = 80 + 10*Math.sin(PI*j/20)
  j += 1
  fill(255,255,255)
  ellipse(310, y, r, r)

  for (var i=0; i<=400; i++){
    x = i
    y = 310 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 65 + 10*Math.sin(PI*j/20)
  var r = 40 + 10*Math.sin(PI*j/20)
  j += 1
  fill(44, 44, 43)
  ellipse(310, y, r, r)

  for (var i=0; i<=400; i++){
    x = i
    y = 310 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 90 + 10*Math.sin(PI*j/20)
  var r = 40 + 10*Math.sin(PI*j/20)
  j += 1
  fill(44, 44, 43)
  ellipse(310, y, r, r)

  for (var i=0; i<=400; i++){
    x = i
    y = 310 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 90 + 10*Math.sin(PI*j/20)
  var r = 27.5 + 10*Math.sin(PI*j/20)
  j += 1
  fill(255,255,255)
  ellipse(310, y, r, r)

  for (var i=0; i<=400; i++){
    x = i
    y = 310 + 10*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 62 + 10*Math.sin(PI*j/20)
  var r = 23.5 + 10*Math.sin(PI*j/20)
  j += 1
  fill(255,255,255)
  ellipse(310, y, r, r)

}