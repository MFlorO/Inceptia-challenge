
export interface Client {
    id: number,
    name: string,
    users: User[]
}

export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    profile_image: string,
    groups: [{ id: number, name: string }],
    is_active: boolean
}