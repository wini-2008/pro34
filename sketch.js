//Create variables here
var dog, happydog, dataBase , foods,foodStock;


function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("image/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  addImage(dog1);
  foodStock = dataBase.ref("food");
  foodStock.on("value",readStock);
}


function draw() {
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    addImage(dog2);
  }
  drawSprites();
  //add styles here
  text("foodStock : "+ food,displayWidth/2 ,displayHeight-390);
}
 function readStock(data){
   foods = data.val();
 }

 function writeStock(x){
    dataBase.ref("/").update({
      food:x
    })   
 }



