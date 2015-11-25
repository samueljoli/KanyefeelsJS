var images = [
  'images/download.png', // 1
  'images/tumblr.png', //2
  'images/yeezycopy.png', //3
  'images/kanye(2)copy.png', //4
  'images/kanye(3)bw.png', //5
  'images/kanye(4)bw.png', //6
  // 'images/kanye(5)bw.png',  //7
  // 'images/kanye(6)bw.gif', //8
  // 'images/kanye(8).png', //9
  // 'images/kanye(8)bw.png', //10
  // 'images/kanye(9)bw.png', //11
  // 'images/kanye(10)bw.png', //12
  // 'images/kanye(11)bw.png', //13
  // 'images/kanye(12)bw.png', //14
  // 'images/kanye(14)bw.png', //15
  // 'images/kanye1.png', //16
];

var quotes = [
  "Kanye is lowkey but highkey mad.", // 1
  'Kanye is proud of you but still thinking how he could do better.', //2
  "Kanye thinks you're sus.", //3
  "Kanye is genuinely flustered.", //4
  'Kanye is not amused at all.', //5
  'Kanye is trying to figure out where the fucks he gave went.', //6
  'Kanye is mad ecstatic for life!', //7
  'Kanye is giving a half-hearted applause.', //8
  'Kanye is pleasantly surprised.', //9
  'Kanye is incredibly irritated for being misunderstood.', //10
  'Kanye is mildly astounded.', //11
  'Kanye is deep in thought.', //12
  'Kanye is real annoyed.', //13
  'Kanye is very confused.', //14
  "Kanye just received Kim's fire booty pic.", //15
  'Kanye uses an invisible cloaking device to hide from his haters.', //16


];

var colors= [
   '#fa8072', // 1
   '#ffa500', // 2
   '#8fbc8f', // 3
   '#c71585', // 4
   '#5f9ea0', // 5
   '#595959', // 6
   '#ffcca3', // 7
   '#ba8ce3', // 8
   '#f08a6b', // 9
   '#264000', // 10
   '#40738C', // 11
   '#778899', // 12
   '#800000', // 13
   '#f08080', // 14
   '#00fa9a', // 15
   '#00366B', // 16
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
  specialImage(rand);
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

function specialImage(num){
  console.log(num)
  if (num === 10) {
    $('.picture').addClass("specialpicture10")
  } else {
    $('.picture').removeClass("specialpicture10")
  }

  if (num === 3) {
    $('.picture').addClass("specialpicture2")
  } else {
    $('.picture').removeClass("specialpicture2")
  }

  if (num === 5) {
    $('.picture').addClass("specialpicture4")
  } else {
    $('.picture').removeClass("specialpicture4")
  }
}
