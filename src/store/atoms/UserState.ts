import { atom, RecoilState } from "recoil";
import { recoilPersist } from 'recoil-persist'
import type { UserToken } from "src/domains/user/Entity/UserType";

const { persistAtom } = recoilPersist()

export const userToken: RecoilState<{
    accessToken: string;
    tokenType: string;
}> = atom({
    key: "token",
    default: {
        accessToken: "",
        tokenType: ""
    },
    effects_UNSTABLE: [persistAtom],
})