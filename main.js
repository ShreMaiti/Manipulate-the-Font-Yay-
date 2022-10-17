leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(350, 350);

    canvas = createCanvas(550, 550);
    canvas.position(700, 100);

    posenet = ml5.poseNet(video, ModelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background('#add8e6');
    document.getElementById('day').innerHTML = "Font size of the text will be "+difference+" pixels.";
    fill('#FC9483');
    text('Shreshtha', 50, 60);
    textSize(difference);
}

function ModelLoaded()
{
    console.log("Model is Loaded.");
}

function gotPoses()
{
if(results.length>0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist x = "+leftWristX+"; Right wrist X = "+rightWristX+"; Difference = "+difference);
}
}