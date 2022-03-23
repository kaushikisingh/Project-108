function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EC-AP6TLe/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        randomr=Math.floor(Math.random()*255)+1;
        randomg=Math.floor(Math.random()*255)+1;
        randomb=Math.floor(Math.random()*255)+1;

        document.getElementById("resultlabel").innerHTML="I can hear  -"+results[0].label;
        document.getElementById("resultaccuracy").innerHTML="Accuracy  -"+(results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("resultlabel").style.color="rgb("+randomr+","+randomg+","+randomb+")";
        document.getElementById("resultaccuracy").style.color="rgb("+randomr+","+randomg+","+randomb+")";

        img1=document.getElementById("backgroundnoise");
        img2=document.getElementById("dog");
        img3=document.getElementById("cat");
        img4=document.getElementById("lion");

        if(results[0].label=="BackgroundNoise")
        {
            img1.src='backgroundnoise.gif';
            img2.src='dog.jpg';
            img3.src='cat.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="Barking")
        {
            img1.src='backgroundnoise.png';
            img2.src='dog.gif';
            img3.src='cat.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="Meowing")
        {
            img1.src='backgroundnoise.png';
            img2.src='dog.jpg';
            img3.src='cat.gif';
            img4.src='lion.jpg';
        }
        else (results[0].label=="Roaring")
        {
            img1.src='backgroundnoise.png';
            img2.src='dog.jpg';
            img3.src='cat.jpg';
            img3.src='lion.gif';
        }
    }
}