<!DOCTYPE html>
<html>
<head>
	<title>Zodiac Future</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<!--Get information-->
<div class="dateEnter">
	<h1>Enter your birth date</h1>
	<form>
	<label>Day</label>
	<select>
		<option value="1">1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
		<option>6</option>
		<option>7</option>
		<option>8</option>
		<option>9</option>
		<option>10</option>

	<input type="text" id="month">
	</form>
	<button id="submit" onClick="showSign()">Submit</button>
	<br>
	<small>Please use numbers</small>
</div>
<!--Zodiac Sign Information -->

<div class="zodiac" id="aquarius">
	<h1>Aquarius<small> Jan 20 - Feb 18</small></h1>
	<img src="img/aquarius.jpg" alt="Aquarius Symbol">
	<p>There's travel in your future when your tongue freezes to the back of a speeding bus. Fill that void in your pathetic life by playing Whack-A-Mole seventeen hours a day.</p>
</div>
<div class="zodiac" id="pisces">
	<h1>Pisces<small> Feb 19 - Mar 20</small></h1>
	<img src="img/pisces.jpg">
	<p>Try to avoid any Virgos or Leos with the Ebola virus. You are the true Lord of the Dance, no matter what those idiots at work say.</p>
</div>
<div class="zodiac" id="aries">
	<h1>Aries<small> Mar 21 - Apr 19</small></h1>
	<img src="img/aries.jpg" alt="Aries Symbol">
	<p>The look on your face will be priceless when you find that forty pound watermelon in your colon. Trade toothbrushes with an albino dwarf, then give a hickey to Meryl Streep</p>
</div>
<div class="zodiac" id="taurus">
	<h1>Taurus<small> Apr 20 - May 20</small></h1>
	<img src="img/taurus.jpg">
	<p>You will never find true happiness - what you gonna do, cry about it? The stars predict tomorrow you'll wake up, do a bunch of stuff, and then go back to sleep</p>
</div>
<div class="zodiac" id="gemini">
	<h1>Gemini<small> 21 May - 20 Jun</small></h1>
	<img src="img/gemini.jpg">
	<p> Your birthday party will be ruined once again by your explosive flatulence. Your love life will run into trouble when your fiance hurls a javelin through your chest</p>
</div>
<div class="zodiac" id="cancer">
	<h1>Cancer<small> 21 Jun - 22 Jul</small></h1>
	<img src="img/cancer.jpg">
	<p>The position of Jupiter says you should spend the rest of the week face down in the mud. Try not to shove a roll of duct tape up your nose while taking your driver's test</p>
</div>
<div class="zodiac" id="leo">
	<h1>Leo<small> 23 Jul - 22 Aug</small></h1>
	<img src="img/leo.jpeg">
	<p>Now is not a good time to photocopy your butt and staple it to your boss's face, oh no.  Eat a bucket of tuna-flavored pudding, then wash it down with a gallon of strawberry Quik</p>
</div>
<div class="zodiac" id="virgo">
	<h1>Virgo<small> 23 Aug - 22 Sep</small></h1>
	<img src="img/virgo.jpg">
	<p>All Virgos are extremely friendly and intelligent - except for you.  Expect a big surprise today when you wind up with your head impaled upon a stick</p>
</div>
<div class="zodiac" id="libra">
	<h1>Libra<small> 23 Sep - 22 Oct</small></h1>
	<img src="img/libra.jpg">
	<p>A big promotion is just around the corner for someone much more talented that you.  Laughter is the very best medicine, remember that when your appendix bursts next week</p>
</div>
<div class="zodiac" id="scorpio">
	<h1>Scorpio<small>23 Oct - 21 Nov</small></h1>
	<img src="img/scorpio.jpg">
	<p>Get ready for an unexpected trip when you fall screaming from an open window
Work a little harder on improving your low self-esteem, you stupid freak</p>
</div>
<div class="zodiac" id="sagittarius">
	<h1>Sagittarius<small> 22 Nov - 21 Dec</small></h1>
	<img src="img/sagittarius.jpg">
	<p>All your friends are laughing behind your back (kill them). Take down all those naked pictures of Ernest Borgnine you've got hanging in your den</p>
</div>
<div class="zodiac" id="capricorn">
	<img src="img/capricorn.jpg">
	<h1>Capricorn<small> Dec 22 - Jan 19</small></h1>
	<p>The stars say that you're an exciting and wonderful person, but you know they're lying. If I were you, I'd lock my doors and windows and never never never never never leave my house again</p>
</div>



<script>
//date testing
function showSign() {
//users input gets stored as variable
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
 
//check to see which month and day, then displays appripriate
//horoscope
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

</script>
</body>
</html>