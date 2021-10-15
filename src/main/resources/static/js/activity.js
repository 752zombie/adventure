let currentActivity;

function fetchActivity() {
    let url = "http://localhost:8080/api/get-activity/";
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    url = url + id;
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {currentActivity = json; displayActivity()});
}

function displayActivity() {
    document.getElementById("age-limit").innerHTML = "age-limit: " + currentActivity.ageLimit;
    document.getElementById("capacity").innerHTML = "capacity: " + currentActivity.userCapacity;
    document.getElementById("activity-description").innerHTML = "description: " + currentActivity.description;
    document.getElementById("activity-name").innerHTML = currentActivity.name;
}

function editActivity() {
    document.getElementById("edit-fields").style.display = "block";
    document.getElementById("show-activity").style.display = "none";
    document.getElementById("activity-name-input").value = currentActivity.name;
}

function saveActivity() {
    let saveActivityRequest = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: currentActivity
    }

    let url = "http://localhost:8080/api/save-activity";

    currentActivity.name = document.getElementById("activity-name-input").value;
    saveActivityRequest.body = JSON.stringify(currentActivity);

    fetch(url, saveActivityRequest).then(data => displayActivity());



    document.getElementById("edit-fields").style.display = "none";
    document.getElementById("show-activity").style.display = "block";
}
