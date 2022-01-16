Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_sapnap() {

    Webcam.snap(function (vip) {
        document.getElementById("result").innerHTML = "<img id='anything' src =" + vip + ">";
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json", model_loaded);

function model_loaded() {

    console.log("ima get juice btw model loaded");
    console.log("ml5 verrrrrrrrrsion -", ml5.version)
}

function showandtell() {
    img = document.getElementById("anything");
    classifier.classify(img, got_exam_paper);

}

prediction="";
prediction2="";

function got_exam_paper(err, results) {
    if (err) {
        console.log(err);
    } else {

        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(prediction == "victory"){
            document.getElementById("update_emoji").innerHTML= "&#9996;"

        }   
        if(prediction == "all the best"){
            document.getElementById("update_emoji").innerHTML= "&#128077;"

        }
        
        if(prediction == "amazing"){
            document.getElementById("update_emoji").innerHTML= "&#128076;"

        }

        if(prediction2 == "victory"){
            document.getElementById("update_emoji2").innerHTML= "&#9996;"

        }   
        if(prediction2 == "all the best"){
            document.getElementById("update_emoji2").innerHTML= "&#128077;"

        }
        
        if(prediction2 == "amazing"){
            document.getElementById("update_emoji2").innerHTML= "&#128076;"

        }
        
        }
                
}

function speak(){
console.log("pls work");
var synth = window.speechSynthesis;
speakitsaone = "first prediction is" + prediction  ;
speakspaek =  "second prediction is" + prediction2 ;
var utterdisapointment = new SpeechSynthesisUtterance(speakitsaone + speakspaek);
synth.speak(utterdisapointment);

}


