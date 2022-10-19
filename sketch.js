function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(2)
  for(var j = -1;j<int(height/(50));j++){
    for(var i = -1;i<int(width/(50));i++)
    {
      stroke(frameCount%256,mouseX,mouseY)//框線顏色的r隨時間改變，g隨滑鼠在x軸上改變，b隨滑鼠在y軸上改變
      ellipse(25+(i*50),25+(j*50),mouseX/8)
      stroke(mouseY,mouseX,frameCount%256)//框線顏色的r隨滑鼠在y軸上改變，g隨滑鼠在x軸上改變，b隨時間改變
      rect(25+(i*50),25+(j*50),mouseX/5)
      stroke(mouseX,frameCount%256,mouseY)
      ellipse(50+(i*50),50+(j*50),mouseX/15)
      stroke(mouseX,mouseY,frameCount%256)
      ellipse(0+(i*50),50+(j*50),mouseX/20)//多加一個圓在左下角，使其與原本的圓形成雙圈
    }
  }
  strokeWeight(5)
  stroke(mouseY,mouseX,mouseY)
  triangle(width/2,height/3,width/3,height*2/3,width*2/3,height*2/3)
  stroke(mouseX,mouseY,mouseX)
  triangle(width/2,height*2/3+50,width/3,height/3+50,width*2/3,height/3+50)
}
