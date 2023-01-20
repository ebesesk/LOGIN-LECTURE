"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    if (!id.value) return alert("아이디를 입력해주십시오.")
    if (!psword.value) return alert("비밀번호를 입력해주십시오.")
    const req = {
        id: id.value,
        psword: psword.value
    };

    // API
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        // .then((res) => console.log(res));
        // .then(console.log);
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.err);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}