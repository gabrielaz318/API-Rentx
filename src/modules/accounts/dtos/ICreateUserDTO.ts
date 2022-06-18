interface ICreateUserDTO {
    id?: string;
    avatar?: string;
    name: string;
    password: string;
    email: string;
    driver_license: string;
}

export { ICreateUserDTO }