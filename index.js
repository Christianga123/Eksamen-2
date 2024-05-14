console.clear();

const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

let menuOpen = false;

const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.3, ease: "power1.inOut" }
});

tl.fromTo(".menu-icon", { rotation: 0 }, { rotation: 180 }, 0)
  .fromTo(
    ".menu",
    { clipPath: menuUp, visibility: "hidden" },
    { clipPath: menuDown, visibility: "visible" },
    0
  )
  .fromTo(
    ".menu-item",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
  )
  .fromTo(
    ".menu-item2",
    { opacity: 0, y: "0.5em", stagger: 0.1 },
    { opacity: 1, y: "0em", stagger: 0.1 }
  );

document.querySelector(".menu-icon").addEventListener("click", () => {
  if (!menuOpen) {
    tl.play();
    menuOpen = true;
  } else {
    tl.reverse();
    menuOpen = false;
  }
});
function myFunction() {
  var dropdown = document.getElementById("myDropdown1");
  dropdown.classList.toggle("show"); // Toggle the "show" class
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn1')) {
    var myDropdown = document.getElementById("myDropdown1");
    myDropdown.classList.remove('show'); // Remove the "show" class when clicking outside the button
  }
}
 
