export interface User {
    userId?: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    cin?: number;
    phoneNumber?: string;
    twoFactorAuthEnabled?: boolean;
    dateOfBirth?: string;
    salary?: number;
    userStatus?: string;
    role?: string;
  }
  