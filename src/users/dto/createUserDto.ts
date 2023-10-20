export interface CreateUserDto {
  email: string;
  password: string;
  typeOfProfile:string,
  firstName?: string;
  lastName?: string;
  permissionLevel?: number;
}