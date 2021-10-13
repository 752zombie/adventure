function test() {
    const url = "http://localhost:8080/api/get-activity/1";
    const prom = fetch(url).then(data => data.json());
    prom.then(json => document.getElementById("test").innerHTML = json.ageLimit);
}