
import { ReactNode, createContext, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";

interface AuthProps {
    children: ReactNode;
}

const AuthContext = createContext({
    // user 초기값 null로 설정, user값은 'User'타입이거나 'null'이 될수 있음
    user: null as User | null,
});

export const AuthContextProvider = ({ children }: AuthProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const auth = getAuth(app);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user);
            }else {
                setCurrentUser(null);
            }
        });
    }, [auth]);

    return (
        <AuthContext.Provider value = {{ user: currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
// 가장 최상단 index.tsx에서 import