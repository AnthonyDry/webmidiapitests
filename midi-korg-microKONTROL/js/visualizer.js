/**
 * @author Anthony Dry
 */


function noteOn( note, velocity ) {
	
		var e = document.getElementById( "k" + note );
		if (e)
			e.classList.add("pressed");
	
}

function noteOff( note ) {
	
		var e = document.getElementById( "k" + note );
		if (e)
			e.classList.remove("pressed");
	
}

function controller( number, value ) {
	var SLIDER_MIN = 125;
	var SLIDER_STEPS = 120;
	switch (number) {
		//KNOBS ROTARY.
		case 16:
		//Changes colour of the display.
			var e = document.getElementById("led1");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text1");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 17:
		//Changes colour of the display.
			var e = document.getElementById("led2");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text2");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 18:
		//Changes colour of the display.
			var e = document.getElementById("led3");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text3");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 19:
		//Changes colour of the display.
			var e = document.getElementById("led4");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text4");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 48:
		//Changes colour of the display.
			var e = document.getElementById("led5");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text5");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 49:
		//Changes colour of the display.
			var e = document.getElementById("led6");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text6");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 50:
		//Changes colour of the display.
			var e = document.getElementById("led7");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text7");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
		case 51:
		//Changes colour of the display.
			var e = document.getElementById("led8");
			e.classList.add("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text8");
			var val = precise_round(value,2);
			e.innerText = val;
			break;
			
		case 80:
		//Changes colour of the display.
			var e = document.getElementById("led1");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text1");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s80");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 81:
		//Changes colour of the display.
			var e = document.getElementById("led2");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text2");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s81");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 82:
		//Changes colour of the display.
			var e = document.getElementById("led3");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text3");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s82");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 83:
		//Changes colour of the display.
			var e = document.getElementById("led4");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text4");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s83");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 87:
		//Changes colour of the display.
			var e = document.getElementById("led5");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text5");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s87");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 88:
		//Changes colour of the display.
			var e = document.getElementById("led6");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text6");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s88");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 89:
		//Changes colour of the display.
			var e = document.getElementById("led7");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text7");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s89");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
			
		case 90:
		//Changes colour of the display.
			var e = document.getElementById("led8");
			e.classList.remove("ledChange");
			//Presents the value of the midi CC#
			e = document.getElementById("led-text8");
			var val = precise_round(value,2);
			e.innerText = val;
			//visualize slider movement.
			var slider = document.getElementById("s90");
			var movement = SLIDER_STEPS * val;
			movement = SLIDER_MIN - movement;
			movement = precise_round(movement,0);
			slider.style.top = movement+"px";
			break;
		
		
	}
}

function precise_round(num,decimals){
return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}