import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
    import.meta.env.VITE_BETTER_AUTH_URL ||
    "https://moneymind-production.up.railway.app/auth",
  basePath: "/auth", // matches app.all('/auth/*splat') in the server
});

export const { signIn, signOut, signUp, useSession } = authClient;
