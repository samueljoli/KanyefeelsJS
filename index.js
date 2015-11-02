var images = [
  'images/download.png',
  'images/tumblr.png',
  'images/yeezycopy.png'
];

var quotes = [
  'My greatest pain in life is that I will never be able to see myself perform live.',
  "George Bush doesn't care about black people.",
  'Nothing in life is promised except death.'
];

var pic = document.getElementsByClassName('picture')[0];
var para = document.getElementsByClassName('quote')[0];


setImage();
// setQuote();

pic.addEventListener('click',function(){
  setImage();
  // setQuote();
});



function setImage() {
  pic.src = getRandomImage();
}

function getRandomImage() {
  var notFound = true;
  var rand;
  var v = pic.src.split('/');
  var current = v[v.length-1];
  while(notFound) {
    rand = Math.round(Math.random()*(images.length-1));
    if (images[rand] != current) {
      notFound = false;
    }
  }
  setQuote(rand);
  return images[rand];
}
function setQuote(rand) {
  para.innerText = getRandomQuote(rand);
}

function getRandomQuote(rand) {
  // var notFound = true;
  // var rand;
  // var current = para.innerText;
  // while(notFound) {
  //   rand = Math.round(Math.random()*(quotes.length-1));
  //   if (quotes[rand] != current) {
  //     notFound = false;
  //   }
  // }
  return quotes[rand];
}