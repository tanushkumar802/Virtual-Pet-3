//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  foodstock=database.ref('Food');
  foodStock.on("value",readStock);
  readState=database.ref('gameState');
  readState.on('value',function(data){
    gameState=data.val();
  });
  bedroom(){
    background(bedroom,550,500);
  }
  garden(){
    background(garden,550,500);
  }
  washroom(){
    background(washroom,550,500);
  }
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(dogHappy);
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
lastFed=data.val();
  });
}
if(gameState!="Hungry"){
  feed.hide();
  addFood.hide();
  dog.remove();
 } else{
   feed.show();
   addFood.show();
   dog.addImage(sadDog);
  }
  currentTime=hour();
  if(currentTime==(lastFed+1)){
    update("Playing");
    foodObj.garden();
  }else if(currentTime==(lastFed+2)){
    update("Sleeping");
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2)&& currentTime<=(lastFed+4)){
    update("Bathing");
    foodObj.washroom();
  }else{
    update("Hungry")
    foodObj.display();
  }
}
  drawSprites();
  //add styles here

}



