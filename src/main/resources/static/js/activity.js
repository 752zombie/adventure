let currentActivity;
let nextEquipmentId = 1;
let equipmentMap;

function fetchActivity() {
    let url = "http://localhost:8080/api/get-activity/";
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    url = url + id;
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {currentActivity = json; displayActivity()});
}

function displayActivity() {
    copySetToMap();
    document.getElementById("edit-fields").style.display = "none";
    document.getElementById("show-activity").style.display = "block";
    document.getElementById("age-limit").innerHTML = "age-limit: " + currentActivity.ageLimit;
    document.getElementById("capacity").innerHTML = "capacity: " + currentActivity.userCapacity;
    document.getElementById("activity-description").innerHTML = "description: " + currentActivity.description;
    document.getElementById("activity-name").innerHTML = currentActivity.name;
}

function copySetToMap() {
    equipmentMap = new Map();
    for (let equipment of currentActivity.equipment) {
        equipmentMap.set("" + nextEquipmentId, equipment);
        nextEquipmentId++;
    }
}

function editActivity() {


    document.getElementById("edit-fields").style.display = "block";
    document.getElementById("show-activity").style.display = "none";

    generateEquipmentBoxes();

    document.getElementById("activity-name-input").value = currentActivity.name;
}

function generateEquipmentBoxes() {
    let container = document.createElement("div");
    container.setAttribute("id", "equipment-container");
    document.getElementById("edit-fields").appendChild(container);

    for (let [id, equipment] of equipmentMap) {
        let div = document.createElement("div");
        div.setAttribute("id", id);
        let equipName = document.createTextNode(equipment.name);
        let button = document.createElement("button");
        button.addEventListener("click", deleteParentElement);
        let buttonText = document.createTextNode("Delete");
        div.appendChild(equipName);
        div.appendChild(button);
        button.appendChild(buttonText);
        container.appendChild(div);
    }
}

function deleteParentElement(event) {
    const equipmentIdToRemove = event.target.parentNode.id;
    equipmentMap.delete(equipmentIdToRemove);
    event.target.parentNode.remove();
}

function saveActivity() {
    console.log(typeof currentActivity.equipment);
   currentActivity.equipment = Array.from(equipmentMap.values());

    document.getElementById("equipment-container").remove();
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

function discardChanges() {
    document.getElementById("equipment-container").remove();
    fetchActivity();
}
