export default interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  groupCode?: string;
  birthDate: string;
  phoneNumber?: string;
  role: "trainer"|"student"|"admin"
}
