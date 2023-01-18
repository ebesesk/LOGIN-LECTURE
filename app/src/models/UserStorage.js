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
        // console.log(newUsers);
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
}

module.exports = UserStorage;