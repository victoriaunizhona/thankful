import React, {useState} from 'react';

export const AuthContext = React.createContext({
    user: null,
    setUser: () => {}
});

const AuthContextProvider = props => {
    const [user, setUser] = useState(null);

    const loginHandler = (user) => {
        setUser(user);
    }
    return (
        <AuthContext.Provider value={{setUser: (user)=> loginHandler(user), user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

