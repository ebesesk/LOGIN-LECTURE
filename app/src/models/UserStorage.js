"use strict";

const { thistle } = require("color-name");

class UserStorage {
    static #users = {
        id: ["kddddds", "나개발", "김팀장"],
        psword: ["123", "1234", "123456"],
        names: ["ㅏㅇㄴ", "나나", "김"]
    };
    static getUsers(...fields) {
        const users = this.#users;
        
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;