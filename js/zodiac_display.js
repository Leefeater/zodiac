//Hide user information
function transition() {
document.getElementById("dateEnter").style.display = "none";
document.body.style.backgroundImage = "url('img/sunny.jpg')";
document.getElementById("footerText").style.color = "#666";
}

//Display zodiac sign
function showSign() {
//users input gets stored as variable
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
//check to see which month and day, then displays appripriate
//horoscope
 transition()
 if(month == 1) {
 	if(day <= 19) {
	document.getElementById("capricorn").style.display = "block"
 	}else if(day > 19) {
 	document.getElementById("aquarius").style.display = "block"
 	}
 }else if(month == 2) {
 	if(day <= 18) {
 	document.getElementById("aquarius").style.display = "block"	
 	}else if (day > 18) {
 	document.getElementById("pisces").style.display = "block"
 	}
 }else if(month == 3) {
 	if(day <= 20) {
 		document.getElementById("pisces").style.display = "block"
 	}else if(day > 20) {
 		document.getElementById("aries").style.display = "block"
 	}
 }else if(month == 4) {
 	if(day <= 19) {
 		document.getElementById("aries").style.display = "block"
 	}else if(day > 19) {
 		document.getElementById("taurus").style.display = "block"
 	}
 }else if(month == 5) {
 	if(day <= 20) {
 		document.getElementById("taurus").style.display = "block"
 	}else if(day > 20) {
 		document.getElementById("gemini").style.display = "block"
 	}
 }else if(month == 6) {
 	if(day <= 20) {
 		document.getElementById("gemini").style.display = "block"
 	}else if(day > 20) {
 		document.getElementById("cancer").style.display = "block"
 	}
 }else if(month == 7) {
 	if(day <= 22) {
 		document.getElementById("cancer").style.display = "block"
 	}else if(day > 22) {
 		document.getElementById("leo").style.display = "block"
 	}
 }else if(month == 8) {
 	if(day <= 22) {
 		document.getElementById("leo").style.display = "block"
 	}else if(day > 22) {
 		document.getElementById("virgo").style.display = "block"
 	}
 }else if (month == 9) {
 	if(day <= 22) {
 		document.getElementById("virgo").style.display = "block"
 	}else if(day > 22) {
 		document.getElementById("libra").style.display = "block"
 	}
 }else if (month == 10) {
 	if(day <= 22) {
 		document.getElementById("libra").style.display = "block"
 	}else if(day > 22) {
 		document.getElementById("scorpio").style.display = "block"
 	}
 }else if (month == 11) {
 	if(day <= 21) {
 		document.getElementById("scorpio").style.display = "block"
 	}else if(day > 21) {
 		document.getElementById("sagittarius").style.display = "block"
 	}
 }else if(month == 12) {
 	if(day <= 22) {
 		document.getElementById("sagittarius").style.display = "block"
 	}else if(day > 22) {
 		document.getElementById("capricorn").style.display = "block"
 	}
 }
}
