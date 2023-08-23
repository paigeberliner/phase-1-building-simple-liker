// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll(".like-glyph").forEach(glyph => {
  glyph.addEventListener('click', simpleLiker);
})

function simpleLiker (){
mimicServerCall()
.then(res => {
  document.querySelectorAll(".like-glyph").forEach(glyph => {
    glyph.addEventListener('click', () => {
      glyph.textContent = FULL_HEART;
    });
    document.querySelectorAll(".like-glyph").forEach(glyph => {
      glyph.addEventListener('click', () => {
        if (glyph.classList.contains("activated-heart")) {
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
      } else {
      glyph.textContent = FULL_HEART;
      glyph.classList.add("activated-heart");
         }
      });
    });
  });
})

.catch(function(error){
  console.log(error)
  let errorElement = document.querySelector("#modal");
  errorElement.classList.remove("hidden")
  setTimeout(function() { 
  errorElement.classList.add("hidden")
  }, 3000)
  document.querySelector('#modal-message').innerHTML=error
});
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
