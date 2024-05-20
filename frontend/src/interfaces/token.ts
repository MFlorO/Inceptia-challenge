
export interface Token {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    profile_image: null,
    groups: Group[]
    is_active: boolean,
    token: string
}
  

export interface Group {
    id: number,
    name: string,
}