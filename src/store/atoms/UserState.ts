import { atom, RecoilState } from "recoil";
import type { UserToken } from "src/domains/user/Entity/UserType";

export const userToken: RecoilState<{
    accessToken: string;
    tokenType: string;
}> = atom({
    key: "token",
    default: {
        accessToken: "",
        tokenType: ""
    }
})