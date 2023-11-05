document.getElementById("checkButton").addEventListener("click", function() {
    var percentage = parseFloat(document.getElementById("percentage").value);
    var resultElement = document.getElementById("result");
    var grade;

    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    resultElement.textContent = "Grade: " + grade;
    console.log(percentage , grade)
});
