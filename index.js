// Each image, quote, and color is binded together by the their placement within the array

var images = [
  'images/download.png', // 1
  'images/tumblr.png', //2
  'images/yeezycopy.png', //3
  'images/kanye(2)copy.png', //4
  'images/kanye(3)bw.png', //5
  'images/kanye(4)bw.png', //6
  'images/kanye(5)bw.png',  //7
  'images/kanye(6)bw.gif', //8
  'images/kanye(8).png', //9
  'images/kanye(8)bw.png', //10
  'images/kanye(9)bw.png', //11
  'images/kanye(10)bw.png', //12
  'images/kanye(11)bw.png', //13
  'images/kanye(12)bw.png', //14
  'images/kanye(14)bw.png', //15
  'images/kanye1.png', //16
];

var quotes = [
  "That's a lowkey but highkey mad Kanye.", // 1
  'Kanye is proud of you but still thinking how he could do better.', //2
  "Kanye thinks you're sus.", //3
  "That's a flustered Kanye.", //4
  'Kanye is not amused at all.', //5
  'Kanye is trying to figure out where the fucks he gave went.', //6
  'Kanye is mad ecstatic for life!', //7
  'This is Kanye acknowledging performances with a half-hearted applause.', //8
  'You caught Kanye plesantly surprised.', //9
  'Kanye is incredibly irritated for being misunderstood.', //10
  'Kanye is mildly astounded.', //11
  'Kanye is deep in thought.', //12
  'Kanye is real annoyed.', //13
  'Kanye is very confused.', //14
  "This is Kanye when he receives Kim's fire booty pic.", //15
  'Kanye uses an invisible cloaking device to hide from his haters.', //16


];

var colors= [
   '#fdd10c', // 1
   '#fdd10c', // 2
   '#fdd10c', // 3
   '#fdd10c', // 4
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
  changeColor(rand);
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

function changeColor(rand) {
  document.body.style["background-color"] = colors[rand];
}