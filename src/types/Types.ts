export interface IUser {
    id?: number,
    name: string,
    username: string,
    passwors: string
}

export interface IAuthContext {
    user: IUser | null
    setUser: (user: IUser | null) => void
    login: (username: string, password: string) => Promise<boolean>;
    register: (userData: Omit<IUser, 'id'>) => Promise<boolean>;
    logout: () => void;
}