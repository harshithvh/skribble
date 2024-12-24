import { useEffect, useRef, useState } from "react";
import Keycloak from 'keycloak-js';
const useAuth = () => {
    const [isLogin, setLogin] = useState(false);
    const isRun = useRef(false);
    const [user, setUser] = useState<Keycloak.KeycloakTokenParsed | undefined>(undefined);
    const keycloakRef = useRef<Keycloak.KeycloakInstance | null>(null);
    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        const client = new Keycloak({
          url: import.meta.env.VITE_KEYCLOAK_URL,
          realm: import.meta.env.VITE_KEYCLOAK_REALM,
          clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
        });
        console.log(client);
        
        keycloakRef.current = client;
        client.init({ onLoad: "login-required" }).then((authenticated: boolean) => {
            setLogin(authenticated);
            if (authenticated) {
                setUser(client.tokenParsed);
            } else {
                console.error("User is not authenticated");
            }
        }).catch((error) => {
            console.error('Failed to initialize Keycloak:', error);
        });
    }, []);
    const logout = () => {
        if (keycloakRef.current) {
            keycloakRef.current.logout({
                redirectUri: window.location.origin,
            });
        }
    };
    return [isLogin, user, logout] as const;
};
export default useAuth;