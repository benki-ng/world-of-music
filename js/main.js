$('.carousel.carousel-slider').carousel({fullWidth: true});



//homepage interactive audio

var totalplaying = 0
var voiceplaying = false

function play(file){
  console.log(file)
  var audio = new Audio(file)
  audio.play();
  totalplaying += 1
  audio.addEventListener("pause",function(){
    totalplaying -= 1
    console.log('finished')
  })
  // if all instruments playing
  if (totalplaying > 2) {
    console.log("all")
    if (voiceplaying == false) {
      var audio = new Audio("assets/singing.wav")
      voiceplaying = true
      audio.play();
      audio.addEventListener("pause",function(){
        voiceplaying = false
        console.log('finished voice')
      })
    }
  }
}
