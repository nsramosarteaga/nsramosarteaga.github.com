import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-titulo");
let sliderSubTitle = document.querySelector("#slider-subtitulo");
let sliderImage = document.querySelector("#slider-image");

let slider = new Slider({
  elements :[
    {
      title:'Lorem Ipsum',
      subtitle:'Ipsum',
      image:'../public/images/5.jpg',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title:'Lorem Ipsum 2',
      subtitle:'Ipsum 2',
      image:'../public/images/11.jpg',
      text:'2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title:'Lorem Ipsum 3',
      subtitle:'Ipsum 3',
      image:'../public/images/10.jpg',
      text:'3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ],
  animationFunc: function(element){
    sliderTitle.innerHTML =element.title;
    sliderSubTitle.innerHTML = element.subtitle;
    sliderText.innerHTML = element.text;
    sliderImage.src = element.image;
  },
  speed: 3000
});

slider.play();
