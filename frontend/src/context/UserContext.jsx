import React, { createContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

// Create a UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(user ? user : null);    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};