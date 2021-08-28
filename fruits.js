Status = "";
Fruit_Image = "";

function preload() {
    Fruit_Image = loadImage("FruitsImage.jpeg")
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(520, 250)
    InitilizingCOCOssd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dectecting Objects";
}

function modelLoaded() {
    console.log("COCOssd Successfuly Loaded!");
    InitilizingCOCOssd.detect(Fruit_Image, gotResult);

}

function draw() {
    image(Fruit_Image, 0, 0, 400, 400)
}

function gotResult(error, results) {
    (error, results)
    if (error) {
        console.error;
    } else {
        console.log(results);
    }
}