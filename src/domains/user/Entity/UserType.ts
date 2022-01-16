import { RegisterInput } from "src/domains/Inorganic/types/FormTypes"

export type User  = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    birthday: string;
    attribute: string,
    email: string,
    tel: string,
}

export type UserToken = {
    accessToken: string | undefined;
    tokenType: string | undefined;
}

export type TokenFetch = {
    exception: any;
    headers: object;
    original: {
        access_token: string;
        expires_in: number;
        token_type: string;
    }
}
