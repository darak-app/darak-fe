import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
    userToken: string | null;
    setUserToken: (token: string | null) => void;
}

export const UserContext = createContext<UserContextType>({
    userToken: null,
    setUserToken: () => { },
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [userToken, setUserToken] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    );
};
