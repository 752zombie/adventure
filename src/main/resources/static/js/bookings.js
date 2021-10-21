let bookings;
function fetchBookings() {
    const url = "http://localhost:8080/api/get-bookings";
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {bookings = json; displayBookings()});
}

function displayBookings() {
    for (let booking of bookings) {

        let col = document.createElement("div");
        col.setAttribute("class", "col-sm-4");

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let activityName = document.createElement("h4");
        let activityNameText = document.createTextNode(booking.activity_name);
        activityName.setAttribute("class", "card-title");
        activityName.appendChild(activityNameText);

        let instructor = document.createElement("p");
        let instructorText = document.createTextNode(booking.instructor);
        instructor.setAttribute("class", "card-text");
        instructor.appendChild(instructorText);

        let date = document.createElement("p");
        let dateText = document.createTextNode(booking.date);
        date.setAttribute("class", "card-text");
        date.appendChild(dateText);


        let time = document.createElement("p");
        let timeText = document.createTextNode(booking.time);
        time.setAttribute("class", "card-text");
        time.appendChild(timeText);

        let participants = document.createElement("p");
        let participantsText = document.createTextNode(booking.participants);
        participants.setAttribute("class", "card-text");
        participants.appendChild(participantsText);

        let name = document.createElement("p");
        let nameText = document.createTextNode(booking.name);
        name.setAttribute("class", "card-text");
        name.appendChild(nameText);

        let lastName = document.createElement("p");
        let lastNameText = document.createTextNode(booking.lastName);
        lastName.setAttribute("class", "card-text");
        lastName.appendChild(lastNameText);

        let button = document.createElement("a");
        button.setAttribute("href", "http://localhost:8080/booking/" + booking.booking_no);
        button.setAttribute("class", "btn btn-primary");
        let buttonText = document.createTextNode("Get Booking ");
        button.appendChild(buttonText);


        document.getElementById("bookings-container").appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(activityName);
        cardBody.appendChild(instructor);
        cardBody.appendChild(date);
        cardBody.appendChild(time);
        cardBody.appendChild(participants);
        cardBody.appendChild(name);
        cardBody.appendChild(lastName);
        cardBody.appendChild(button);
    }
}

function saveBooking() {
    document.getElementById("create-booking").style.display = "none";

    //skal activity_name hentes  eller intastes som resten ?
    //booking number bør blive generet automatisk

    var activity_name = document.getElementById("activity_name").value;
    var instructor = document.getElementById("instructor").value;
    var date = document.getElementById("date").value;
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
            date: date,
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
        refresh();

    }
}

function refresh() {
    document.getElementById("bookings-container").innerHTML = "";
    fetchBookings();
}