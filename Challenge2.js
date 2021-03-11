var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function ()
{
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;


floatHwPts = parseFloat($("hw_pts").value);

floatMidPts = parseFloat($("mid_pts").value);

floatFinPts = parseFloat($("fin_pts").value);

intGradeOption = parseFloat($("grade_option").value);

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

{
$("final_grade").value = stringFinalGrade;

}
}
window.onload = function () 
{
    $("final_grade").value = "";
    $("calculate").onclick = calculate_click;
    $("hw_pts").focus(); 

}