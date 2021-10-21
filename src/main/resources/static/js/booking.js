function fetchBooking() {
    let url = "http://localhost:8080/api/get-booking/";
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    url = url + id;
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {json; displayBooking()});
}

function createBooking() {
    document.getElementById("create-booking").style.display = "block";

}

function saveBooking() {
    document.getElementById("create-booking").style.display = "none";

            //skal activity_name hentes  eller intastes som resten ?
            //booking number bør blive generet automatisk

         var activity_name = document.getElementById("activity_name").value;
         var instructor = document.getElementById("instructor").value;
         var datepicker = document.getElementById("datepicker").value;
         var time = document.getElementById("time").value;
         var participants = document.getElementById("participants").value;
         var name = document.getElementById("name").value;
         var lastName = document.getElementById("lastName").value;
         var save_user_input = confirm('Save booking');

         if (save_user_input == null) {
         alert("cancelled");
         }
         else {
        const data = JSON.stringify({
          activity_name: activity_name,
          instructor: instructor,
          datepicker: datepicker,
          time: time,
          participants: participants,
          name: name,
          lastName:lastName,
        })

        const xhr = new XMLHttpRequest()
        xhr.withCredentials = true

        xhr.addEventListener('readystatechange', function() {
          if (this.readyState === this.DONE) {
            console.log(this.responseText)
          }
        })

        xhr.open('POST', '/booking')
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(data)
        alert(save_user_input + " booking saved!");


         }
        }


function displayBooking() {

    document.getElementById("activity_name").innerHTML = "Activity name: " + booking.activity_name != null ? booking.activity_name : "Not specified";
    document.getElementById("instructor").innerHTML = "Instructor : " + booking.instructor;
    document.getElementById("datepicker").innerHTML = "Date: " + booking.datepicker;
    document.getElementById("time").innerHTML = "Time: " + booking.time;
    document.getElementById("participants").innerHTML = "Participants: " + booking.participants;
    document.getElementById("name").innerHTML = booking.name;
    document.getElementById("lastName").innerHTML = booking.lastName;
}

