difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
video.position(300, 100);

    canvas = createCanvas(550,550);
    canvas.position(900,100);

   poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded() 
{
console.log("PoseNet is Initialized");

}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

}
}

function draw()
{
    
background("#808080");
    textSize(difference);
    fill("#CCFFCC");
    text('Varnika', 50, 400);
}