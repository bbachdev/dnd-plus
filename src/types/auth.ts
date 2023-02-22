import { ClientSafeProvider } from "next-auth/react/types";

export interface LoginProvider {
  authData: ClientSafeProvider
  logo: string
  brandColor: string
  textColor: string
}