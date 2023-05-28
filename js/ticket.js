const bookingsBtn = document.getElementById("bookings");
const reservationsBtn = document.getElementById("reservations");
const reservationFields = document.getElementById("ticket-fields");
const bookingsFields = document.getElementById("booking-fields");
const ticketBtns = document.getElementById("ticket-buttons");
const submitBtn = document.getElementById("form-submit");
const ticketDiv = document.getElementById("paper");
loading.style.display="none"

function calculatePrice() {
  const destination = document.getElementById("destination").value;
  const locatioN = document.getElementById("location").value;
  const adult = document.getElementById("adult").value;
  const child = document.getElementById("child").value;
  const date = document.getElementById("datepicker").value;
  loading.style.display = "flex"
  let price;
  if (destination === "Mars") {
    price = 9865 * adult + 15000 * child;
  } else if (destination === "The Moon") {
    price = 5000 * adult + 10000 * child;
  } else if (destination === "Venus") {
    price = 5000 * adult + 10000 * child;
  }
  // Generate ticket for the trip
  generateTicket = () => {
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
  
    <div class="buttons"><button onclick="downloadTicket()">Download Ticket</button> <button onclick="addToBookings()">Add to Bookings</button></div>
    </div>
        </div>
    `;

    const ticketPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    ticketPromise.then(() => {
 
      loading.style.display="none"
      ticketDiv.appendChild(ticket);

    });


  };
  generateTicket()
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
      // Animate the display of bookings
      reservationFields.style.marginLeft = "-3000px";
      bookingsFields.style.display = "flex";
      bookingsFields.style.marginRight = "0";
      ticketBtns.style.paddingTop = "25px";
    });
  }
  reservationsBtn.addEventListener("click", (e) => {
     // Animate the display of reservtions
    bookingsFields.style.display = "none";
    reservationFields.style.marginLeft = "0px";
    ticketBtns.style.paddingTop = "0px";
  });
  
  function addToBookings() {
    // Add ticket details to bookings
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