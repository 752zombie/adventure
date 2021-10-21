let booking;
function fetchBooking() {
    let url = "http://localhost:8080/api/get-booking/";
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    url = url + id;
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {booking = json; displayBooking()});
}

function createBooking() {
    document.getElementById("create-booking").style.display = "block";

}

function displayBooking() {
    document.getElementById("show-booking").style.display = "block" ;
    document.getElementById("activity_name").innerHTML = "Activity name: " + booking.activity_name;
    document.getElementById("instructor").innerHTML = "Instructor : " + booking.instructor;
    document.getElementById("date").innerHTML = "Date: " + booking.date;
    document.getElementById("time").innerHTML = "Time: " + booking.time;
    document.getElementById("participants").innerHTML = "Participants: " + booking.participants;
    document.getElementById("name").innerHTML = booking.name;
    document.getElementById("lastName").innerHTML = booking.lastName;

    document.getElementById("booking-name").innerHTML = booking.activity_name;
}


