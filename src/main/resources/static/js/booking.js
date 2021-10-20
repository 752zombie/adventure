function createBooking() {
    document.getElementById("create-booking").style.display = "block";
    //document.getElementById("show-createform").style.display = "none";
}

function saveActivity() {
    document.getElementById("createbooking").style.display = "none";
   // document.getElementById("show-createform").style.display = "block";
     String activity_name;
       Integer booking_no;
       Date date;
       String name;
       String lastName;
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
