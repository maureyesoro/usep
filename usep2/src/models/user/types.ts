export interface User{
    username: string;
    password: string;
    email: string;
    name: string;
    lastname: string;
    token?: string;
    refreshToken?: string;
}
