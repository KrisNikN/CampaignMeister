import { object, string } from 'yup';

export const registerSchema = object({
  email: string().email().required('Email is requered'),
  password: string().min(8).required('Password is requered'),
});
