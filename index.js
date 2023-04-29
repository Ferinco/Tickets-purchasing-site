const submitBtn = document.getElementById("form-submit");
const mobileBar = document.getElementById("mobile");
const navbar = document.getElementById("mobile-navbar");
const cancelBar = document.getElementById("mobile-cancel");
const bookingsBtn = document.getElementById("bookings");
const reservationsBtn = document.getElementById("reservations");
const reservationFields = document.getElementById("ticket-fields");
const bookingsFields = document.getElementById("booking-fields");
const ticketBtns = document.getElementById("ticket-buttons");



function calculatePrice() {
  const destination = document.getElementById("destination").value;
  const locatioN = document.getElementById("location").value;
  const adult = document.getElementById("adult").value;
  const child = document.getElementById("child").value;
  const date = document.getElementById("datepicker").value;
  let price;
  if (destination === "Mars") {
    price = 9865 * adult + 15000 * child;
  } else if (destination === "The Moon") {
    price = 5000 * adult + 10000 * child;
  } else if (destination === "Venus") {
    price = 5000 * adult + 10000 * child;
  }
  const ticket = document.createElement("div");
  ticket.innerHTML = `<div id="ticket">
<div class="ticket-header">
<h2>Demo Ticket</h2>
<button onclick="cancelTicket()" class="fa fa-times"></button>
</div>
<div class="ticket-body">
<p>Current location: ${locatioN}</p>
<p>Proposed destination: ${destination}</p>
<p>Number of adult(s): ${adult}</p>
<p>Number of child(ren): ${child}</p>
<p>price: $${price}</p>
<p>Proposed date: ${date}</p>
</div>
    <div class="ticket-end">
    // <p>Add demo ticket to bookings to see details later.</p>
    <div class="buttons"><button onclick="downloadTicket()">Download Ticket</button> <button onclick="addToBookings()">Add to Bookings</button></div>
    </div>
        </div>
    `;
  const ticketDiv = document.getElementById("paper");
  ticketDiv.appendChild(ticket);
}
function cancelTicket() {
  // Remove the ticket from the page
  const ticketDiv = document.getElementById("paper");
  ticketDiv.parentNode.removeChild(ticketDiv);

  // Show the form and hide the ticket
  document.getElementById("ticket-form").style.display = "flex";
}

function bookingCheck() {
  bookingsBtn.addEventListener("click", (e) => {
    // animate the display of reservtion and bookings
    reservationFields.style.marginLeft = "-3000px";
    bookingsFields.style.display = "flex";
    bookingsFields.style.marginRight = "0";
    ticketBtns.style.paddingTop = "25px";
  });
}
reservationsBtn.addEventListener("click", (e) => {
  bookingsFields.style.display = "none";
  reservationFields.style.marginLeft = "0px";
  ticketBtns.style.paddingTop = "0px";
});

function addToBookings() {
  const destination = document.getElementById("destination").value;
  const locatioN = document.getElementById("location").value;
  const adult = document.getElementById("adult").value;
  const child = document.getElementById("child").value;
  const date = document.getElementById("datepicker").value;
  let price;
  if (destination == "Mars") {
    price = 9865 * adult + 15000 * child;
  } else if (destination == "The Moon") {
    price = 5000 * adult + 10000 * child;
  } else if (destination == "Venus") {
    price = 5000 * adult + 10000 * child;
  }
  const reservation = document.createElement("div");
  reservation.innerHTML = `
    <div id="first-reservation">
    <div id="content">
    <p>Reservations: Pending (until verification and purchase of ticket)</p>
    <p>Ticket Price: $${price}</p>
    </div>
    <div id="reservation-removal">
    <button onclick="removeReservation()">remove booking</button></div>
    </div>
    `;
  const firstReservation = document.getElementById("bookings-1");
  firstReservation.appendChild(reservation);
  cancelTicket();
  alert("click on bookings check to check for details");
  document.getElementById("bookings-2").style.display = "none";
}

submitBtn.addEventListener("click", (e) => {
  document.getElementById("ticket-form").style.display = "none";
});

function removeReservation() {
  document.getElementById("bookings-1").style.display = "none";
  document.getElementById("bookings-2").style.display = "flex";
}

window.onload = function () {
  const defaultPlanetInfo = document.querySelector("#mars-info");
  defaultPlanetInfo.style.display = "flex";
  document.getElementById("venus-info").style.display = "none";
  document.getElementById("earth-info").style.display = "none";
  document.getElementById("moon-info").style.display = "none";
};
function showPlanet(planet) {
  var planetInfos = document.querySelectorAll(".planet-info > div");
  for (var i = 0; i < planetInfos.length; i++) {
    planetInfos[i].style.display = "none";
  }

  var planetInfo = document.querySelector("#" + planet + "-info");
  planetInfo.style.display = "flex";

  var activeButton = document.querySelector(".active");
  activeButton.classList.remove("active");
  var selectedButton = document.querySelector("#" + planet + "-btn");
  selectedButton.classList.add("active");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  // var activeNav =document.querySelector(".active")
  navLink.addEventListener("click", (e) => {
    if (navLink.classList.contains(".active")) {
      navLink.classList.remove(".active");
    }
    else {
      navLink.classList.add(".active");
    }
  });
});

mobileBar.addEventListener("click", (e) => {
  navbar.classList.add("wait");
  navbar.style.marginRight = "250px";
});
cancelBar.addEventListener("click", (e) => {
  navbar.style.marginRight = "-300px";
});




AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
AOS.init({
  easing: "ease-out-back",
  duration: 800,
  delay: 300,
  once: true,
  disable: "mobile",
});


//  document.querySelector(".about-body-images").style.marginleft = "-20000px";
