function fetchActivity() {
    let url = "http://localhost:8080/api/get-activity/";
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    url = url + id;
    const prom = fetch(url).then(data => data.json());
    prom.then(json => displayActivity(json));
}

function displayActivity(activity) {
    document.getElementById("age-limit").innerHTML = "age-limit: " + activity.ageLimit;
    document.getElementById("capacity").innerHTML = "capacity: " + activity.userCapacity;
    document.getElementById("activity-description").innerHTML = "description: " + activity.description;
    document.getElementById("activity-name").innerHTML = activity.name;
}