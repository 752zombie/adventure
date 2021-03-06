let activities;

function createActivity() {
    document.getElementById("create-activity").style.display = "block";
    //document.getElementById("show-createform").style.display = "none";
}

function saveActivity() {
    document.getElementById("create-activity").style.display = "none";
   // document.getElementById("show-createform").style.display = "block";
         var activityAgeLimit = document.getElementById("activityAgeLimit").value;
         var activityDuration = document.getElementById("activityDuration").value;
         var heightLimit = document.getElementById("heightLimit").value;
         var activityName = document.getElementById("activityName").value;
         var userCapacity = document.getElementById("userCapacity").value;
         var description = document.getElementById("description").value;
         var save_user_input = confirm('Save activity');

         if (save_user_input == null) {
         alert("cancelled");
         }
         else {
        const data = JSON.stringify({
          ageLimit: activityAgeLimit,
          duration: activityDuration,
          heightLimit: heightLimit,
          name: activityName,
          userCapacity: userCapacity,
          description: description,
        })

        const xhr = new XMLHttpRequest()
        xhr.withCredentials = true

        xhr.addEventListener('readystatechange', function() {
          if (this.readyState === this.DONE) {
            console.log(this.responseText)
          }
        })

        xhr.open('POST', '/activity');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(data);
        alert(save_user_input + " activity saved!");
        refresh();

         }
        }

function fetchActivities() {
    const url = "http://localhost:8080/api/get-activities";
    const prom = fetch(url).then(data => data.json());
    prom.then(json => {activities = json; displayActivities()});
}

function displayActivities() {
    for (let activity of activities) {

        let col = document.createElement("div");
        col.setAttribute("class", "col-sm-4");

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let activityName = document.createElement("h4");
        let activityNameText = document.createTextNode(activity.name);
        activityName.setAttribute("class", "card-title");
        activityName.appendChild(activityNameText);

        let description = document.createElement("p");
        let descriptionText = document.createTextNode(activity.description);
        description.setAttribute("class", "card-text");
        description.appendChild(descriptionText);

        let infoButton = document.createElement("a");
        infoButton.setAttribute("href", "http://localhost:8080/activity/" + activity.activity_id);
        infoButton.setAttribute("class", "btn btn-primary");
        let buttonText = document.createTextNode("View more information");
        infoButton.appendChild(buttonText);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", activity.activity_id);
        deleteButton.setAttribute("class", "btn btn-danger");
        let deleteButtonText = document.createTextNode("Delete");
        deleteButton.addEventListener("click", deleteActivity);
        deleteButton.appendChild(deleteButtonText);


        document.getElementById("activities-container").appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(activityName);
        cardBody.appendChild(description);
        cardBody.appendChild(infoButton);
        cardBody.appendChild(deleteButton);
    }
}

function deleteActivity(event) {
    const activityIdToDelete = event.target.id;

    let deleteActivityRequest = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: null
    }

    let url = "http://localhost:8080/api/delete-activity/" + activityIdToDelete;

    fetch(url, deleteActivityRequest).then(data => refresh());


}

function refresh() {
    document.getElementById("activities-container").innerHTML = "";
    fetchActivities();
}
