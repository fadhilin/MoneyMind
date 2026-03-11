import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
baseURL: import.meta.env.VITE_BETTER_AUTH_URL || 'http://localhost:3001',
  basePath: "/auth", // matches app.all('/auth/*splat') in the server
});

export const { signIn, signOut, signUp, useSession } = authClient;
