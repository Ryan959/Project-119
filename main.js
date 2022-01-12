timer_counter = 0;

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
}

function classifyCanvas(){
    classifier.classify(canvas, gotResults);
}

function check_sketch(){
    timer_counter = timer_counter + 1;
    delay();
    document.getElementById("timer").innerHTML = "Timer : " + timer_counter;
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)
    document.getElementById("label").innerHTML = "Label : " + results[0].label;

    document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%";

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}


