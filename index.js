window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle('sticky', window.scrollY > 0)
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

function openLinkInNewTab(urlToOpen) {
  window.open(urlToOpen, '_blank');
}

var facebookLink = document.getElementById('mypicture');
facebookLink.addEventListener('click', function() {
  openLinkInNewTab('https://www.github.com/chivss');
});

var facebookLink = document.getElementById('facebook-link');
facebookLink.addEventListener('click', function() {
  openLinkInNewTab('https://www.facebook.com/Chivsspogi');
});

var instagramLink = document.getElementById('instagram-link');
instagramLink.addEventListener('click', function() {
  openLinkInNewTab('https://www.instagram.com/leiiammm/');
});

var spotifyLink = document.getElementById('linktree-link');
spotifyLink.addEventListener('click', function() {
  openLinkInNewTab('https://www.linktree.com/chivss');
});

const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.content');

contents[0].classList.add('active');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.classList.remove('active'));
        
        contents[index].classList.add('active');
    });
});


