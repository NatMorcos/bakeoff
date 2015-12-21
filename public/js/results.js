// var instruments = [ "agogo", "celesta", "glockenspiel", "electric_bass_pick", "acoustic_grand_piano" ];
// var programNumMappings = {
//   agogo: 113,
//   celesta: 8,
//   glockenspiel: 9,
//   electric_bass_pick: 34,
//   acoustic_grand_piano: 0
// };
// var noteMappings = {
//   agogo: [57, 48, 50, 49, 55],
//   celesta: [53, 44, 46, 45, 51],
//   glockenspiel: [72, 25, 37, 54, 103],
//   electric_bass_pick: [53, 44, 46, 45, 51],
//   acoustic_grand_piano: [57, 48, 50, 49, 55]
// }
// var velocities = {
//     0: 200,
//     1: 200,
//     2: 175,
//     3: 200,
//     4: 80
//   };

// function playSingle(channel, note, velocity, delay){
//   MIDI.noteOn(channel, note, velocity, delay);
// }

// function mapNote(instrumentNumber, noteNumber){
//   return noteMappings[instruments[instrumentNumber]][noteNumber - 1];
// }

//NOISEY TINGZ!!! 
$(document).ready(function(){

  //Socket stuff
  var primus = Primus.connect('http://localhost:8080');
  primus.on('open', function () {
    primus.send('results board join', function(){
      console.log('results board registered');
    });

    primus.on('vote', function(data){
      // use transmitted note
      console.log(data);
      // var vel = data.instrument == 4 ? 103 : 175
      // playSingle(data.instrument, mapNote(data.instrument, data.note), vel, 0);
      
      // do something to update the results board and re-sort, probably
      console.log("%s's votes registered!", data.voter);
    });
  });
});