song1 ="";
song2 = "";

function preload() {
    song1 = ("beauty_beast.mp3");
    song2 = ("headwing's theme.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}