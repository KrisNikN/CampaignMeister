import { object, string } from 'yup';

export const registerSchema = object({
  email: string().email().required('Email is requered'),
  password: string().required('Password is requered'),
});
