import NextAuth from 'next-auth';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cert } from 'firebase-admin/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKED,
  messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const auth = getAuth();
const db = getFirestore();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: { label: 'Password', type: 'password' },
        action: {
          label: 'Action',
          type: 'text',
          placeholder: 'register or login',
        },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials) {
            throw new Error('Missing credentials');
          }

          // Register the user if the action is 'register'
          if (credentials.action === 'register') {
            await createUserWithEmailAndPassword(
              auth,
              credentials.email,
              credentials.password,
            );

            // Store additional user data in Firestore
            await setDoc(doc(db, 'users', credentials.email), {
              email: credentials.email,
              // Add more fields as needed
            });
          }

          // Login the user if the action is 'login'
          if (credentials.action === 'login') {
            await signInWithEmailAndPassword(
              auth,
              credentials.email,
              credentials.password,
            );
          }

          // Get the user data from Firestore or any other source
          const user = { id: 'unique-user-id', email: credentials.email };

          return user;
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('Authentication failed');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  }),
  secret: process.env.JWT_SECRET,
});
