function checkGrade() {

    let totalMarks = document.querySelector('#Input1').value;
    console.log("totalMarks", totalMarks);

    let ObtainedMarks = document.querySelector('#Input2').value;
    console.log("ObtainedMarks", ObtainedMarks);

    totalMarks =Number(totalMarks)
    ObtainedMarks =Number(ObtainedMarks)

    let result = "";
    let text = "";

    if  (isNaN(totalMarks)) {
        text = "please enter a valid Total Marks";
    }
    
    if  (isNaN(ObtainedMarks)) {
        text = "please enter a valid Total Marks";
    }

    if (totalMarks < ObtainedMarks) {
        text = "Obtained Marks is not Graeter than Total Marks";
    }

    if (text) {
        document.querySelector('#validationText').innerText = text;
    }else {
        document.querySelector('#validationText').innerText = "";
    }

    let percent = (ObtainedMarks / totalMarks) * 100;
    console.log("percent", percent);


    if (percent < 40) {
    result = "Fail"
    }
    else if (percent >= 40 && percent < 50) {
    result = "Grade D"
    }
    else if (percent >= 50 && percent < 60) {
    result = "Grade C"
    }
    else if (percent >= 60 && percent < 70) {
    result = "Grade B"
    }
    else if (percent >= 70 && percent < 80) {
    result = "Grade A"
    }
    else if (percent >= 80 && percent < 90) {
    result = "Grade A1"
    }
    else {
    result = "Grade A1+"
    }

    document.querySelector('#result').innerText = `${percent}% - ${result}`;
    
}