function createActivity() {
    document.getElementById("create-activity").style.display = "block";
    //document.getElementById("show-createform").style.display = "none";
}

function saveActivity() {
    document.getElementById("create-activity").style.display = "none";
   // document.getElementById("show-createform").style.display = "block";
         var activityAgeLimit = document.getElementById("activityAgeLimit").value;
         var activityDuration = document.getElementById("activityDuration").value;
         var heighLimit = document.getElementById("heighLimit").value;
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
          heighLimit: heighLimit,
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

        xhr.open('POST', '/activity')
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(data)
        alert(save_user_input + " activity saved!");


         }
        }

 function showActivities() {
    document.getElementById("show-activities").style.display = "block";
     //document.getElementById("activities-fields").style.display = "none";
}


function displayActivities() {

   //document.getElementById("show-activities").style.display = "none";
  document.getElementById("activities-fields").style.display = "none";
      let url = "http://localhost:8080/api/get-activities/";



  let activities = console.log();
  let list = document.getElementById("activities");

  data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})


// document.getElementById("activities").innerHTML ="Activities: " + ;
 //document.getElementById("myList").innerHTML = "" activities;




}
