import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { registerSchema } from 'schemas';
import { ApiResponseBase } from 'types';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import bcrypt from 'bcrypt';

const saltRounds = 10; // Number of salt rounds for bcrypt

export interface RegisterRequest extends NextApiRequest {
  body: { email: string; password: string };
}

export interface RegisterResponse {
  message: string;
}

const handler = nc<
  RegisterRequest,
  NextApiResponse<ApiResponseBase<RegisterResponse>>
>({
  onError: (err, req, res, next) => {
    console.log(err.message);
    res.status(err.statusCode || 500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page not found');
  },
}).post(async (req, res) => {
  try {
    registerSchema.validateSync(req.body);

    const { email, password } = req.body;

    // Initialize Firebase app
    const firebaseConfig = {
      // Your Firebase config options
    };
    initializeApp(firebaseConfig);

    const auth = getAuth();

    // Encrypt the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      hashedPassword, // Save the hashed password instead of plain text
    );

    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: email,
      });

      // Save additional user information to Firestore
      const db = getFirestore();
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: email,
        password: hashedPassword,
      });

      return res
        .status(200)
        .json({ message: `Registration successful for ${email}!` });
    } else {
      throw new Error('User registration failed');
    }
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(400).json({ error: error.message });
  }
});

export default handler;
