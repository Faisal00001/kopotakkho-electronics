import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/hooks/axiosInstance";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode the token


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure();
    const [user, setUser] = useState(null);
    const isLogin = localStorage.getItem('user');
    const [loadingUser, setLoadingUser] = useState(true);
    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    // Function to check if the token is expired
    const isTokenExpired = (token) => {
        if (!token) return true;

        try {
            const decodedToken = jwtDecode(token); // Decode the token
            const currentTime = Date.now() / 1000; // Current time in seconds
            return decodedToken.exp < currentTime; // Return true if the token is expired
        } catch (error) {
            console.error("Error decoding token:", error);
            return true; // If decoding fails, consider token expired
        }
    };

    // Customer logout handler
    const customerLogoutHandler = async () => {
        const user = JSON.parse(localStorage.getItem("user"));

        const refreshToken = user.refresh_token;
        const accessToken = user.access_token;

        if (refreshToken && accessToken) {
            try {
                const response = await axiosInstance.post('/logout/', { refresh_token: refreshToken });

                if (response.status === 200) {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            } catch (error) {
                console.error("Customer logout failed:", error.response?.data || error.message);
            }
        }
    };

    useEffect(() => {
        // Check if user is present in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoadingUser(false);

        // Check for token expiration every 10 seconds
        const intervalId = setInterval(() => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && isTokenExpired(user.access_token)) {
                customerLogoutHandler(); // Log out if token is expired
            }
        }, 10000); // Check every 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

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
        isLogin,
        customerLogoutHandler
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
