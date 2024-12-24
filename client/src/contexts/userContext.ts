import { KeycloakTokenParsed } from "keycloak-js";
import { createContext } from "react";

export const userContext =createContext<KeycloakTokenParsed|undefined>(undefined)