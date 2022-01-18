import { config } from "src/libs/config"
import useSWR from 'swr';
import type { User, TokenFetch } from "src/domains/user/Entity/UserType";
import type { RegisterInput, LoginInput } from "src/domains/Inorganic/types/FormTypes";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})


type Fetcher = (input: RequestInfo, init?: RequestInit | undefined) => Promise<any>

const fetcher: Fetcher  = async (input: RequestInfo, init?: RequestInit): Promise<any> => {
    const res: Response = await fetch(input, init)
    return res.json();
}

export const useFetchUsers = ()  => {
    const { data, error } = useSWR<User>("https://jsonplaceholder.typicode.com/posts", fetcher)

    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}

/**
 * login
 */
type Login = () => Promise<{message: string, status: number, token: string} | undefined>

export const login = async (data: LoginInput) => {
    try {
        const res: AxiosResponse<{message: string, status: number, token: string}> = await axios.post(config.apiPath + "api/login", data);
        
        const message = res.data.message;
        const status = res.data.status;
        const token = res.data.token;

        return { message, status, token }
    } catch(e) {
        console.log(e);
        const message = "can't login";
        const status = 500;
        const token = "";
        
        return { message, status, token }
    }
}

/**
 * user登録の問い合わせ
 */

type applyRegister = (data:RegisterInput ) => Promise<{message: string, status: number, user?: TokenFetch | undefined} | undefined>

export const appyRegisterUser = async (data: RegisterInput) => {
    try {
        const res: AxiosResponse<
            {message: string, status: number, user: TokenFetch}
        > = await axios.post(config.apiPath + "api/register", data);
        
        const message = res.data.message;
        const status = res.data.status;
        const user = res.data.user
        return { message, status, user }
    } catch(e) {
        console.error(e);
        const message = "post is Failure";
        const status = 500;
        const user = undefined;
        
        return { message, status, user }
    }
}
