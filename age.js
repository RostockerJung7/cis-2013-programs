var floatAge, floatDays, intWeeks, floatMonths, intFortknights;
 
floatAge = parseFloat(prompt("Enter you age in years"));
floatDays = parseFloat(floatAge*365.25).toFixed(2);
intWeeks = parseFloat(floatDays/7).toFixed(0);
floatMonths= parseFloat(floatAge*12).toFixed(2);
intFortknights = parseFloat(floatDays/14).toFixed(0);

alert("Your are currently " + floatAge + " years and " + floatDays + " days old. This means you also lived " + intWeeks + " weeks and " + floatMonths + " months. In fortknights you are " + intFortknights + " old.");