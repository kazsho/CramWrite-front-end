import React, { createContext, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

// Create a custom hook to access the UserContext
export const useUserContext = () => useContext(UserContext);

// Create a UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(user ? user : null);    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};