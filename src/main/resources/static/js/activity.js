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

function getEquipmentText() {
    if (currentActivity.equipment == null || currentActivity.equipment.length === 0) {
        return "No equipment needed";
    }

    let equipmentText = "";
    for (let i = 0; i < currentActivity.equipment.length - 1; i++) {
           equipmentText += currentActivity.equipment[i].name + ", ";
    }

    equipmentText += currentActivity.equipment[currentActivity.equipment.length - 1].name;

    return equipmentText;
}

function displayActivity() {
    document.getElementById("edit-fields").style.display = "none";
    document.getElementById("show-activity").style.display = "block";

    document.getElementById("equipment").innerHTML = "Equipment: " + getEquipmentText();


    document.getElementById("duration").innerHTML = "Duration: " + (currentActivity.duration != null ? currentActivity.duration : "Not specified");
    document.getElementById("height-limit").innerHTML = "Height limit: " + currentActivity.heightLimit;
    document.getElementById("age-limit").innerHTML = "Age limit: " + currentActivity.ageLimit;
    document.getElementById("capacity").innerHTML = "People capacity: " + currentActivity.userCapacity;
    document.getElementById("activity-description").innerHTML = "Description: " + currentActivity.description;
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

    copySetToMap();
    document.getElementById("edit-fields").style.display = "block";
    document.getElementById("show-activity").style.display = "none";

    generateEquipmentBoxes();

    document.getElementById("activity-name-input").value = currentActivity.name;
    document.getElementById("duration-input").value = currentActivity.duration;
    document.getElementById("age-limit-input").value = currentActivity.ageLimit;
    document.getElementById("capacity-input").value = currentActivity.userCapacity;
    document.getElementById("description-input").value = currentActivity.description;
}

function generateEquipmentBoxes() {
    let container = document.createElement("div");
    container.setAttribute("id", "equipment-container");
    document.getElementById("edit-fields").insertBefore(container, document.getElementById("save-button"));

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
    currentActivity.ageLimit = document.getElementById("age-limit-input").value;
    currentActivity.heightLimit = document.getElementById("height-limit-input").value;
    currentActivity.duration = document.getElementById("duration-input").value;
    currentActivity.userCapacity = document.getElementById("capacity-input").value;
    currentActivity.description = document.getElementById("description-input").value;
    saveActivityRequest.body = JSON.stringify(currentActivity);

    fetch(url, saveActivityRequest).then(data => displayActivity());



    document.getElementById("edit-fields").style.display = "none";
    document.getElementById("show-activity").style.display = "block";
}

function addEquipment() {
    const equipmentName = document.getElementById("activity-equipment-input").value;
    const equipment = {name : equipmentName};
    equipmentMap.set("" + nextEquipmentId++, equipment);
    document.getElementById("equipment-container").remove();
    generateEquipmentBoxes();
}

function discardChanges() {
    document.getElementById("equipment-container").remove();
    fetchActivity();
}
