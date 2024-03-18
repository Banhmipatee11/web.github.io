// Biểu mẫu địa chỉ
const adressbtn = document.querySelector('#adress-form');
const adressclose = document.querySelector('#adress-close');

adressbtn.addEventListener("click", function() {
  document.querySelector('.adress-form').style.display = "flex";
});

adressclose.addEventListener("click", function() {
  document.querySelector('.adress-form').style.display = "none";
});

// Slider ảnh
let index = 0;

const rightBtn = document.querySelector('.fa.fa-chevron-right');
const leftBtn = document.querySelector('.fa.fa-chevron-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
rightBtn.addEventListener("click", function(){
  index = index+1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector('.slider-content-left-top').style.right = index *100+"%";
});

leftBtn.addEventListener("click", function(){
    index = index-1;
    if (index <= 0) {
      index = imgNumber.length - 1 ;
    }
  document.querySelector('.slider-content-left-top').style.right = index * 100+"%";
});
//slider----1------
const imgNumberli = document.querySelectorAll('.slider-content-left-bottom li');
let imgactive = document.querySelector ('.active')
imgNumberli.forEach(function(image,index){
    image.addEventListener("click", function(){
      removeactive ()
        document.querySelector('.slider-content-left-top').style.right = index * 100+"%";
        image.classList.add("active")
    });
});
function removeactive (){
  let imgactive = document.querySelector ('.active')
  imgactive.classList.remove("active")
}
