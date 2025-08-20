// lib/auth0.ts

import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  // Options read from .env automatically:
  // domain, clientId, clientSecret, appBaseUrl, and secret
  clientId:process.env.AUTH0_CLIENT_ID,
  domain:process.env.AUTH0_DOMAIN,
  clientSecret:process.env.AUTH0_CLIENT_SECRET,
  appBaseUrl:process.env.APP_BASE_URL,
  secret:process.env.AUTH0_SECRET
});

