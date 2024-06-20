
  
  
      
const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

ToggleBtnId.addEventListener("click", () => {
navId.classList.add("show");
});


CloseBtnId.addEventListener("click", () => {
navId.classList.remove("show");
});


AOS.init();


gsap.from(".logo", {
opacity: 0,
y: -10,
delay: 1,
duration: 0.5,
});

gsap.from(".nav_menu_list .nav_menu_item", {
opacity: 0,
y: -10,
delay: 1.4,
duration: 0.5,
stagger: 0.3,
});

gsap.from(".toggle_btn", {
opacity: 0,
y: -10,
delay: 1.4,
duration: 0.5,
});

gsap.from(".main-heading", {
opacity: 0,
y: 20,
delay: 2.4,
duration: 1,
});

gsap.from(".info-text", {
opacity: 0,
y: 20,
delay: 2.8,
duration: 1,
});

gsap.from(".btn_wrapper", {
opacity: 0,
y: 20,
delay: 2.8,
duration: 1,
});

gsap.from(".team_img_wrapper img", {
opacity: 0,
y: 20,
delay: 3,
duration: 1,
});




// typing animation

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: [ 'DEVELOPER', 'PROGRAMMER', 'UI DEVELOPER' ],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  };

  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});