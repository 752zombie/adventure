// LOGIN

let body;
let postRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
    },
    body: body
}

let userLogin = {
    "userName": "",
    "password": "",
}

let postUserUrl = "http://localhost:8080/user_login";
function startLogin(btn) {
    //console.log(inpGetUser.value)
    //inpGetUser.forEach(item => { console.log(item.value)})

    let user_name = inpGetUser[0].value;
    let user_password = inpGetUser[1].value;
    console.log(user_name + "from login")
    userLogin.userName = user_name;
    userLogin.password = user_password;
    body = JSON.stringify(userLogin);
    postRequest.body = body;
    fetch(postUserUrl, postRequest).then(response => response.json()).catch(error => console.log(error));

}

const inpGetUser = document.querySelectorAll(".user_info");
const pbGetLogin = document.querySelector(".pbGet");

pbGetLogin.addEventListener('click', startLogin);


// CREATE USER

let createUserObj = {
    "userName": "",
    "password": "",
    "email": ""
}

let postCreateUserUrl = "http://localhost:8080/createUser";
function createUser(btn) {
    let user_name = create_user[0].value;
    let user_password = create_user[1].value;
    let email = create_user[2].value;
    createUserObj.userName = user_name;
    createUserObj.password = user_password;
    createUserObj.email = email;
    console.log(user_name + "from create User")
    console.log(createUserObj.userName);
    console.log(user_password);
    console.log(email);
    body = JSON.stringify(createUserObj);
    postRequest.body = body;
    fetch(postCreateUserUrl, postRequest).then(response => response.json()).catch(error => console.log(error));

}

const create_user = document.querySelectorAll(".create_user");
const createUserPB = document.querySelector(".createUserPB");

createUserPB.addEventListener('click', createUser);





