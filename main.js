Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {

Webcam.snap(function(data_uri) { 
    
    document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id = "captured_image">'
} );
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8pkmavhAL/model.json',modelloaded)

function modelloaded() {

    console.log("Working");
}

console.log('ml5:version', ml5.version);



function speak(){

var speak = window.speechSynthesis;
var speek_data_1 = "The First Prediction is" + prediction_1 ;
var speek_data_2 = "And the second precistion is" + prediction_2;

var say = new SpeechSynthesisUtterance(speek_data_1 + speek_data_2);

speak.speak(say);
}

prediction_1 = "";
prediction_2 = "";


function check(){

img = document.getElementById('captured_image');
classifier.classify(img, gotresult);
}


function gotresult(error,results){

if(error){
    console.error(error);
}
else{

console.log(results);

document.getElementById('result_emotion_name').innerHTML = results[0].label;
document.getElementById('result_emotion_name2').innerHTML = results[1].label;

prediction_1 = results[0].label;
prediction_2 = results[1].label;

speak()
if(results[0].label == "Happy"){
document.getElementById('update_emoji').innerHTML = "&#128522;"
}

if(results[0].label == "Sad"){
    document.getElementById('update_emoji').innerHTML = "&#128532;"
    }

    if(results[0].label == "Cry"){
        document.getElementById('update_emoji').innerHTML = "&#128546;"
        }

        if(results[0].label == "Sad"){
            document.getElementById('update_emoji').innerHTML = "&#128545;"
            }



            if(results[1].label == "Happy"){
                document.getElementById('update_emoji2').innerHTML = "&#128522;"
                }
                
                if(results[1].label == "Sad"){
                    document.getElementById('update_emoji2').innerHTML = "&#128532;"
                    }
                
                    if(results[1].label == "Cry"){
                        document.getElementById('update_emoji2').innerHTML = "&#128546;"
                        }
                
                        if(results[1].label == "Sad"){
                            document.getElementById('update_emoji2').innerHTML = "&#128545;"
                            }

}

}




