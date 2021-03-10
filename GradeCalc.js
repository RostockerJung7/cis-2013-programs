var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;


floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter your Midterm Points (0-35):"));

floatFinPts = parseFloat(prompt("Please enter your final exam points (0-35):"));

intGradeOption = parseFloat(prompt("Please enter you grade option, Pass/Fail (1) or Letter Grade (2):"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts+ floatFinPts);


if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
    }
     else
    {
        stringFinalGrade = "Fail";
}
}
else
{
 if (floatTotalPts >= 90)
{
    stringFinalGrade = "A";
}
    else if (floatTotalPts < 90 && floatTotalPts >= 80)
 {   
    stringFinalGrade = "B";
}
    else if (floatTotalPts < 80 && floatTotalPts >= 70)
{
 stringFinalGrade = "C";
}
    else if (floatTotalPts < 70 && floatTotalPts >= 60)
{
    stringFinalGrade = "D";
}
    else
{
 stringFinalGrade = "F";
}
}
console.log(stringFinalGrade);


alert("Your final grade is: " +stringFinalGrade);