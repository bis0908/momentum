const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault();
    // preventDefault: 어떤 event의 기본 행동을 수행하지 않도록 막아준다
    // const username = loginInput.value;
    console.log(loginInput);
}

loginForm.addEventListener("submit", onLoginSubmit);
