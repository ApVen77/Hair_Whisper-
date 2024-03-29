// function onSubmit() {
//     let x= document.forms["review"]
//     ["texted"].value;
//     if (x == "") {
//         alert("Please enter a review")
//     } else {
//         x.innerHtml=""
//     }
// }

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

//Reviews
console.log("hello world");
let focusedElementBeforeModal;
var modal = document.getElementById("modal");
var modalOverlay = document.querySelector(".modal-overlay");

window.onload = () => {
  var addReview = document.getElementById("review-add-btn");
  addReview.id = "review-add-btn";
  addReview.innerHTML = "+";
  addReview.setAttribute("aria-label", "add review");
  addReview.title = "Add Review";
  addReview.addEventListener("click", openModal);
  // addReview.click();
};

var openModal = () => {
  // Save current focus
  focusedElementBeforeModal = document.activeElement;

  // Listen for and trap the keyboard
  modal.addEventListener("keydown", trapTabKey);

  // Listen for indicators to close the modal
  modalOverlay.addEventListener("click", closeModal);
  // Close btn
  var closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModal);

  // submit form
  var form = document.getElementById("review-form");
  form.addEventListener("submit", submitAddReview, true);

  // Find all focusable children
  var focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var focusableElements = modal.querySelectorAll(focusableElementsString);
  // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];

  // Show the modal and overlay
  modal.classList.add("show");
  modalOverlay.classList.add("show");

  // Focus first child
  // firstTabStop.focus();
  var reviewName = document.getElementById("reviewName");
  reviewName.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode === 9) {
      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

        // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  }
};

var submitAddReview = (e) => {
  // console.log(e);
  console.log("Form subbmitted!");
  e.preventDefault();
  closeModal();
};

var closeModal = () => {
  // Hide the modal and overlay
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");

  var form = document.getElementById("review-form");
  form.reset();
  // Set focus back to element that had it before the modal was opened
  focusedElementBeforeModal.focus();
};

var setFocus = (evt) => {
  var rateRadios = document.getElementsByName("rate");
  var rateRadiosArr = Array.from(rateRadios);
  var anyChecked = rateRadiosArr.some((radio) => {
    return radio.checked === true;
  });
  // console.log('anyChecked', anyChecked);
  if (!anyChecked) {
    var star1 = document.getElementById("star1");
    star1.focus();
    // star1.checked = true;
  }
};

var navRadioGroup = (evt) => {
  // console.log('key', evt.key, 'code', evt.code, 'which', evt.which);
  // console.log(evt);

  var star1 = document.getElementById("star1");
  var star2 = document.getElementById("star2");
  var star3 = document.getElementById("star3");
  var star4 = document.getElementById("star4");
  var star5 = document.getElementById("star5");

  if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(evt.key)) {
    evt.preventDefault();
    // console.log('attempting return');
    if (evt.key === "ArrowRight" || evt.key === "ArrowDown") {
      switch (evt.target.id) {
        case "star1":
          star2.focus();
          star2.checked = true;
          break;
        case "star2":
          star3.focus();
          star3.checked = true;
          break;
        case "star3":
          star4.focus();
          star4.checked = true;
          break;
        case "star4":
          star5.focus();
          star5.checked = true;
          break;
        case "star5":
          star1.focus();
          star1.checked = true;
          break;
      }
    } else if (evt.key === "ArrowLeft" || evt.key === "ArrowUp") {
      switch (evt.target.id) {
        case "star1":
          star5.focus();
          star5.checked = true;
          break;
        case "star2":
          star1.focus();
          star1.checked = true;
          break;
        case "star3":
          star2.focus();
          star2.checked = true;
          break;
        case "star4":
          star3.focus();
          star3.checked = true;
          break;
        case "star5":
          star4.focus();
          star4.checked = true;
          break;
      }
    }
  }
};

function myfunction() {
  alert("Your Message has been Sent!");
  window.location.href = "mailto:lzzrushing@gmail.com";
}

function phone() {
  var place = document.getElementById("demo");

  place.innerHTML = "tel: 720 709 8281";
}

const arrayCarousel = [
  "'Lizzie is very knowledgeable'",
  "'Don't be embarrassed around her'",
  "'She is extremely empathetic and compassionate'",
  "'Lizzie's experience shines through in the work'",
  "'Just go see her ASAP'",
  "'Lizzie's knows what's up.'",
];
counter = 0;

function setText() {
  document.getElementById("ss-review").innerHTML = arrayCarousel[counter];

  counter = (counter + 1) % arrayCarousel.length;
}
setInterval(setText, 3000);
clearInterval(setText);
