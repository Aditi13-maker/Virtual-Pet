//Create variables here
var dog;
var happyDog;
var database;
var foodS=20
var foodStock=20
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);
  dog=createSprite(250,250,30,30)
  dog.addImage(dogImg)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(IP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2)
}
  drawSprites();
  //add styles here
  textSize(10)
  fill("black")
  stroke(3)
  text("Food Remaining:"-foodStock,10,10)

}

function readStock(data){
if(x<=0){
  x=0
}else{
  x=x-1;
}

  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}