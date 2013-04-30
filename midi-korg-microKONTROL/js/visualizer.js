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
//TODO: this need to be refactored it's 2 messy.
function controller( number, value ) {

	switch (number) {
		//This is the cases for the knobs/rotary.
		case 16:
			ChangeKnob("led1", "led-text1", value);
			break;
		case 17:
			ChangeKnob("led2", "led-text2", value);
			break;
		case 18:
			ChangeKnob("led3", "led-text3", value);
			break;
		case 19:
			ChangeKnob("led4", "led-text4", value);
			break;
		case 48:
			ChangeKnob("led5", "led-text5", value);
			break;
		case 49:
			ChangeKnob("led6", "led-text6", value);
			break;
		case 50:
			ChangeKnob("led7", "led-text7", value);
			break;
		case 51:
			ChangeKnob("led8", "led-text8", value);
			break;
			//This is the cases for the faders/sliders.
		case 80:
			ChangeFader("led1","led-text1","s80", value);
			break;
		case 81:
			ChangeFader("led2","led-text2","s81", value);
			break;
			
		case 82:
			ChangeFader("led3","led-text3","s82", value);
			break;
			
		case 83:
			ChangeFader("led4","led-text4","s83", value);
			break;
			
		case 87:
			ChangeFader("led5","led-text5","s87", value);
			break;
			
		case 88:
			ChangeFader("led6","led-text6","s88", value);
			break;
			
		case 89:
			ChangeFader("led7","led-text7","s89", value);
			break;
			
		case 90:
			ChangeFader("led8","led-text8","s90", value);
			break;
		
		
	}
}
// HELP FUNCTIONS
function ChangeKnob(el,text,value)
{
	//Changes colour of the display.
	var e = document.getElementById(el);
	e.classList.remove("ledChange");
	//Presents the value of the midi CC#
	e = document.getElementById(text);
	var val = precise_round(value,2);
	e.innerText = val;
}
function ChangeFader(el,text,obj,value)
{
	//CONSTANTS
	var SLIDER_MIN = 125;
	var SLIDER_STEPS = 120;
	
	//Changes colour of the display.
	var e = document.getElementById(el);
	e.classList.add("ledChange");
	
	//Presents the value of the midi CC#
	e = document.getElementById(text);
	var val = precise_round(value,2);
	e.innerText = val;
	
	//visualize slider movement.
	var slider = document.getElementById(obj);
	var movement = SLIDER_STEPS * val;
	movement = SLIDER_MIN - movement;
	movement = precise_round(movement,0);
	slider.style.top = movement+"px";
}
//This sets the touchbased interations led display.

function precise_round(num,decimals)
{
	return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}


$(function() {
	var dragableFaders = ["#s80","#s81","#s82","#s83","#s87","#s88","#s89","#s90"];
	
	for(var i = 0; i < dragableFaders.length; i++)
	{
	
    	$(dragableFaders[i]).draggable({
    		axis: "y", 
    		containment: "parent",
    		drag:function(event, ui){
    			var led = "";
    			var ledText = "";
    			var currentPosition = ui.position.top - 125;
    			var controlId = this.id.substring(1);
    			//Oh god this i s worse then terrible! will fix soon
				if(controlId == 80){led = "led1"; ledText = "led-text1";}
				else if(controlId == 81){led = "led2"; ledText = "led-text2";}
				else if(controlId == 82){led = "led3"; ledText = "led-text3";}
				else if(controlId == 83){led = "led4"; ledText = "led-text4";}
				else if(controlId == 87){led = "led5"; ledText = "led-text5";}
				else if(controlId == 88){led = "led6"; ledText = "led-text6";}
				else if(controlId == 89){led = "led7"; ledText = "led-text7";}
				else if(controlId == 90){led = "led8"; ledText = "led-text8";}
	    		
	    		//Changes colour of the display.
				var e = document.getElementById(led);
				e.classList.add("ledChange");
				
				
				e = document.getElementById(ledText);
				//this is terrible but will fix it when i got time for it.
				/*
				 * For some stupid reason I get negatives when i do this normalization what is it that I'm missing??====
				 */
				var num = currentPosition / 120;
				var val = Math.round(num*Math.pow(10,2))/Math.pow(10,2);
				e.innerText = val;
	    		
    		},
    	});
   	}
});