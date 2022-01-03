import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        id: 0,
        fullName: "",
        age: 0,
        birthday: null,
        attribute: "",
        email: "",
        tel: ""
    }
})