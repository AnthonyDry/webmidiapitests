/**
 * @author Anthony Dry
 */

$(function() {
	//Initializing the mouse functions for the faders.
	var dragableFaders = ["#s80","#s81","#s82","#s83","#s87","#s88","#s89","#s90"];
	for(var i = 0; i < dragableFaders.length; i++)
	{
    	$(dragableFaders[i]).draggable({
    		axis: "y", 
    		containment: "parent",
    		drag:function(event, ui){
    			var led = "";
    			var ledText = "";
    			var currentPosition = ui.position.top;
    			var currentPosition = 125 - currentPosition;
    			var controlId = this.id.substring(1);
    			//Oh god this i s worse then terrible! will fix it soon
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
				
				var num = currentPosition / 120;
				var val = Math.round(num*Math.pow(10,2))/Math.pow(10,2);
				e.innerText = val;
				
				//Removes normalization of the input value. note: 127 is the max value in MIDI.
	    		var MidiVal =  parseInt(val * 127);
	    		
	    		//This sends the specific type of controll, with CC and with what value. syntax output.send([Type,CC,Value]); 
	    		midiOut.send([0xB0, controlId, MidiVal]);
	    		
    		},
    	});
   	}
   	//initializing the mouse functions for the keys.
   	for(var i = 48; i <= 84; i++){
   		(function (i){
	   		$('#k'+i).mousedown(function()
	   		{
	   			
	   			this.classList.add("pressed");
	    		midiOut.send([0x90, i, 0x7f]);
	    		
			}).bind('mouseup mouseleave', function()
			{
				this.classList.remove("pressed");
	    		midiOut.send([0x80, i, 0x40]);
			});
		})(i);
   	}
   	
   
   	//initalizing Knobs
   	var dragableKnobs = ["#knb16","#knb17","#knb18","#knb19","#knb48","#knb49","#knb50","#knb51"];
   	
   	for(var i = 0; i < dragableKnobs.length; i++)
   	{
		var div = $(dragableKnobs[i]);
		var rotation = 0; 
		var isDragging = false;
		div.mousedown(function(event) {
		    isDragging = true;
		    lastY = event.clientY;
		}).bind('mouseup mouseleave', function(){
		    isDragging = false;
		}).mousemove(function(event) {
		    if (isDragging) {
		       
		        var curY = event.clientY;   
		        console.log(rotation);
		        
		        if(curY > lastY && rotation > 0)
		        {
		        	rotation--;
		        }
		        else if(curY < lastY && rotation < 127)
		        {
		        	rotation++;
		        }
		        
		        var MidiNorm = rotation / 127;
		        var normValue = MidiNorm * 360;
		        
		        var controlId = this.id.substring(3);
	    			//Oh god this i s worse then terrible! will fix it soon
					if(controlId == 16){led = "led1"; ledText = "led-text1";}
					else if(controlId == 17){led = "led2"; ledText = "led-text2";}
					else if(controlId == 18){led = "led3"; ledText = "led-text3";}
					else if(controlId == 19){led = "led4"; ledText = "led-text4";}
					else if(controlId == 48){led = "led5"; ledText = "led-text5";}
					else if(controlId == 49){led = "led6"; ledText = "led-text6";}
					else if(controlId == 50){led = "led7"; ledText = "led-text7";}
					else if(controlId == 51){led = "led8"; ledText = "led-text8";}
		    		
		    		//Changes colour of the display.
					var e = document.getElementById(led);
					e.classList.remove("ledChange");
					
					
					e = document.getElementById(ledText);
					var val = Math.round(MidiNorm*Math.pow(10,2))/Math.pow(10,2);
					e.innerText = val;
		        
			    var rotateCSS = 'rotate(' + normValue + 'deg)';
			    $(this).css({'-webkit-transform': rotateCSS});
			    midiOut.send([0xB0, controlId, rotation]);  
		       	
		        lastY = curY;
		    }
		})
	}
});