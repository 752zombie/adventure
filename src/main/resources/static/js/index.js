
let body;
let postKommuneRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: body
}


let user = {
    "name": "",
}

let postUrl = "http://localhost:8080/user";
function postKommune(data) {
    out("Starter post data");
    out(data);
    data.forEach(obj => {
        user.name = obj.name;
        body = JSON.stringify(user);
        postKommuneRequest.body = body;
        fetch(postUrl, postKommuneRequest).catch((error) => out(error));
    })
}