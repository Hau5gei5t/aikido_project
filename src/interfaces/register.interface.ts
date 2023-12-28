export default interface IRegister{
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    patronymic?: string,
    groupCode?: string,
    phoneNumber?: string
}