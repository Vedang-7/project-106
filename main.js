function start_Classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://drive.google.com/drive/folders/113Xbft0jSpCcucAGwdivStUYIm1XrRk-?usp=sharing/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    
    random_number_r=Math.floor(Math.random()+255)+1;
    random_number_g=Math.floor(Math.random()+255)+1;
    random_number_b=Math.floor(Math.random()+255)+1;
    document.getElementById("result_label").innerHTML='I can here:- '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy:- '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById('Image_1.jpg');
    img1=document.getElementById('Image_2.jpg');
    img2=document.getElementById('download.jpg');
    img3=document.getElementById('cute-cow.jpg');
    
    if(results[0].label=="Meowing"){
        img1.src='Image_2.gif';
    }
    else if(results[0].label=="Barking"){
        img.src='Image_1.jpg';
        
    }
    else if(results[0].label=="Roaring"){
        img2.src='lion-roar.gif';
    }
    else {
        img3.src='cute-cow.gif';
    }
}
}
