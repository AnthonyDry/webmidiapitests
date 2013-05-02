function midiMessageReceived( ev ) {
  var cmd = ev.data[0] >> 4;
  var channel = ev.data[0] & 0xf;
  var noteNumber = ev.data[1];
  var velocity = ev.data[2];
  if ( cmd==8 || ((cmd==9)&&(velocity==0)) ) { // with MIDI, note on with velocity zero is the same as note off
    // note off
    noteOff( noteNumber );
    //control display
    DisplayInControl(8,null);
  } else if (cmd == 9) {
    // note on
    noteOn( noteNumber, velocity/127.0);
    DisplayInControl(9,noteNumber);
  } else if (cmd == 11) {
    controller( noteNumber, velocity/127.0);
    DisplayInControl(11,noteNumber);
  } else if (cmd == 14) {
    // pitch wheel (NOT USED IN THIS EXAMPLE)
    //pitchWheel( ((velocity * 128.0 + noteNumber)-8192)/8192.0 );
  }
}

var selectMIDI = null;
var selectMIDIOut = null;
var midiAccess = null;
var midiIn = null;
var midiOut = null;

function changeMIDIPort() {
  var list=midiAccess.getInputs();
  midiIn = midiAccess.getInput( list[ selectMIDI.selectedIndex ] );
  midiIn.onmessage = midiMessageReceived;
}
function changeMIDIOut( ev ) {
  var list=midiAccess.getOutputs();
  var selectedIndex = ev.target.selectedIndex;

  if (list.length >= selectedIndex) {
    midiOut = midiAccess.getOutput( list[selectedIndex] );
  }
}

function selectMIDIIn( ev ) {
  var list=midiAccess.getInputs();
  var selectedIndex = ev.target.selectedIndex;

  if (list.length >= selectedIndex) {
    midiIn = midiAccess.getInput( list[selectedIndex] );
    midiIn.onmessage = midiMessageReceived;
  }
}

function onMIDIStarted( midi ) {
  midiAccess = midi;

  //document.getElementById("synthbox").className = "loaded";

  selectMIDI=document.getElementById("midiIn");
  selectMIDIOut=document.getElementById("midiOut");
  
  var list=midiAccess.getInputs();

  // clear the MIDI input select
  selectMIDI.options.length = 0;

  if (list.length) {
    for (var i=0; i<list.length; i++) {
      selectMIDI.options[i]=new Option(list[i].name,list[i].fingerprint,i==0,i==0);
    }
    midiIn = midiAccess.getInput( list[0] );
    midiIn.onmessage = midiMessageReceived;

    selectMIDI.onchange = selectMIDIIn;
  }
  
  // clear the MIDI output select
  selectMIDIOut.options.length = 0;
  preferredIndex = 0;
  list=midi.getOutputs();

  if (list.length) {
    for (var i=0; i<list.length; i++)
      selectMIDIOut.options[i]=new Option(list[i].name,list[i].fingerprint,i==preferredIndex,i==preferredIndex);

    midiOut = midiAccess.getOutput( list[preferredIndex] );
    selectMIDIOut.onchange = changeMIDIOut;
  }
}

function onMIDISystemError( msg ) {
  //document.getElementById("synthbox").className = "error";
  console.log( "Error encountered:" + msg );
}
//init: start up MIDI
window.addEventListener('load', function() {   
  navigator.requestMIDIAccess( onMIDIStarted, onMIDISystemError );

});