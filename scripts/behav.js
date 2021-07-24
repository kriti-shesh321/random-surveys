const ansArray = [];

//anime-survey question control

var slideIndex = 1;
showSlides(slideIndex);

//next button control
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("question-container");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  if (n == slides.length) {
    document.getElementsByClassName('next').disabled = true;
  }
}


//storing answers in an array
//ansArray to be posted to the backend

function addAnswer(answer) {
  if (ansArray.length > 0) {
    let temp = ansArray[(ansArray.length) - 1];

    if (temp.quesId != answer.quesId) {
      ansArray.push(answer);
    }
    else {
      ansArray.pop();
      ansArray.push(answer);
    }
  }
  else {
    ansArray.push(answer);
  }
  console.log(ansArray);
}

//redirect msg after submitting

function submitMsg()
{
      alert('you have successfully completed the survey');
      window.location.href='default.aspx';
}
