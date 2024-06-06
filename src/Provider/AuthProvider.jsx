import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const isLogin = localStorage.getItem('user')
    const [loadingUser, setLoadingUser] = useState(true)
    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems')
        return savedItems ? JSON.parse(savedItems) : []
    })
    useEffect(() => {
        // Update localStorage whenever cartItems changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    const authInfo = {
        user,
        loadingUser,
        setUser,
        setLoadingUser,
        cartItems,
        setCartItems,
        isLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;