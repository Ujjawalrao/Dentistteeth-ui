formOpenAndClose();
let timeLine = gsap.timeline();

timeLine.from('#navbar',{
  y:-100,
  duration:1,
  delay:.2
})
timeLine.from('#hero-bnt',{
  opacity:0,
  duration:.2,
})
timeLine.from('.hero #imgDiv',{
  y:1000,
  opacity:0,
  duration:1,
  scale:.5
})
timeLine.from('.hero h1',{
  scale:.4,
  opacity:0,
  duration:.5,
})
// 
// -------------------
function formOpenAndClose(params) {
  const signIn = document.querySelectorAll('.sign-in');
  const x = document.querySelector('.x');
  var formm = document.querySelector('.formm')


// FORM sing Or Out -------------
function singOrOut(params) {
  // form open -----------------
signIn.forEach( (s,i) => {
  s.addEventListener('click', () => {
      // console.log('click');
      formm.style.display = "block"
  })
})

// form close-----------------
x.addEventListener('click', () => {
  formm.style.display = "none"
})
};
singOrOut();
};
formOpenAndClose();

// -----------------------------------------
function smoothScrolling(params) {
    // Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    // console.log(e);
  });
    
}
smoothScrolling();
