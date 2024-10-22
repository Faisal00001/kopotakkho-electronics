import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/hooks/axiosInstance";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure()


    // const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const isLogin = localStorage.getItem('user')
    const [loadingUser, setLoadingUser] = useState(true)
    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems')
        return savedItems ? JSON.parse(savedItems) : []
    })
    useEffect(() => {
        // Check if user is present in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoadingUser(false);
    }, []);
    useEffect(() => {
        // Update localStorage whenever cartItems changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    // Customer logout handler
    const customerLogoutHandler = async () => {
        const user = JSON.parse(localStorage.getItem("user"))

        const refreshToken = user.refresh_token;
        const accessToken = user.access_token;

        if (refreshToken && accessToken) {
            try {
                // Call the logout API
                await axiosInstance.post('/logout/',
                    { refresh_token: refreshToken },  // Request body
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`  // Include access token in headers
                        }
                    }
                );

                // Clear customer-related data
                localStorage.removeItem('user');

                window.location.href = '/';
            } catch (error) {
                console.error("Customer logout failed:", error.response?.data || error.message);
            }
        }
    };


    const authInfo = {
        user,
        loadingUser,
        setUser,
        setLoadingUser,
        cartItems,
        setCartItems,
        isLogin,
        customerLogoutHandler
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