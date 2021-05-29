const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var backgroundname;

var bg ;

function preload() {
getBackground()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson = await response.json()
    var datetime = responsejson.datetime
    console.log(datetime)
    var hour = datetime.slice(11,13)
    console.log(hour)
    if (hour>04 && hour<=06){
        backgroundname = "sunrise1.png"
    } else
     if (hour>06 && hour<=08){
        backgroundname = "sunrise2.png"
    } else
    if (hour>08 && hour<=10){
        backgroundname = "sunrise3.png"
    } else
    if (hour>10 && hour<=12){
        backgroundname = "sunrise4.png"
    } else
    if (hour>12 && hour<=14){
        backgroundname = "sunrise5.png"
    } else
    if (hour>14 && hour<=16){
        backgroundname = "sunrise6.png"
    } else
    if (hour>16 && hour<=18){
        backgroundname = "sunrise7.png"
    } else 
    if (hour>18 && hour<=20){
        backgroundname = "sunset8.png"
    } else
    if (hour>20 && hour<=22){
        backgroundname = "sunset9.png"
    } else
    if (hour>22 && hour<=00){
        backgroundname = "sunset10.png"
    } else
    if (hour>00 && hour<=02){
        backgroundname = "sunset11.png"
    }  else
    if (hour>02 && hour<=04){
        backgroundname = "sunset12.png"
    } 
    

    backgroundImg = loadImage(backgroundname);

    //load the image in backgroundImg variable here

}
